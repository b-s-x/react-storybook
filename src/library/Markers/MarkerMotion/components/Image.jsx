import { motion } from "framer-motion"
import styles from './index.module.scss';
import { image } from "../config";

export const Image = ({ imageUrl }) => {
  return (
    <motion.image
      variants={image}
      className={`${styles['marker_image']}`}
      width="100%"
      height="100%"
      clipPath="url(#circle)"
      xlinkHref={imageUrl}
    />
  )
};
