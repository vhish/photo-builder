import React from "react";
interface SvgProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
}
const Svg = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.4"
    strokeLinecap="round"
    //strokeLinejoin="arcs"
    //{...props}
  >
    {props.children}
  </svg>
);
export default Svg;
