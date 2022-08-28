import { motion } from "framer-motion"
import styles from './index.module.scss';
import { icon } from "../config";

export const Icon = ({ iconD }) => {
  return (
    <motion.path
      variants={icon}
      className={`${styles['marker_icon']}`}
      d={iconD}
    />
  )
};
