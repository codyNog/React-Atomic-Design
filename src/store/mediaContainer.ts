import { useState } from "react";
import { createContainer } from "unstated-next";
import { mobileWidth } from "../constrants/style";

const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false);

  const setDeviceWidth = (width: number) => {
    if (width < mobileWidth) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const initWidth = () => {
    setDeviceWidth(window.innerWidth);
  };

  const onChangeWidth = () => {
    setDeviceWidth(window.innerWidth);
  };

  return { isMobile, initWidth, onChangeWidth };
};

const Media = createContainer(useMedia);

export default Media;
