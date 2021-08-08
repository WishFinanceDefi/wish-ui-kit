import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 92 92" {...props}>
      {" "}
      {/* 32 */}
      <image width="92" height="92" href="/images/logo.png" /> {/* logo.png */}
    </Svg>
  );
};

export default Icon;
