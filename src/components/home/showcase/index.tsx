import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./style.module.scss";

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isDesktop;
}

export default function HomeShowcase() {
  const ref = React.useRef(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], isDesktop ? [0.88, 1, 1, 0.92] : [0.95, 1, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], isDesktop ? [6, 0] : [0, 0]);

  return (
    <section className={style.main} ref={ref}>
      <motion.div
        className={style.vid}
        style={isDesktop ? { scale, opacity, rotateX, transformPerspective: 1200 } : { scale, opacity }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nOeSbfdWEn4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </section>
  );
}
