import React from "react";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import K from "../../../../constants";
import { StaggerContainer, staggerItem, easeOutQuart } from "../animations";
import style from "./style.module.scss";

export default function HomeSocial() {
  return (
    <section className={style.main}>
      <div className={style.content}>
        <motion.p
          className={style.overline}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 0.45, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutQuart }}
        >
          Stay Connected
        </motion.p>

        <motion.h1
          className={style.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutQuart }}
        >
          Find us online.
        </motion.h1>

        <StaggerContainer className={style.icons} staggerDelay={0.1}>
          {K.socials.map((e) => (
            <motion.div key={`${e.handle}-${e.platform}`} variants={staggerItem}>
              <Link href={e.url} className={style.iconLink}>
                <motion.div
                  className={style.icon}
                  style={{ borderColor: e.color }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 12,
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.3, ease: easeOutQuart }}
                >
                  <i className={e.icon} style={{ color: e.color }} />
                </motion.div>
                <span className={style.platform}>{e.platform}</span>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
