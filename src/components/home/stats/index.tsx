import ThemeButton from "../../theme/button";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring, animate } from "framer-motion";
import { easeOutQuart } from "../animations";
import style from "./style.module.scss";

const stats = [
  { number: 15, suffix: "+", label: "Years Active", colorClass: style.yellow },
  { number: 100, suffix: "+", label: "Awards Won", colorClass: style.red },
  { number: 10, suffix: "+", label: "Competitions", colorClass: style.blue },
];

function AnimatedStat({
  stat,
  index,
}: {
  stat: typeof stats[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = React.useState("0");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = (ref.current as HTMLDivElement).getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.number, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplay(String(Math.round(value)));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, stat.number]);

  return (
    <motion.div
      ref={ref}
      className={`${style.stat} ${stat.colorClass}`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: easeOutQuart }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <span className={style.number}>
        {display}
        {stat.suffix}
      </span>
      <span className={style.label}>{stat.label}</span>
    </motion.div>
  );
}

export default function HomeStats() {
  const sectionRef = useRef(null);

  return (
    <section className={style.main} ref={sectionRef}>
      <div className={style.overlay} />
      <div className={style.grid}>
        {stats.map((s, i) => (
          <AnimatedStat key={s.label} stat={s} index={i} />
        ))}
      </div>
      <motion.div
        style={{ position: "relative", zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, ease: easeOutQuart }}
      >
        <ThemeButton path="/achievements" color="secondary">
          View Achievements
        </ThemeButton>
      </motion.div>
    </section>
  );
}
