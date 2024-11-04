import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  isFilled?: boolean;
  height?: number;
  width?: number;
}
const HeartIcon = ({
  isFilled = true,
  height = 24,
  width = 24,
  ...props
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={isFilled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-heart"
    style={{ height: height, width: width }}
    {...props}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
export default HeartIcon;
