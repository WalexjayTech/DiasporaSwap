import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d=""
        />
    </Svg>
  );
};

export default Icon;
