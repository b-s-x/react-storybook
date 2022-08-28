import { motion } from "framer-motion"
import { MarkerForm } from "./components/MarkerForm";
import { ImageCircleForm } from "./components/ImageCircleForm";
import { Icon } from "./components/Icon";
import { Image } from "./components/Image";
import { Text } from "./components/Text";
import { marker, transition } from "./config";

export const MarkerMotion = ({
  iconD,
  imageUrl,
  width,
  textName,
  textPlace,
  color,
  colorText,
}) => {
  return (
    <>
      <motion.svg
        whileHover="hovered"
        initial="default"
        variants={marker}
        transition={transition}
        viewBox="0 0 72 130.7"
        width={width}
        style={{
          originX: 0.25,
          fill: color,
          cursor: 'pointer',
        }}
      >
        <ImageCircleForm  />
        <MarkerForm />
        <Icon
          iconD={iconD}
        />
        <Image imageUrl={imageUrl} />
        <Text
          textName={textName}
          textPlace={textPlace}
          color={colorText}
        />
      </motion.svg>
    </>
  );
};
