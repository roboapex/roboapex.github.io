import React, { useEffect, useState } from "react";
import ThemeButton from "../../theme/button";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import style from "./style.module.scss";

const NUMBER_OF_IMAGES = 6;

export default function HomeHeader() {
  const [imageIndex, setImageIndex] = useState(0);
  const bgUrl = useBaseUrl(`/img/home/header/${imageIndex}.jpg`);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -60]);

  useEffect(() => {
    const int = setInterval(() => {
      setImageIndex((i) => (i + 1 <= NUMBER_OF_IMAGES - 1 ? i + 1 : 0));
    }, 7000);
    return () => clearInterval(int);
  }, []);

  return (
    <section className={style.header}>
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          className={style.bgImage}
          style={{
            backgroundImage: `url(${bgUrl})`,
            y: bgY,
          }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>

      <div className={style.overlay} />

      <motion.div
        className={style.content}
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          className={style.accentLine}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        <h1 className={style.title}>
          <span className={style.robotics}>
            <span style={{ display: "inline-block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
              >
                Robotics
              </motion.span>
            </span>
          </span>
          <span className={style.apex}>
            <span style={{ display: "inline-block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
              >
                @APEX
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          className={style.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
        >
          run from murphy before it comes to you
        </motion.p>

        <motion.div
          className={style.buttons}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <ThemeButton path="https://www.instagram.com/roboapex/">Follow Us</ThemeButton>
          <ThemeButton
            path="/achievements"
            color="secondary"
            type="outline"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}
          >
            Our Achievements
          </ThemeButton>
        </motion.div>
      </motion.div>

      <motion.div
        className={style.indicators}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        {[...Array(NUMBER_OF_IMAGES)].map((_, i) => (
          <button
            key={i}
            className={`${style.dot} ${imageIndex === i ? style.dotActive : ""}`}
            onClick={() => setImageIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </motion.div>

      <motion.div
        className={style.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <span />
      </motion.div>
    </section>
  );
}
