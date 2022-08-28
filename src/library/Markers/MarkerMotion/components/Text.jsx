import { motion } from "framer-motion"
import styles from './index.module.scss';
import { text } from "../config";

export const Text = ({ textName, textPlace, color }) => {
  return (
    <motion.text
      variants={text}
      className={`${styles['marker_text']}`}
      transform="matrix(1 0 0 1 0 13.9998)"
      style={{ fill: color }}
    >
      <tspan x="50%" y="0">
        {textName}
      </tspan>
      <tspan x="50%" y="15">
        {textPlace}
      </tspan>
    </motion.text>
  )
}
