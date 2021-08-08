import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 92 92" {...props}>
      {" "}
      {/* 205 26  */}
      <image width="92" height="92" href="/images/wish.png" /> {/* LogoTextNewDark.png : LogoTextNewWhite.png */}
    </Svg>
  );
};

export default Logo;
