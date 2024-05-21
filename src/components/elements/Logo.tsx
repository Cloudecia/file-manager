import React from "react";

interface ILogoProps {
  logoWidth?: number;
  logoFillColor?: "#04598a" | "#ffffff";
  textFontSize?: number;
  textColor?: "brand-500" | "white";
  textLeading?: string;
}

const Logo = ({ logoWidth = 24, textFontSize = 12, textColor = "brand-500", textLeading = "58%", logoFillColor = "#04598a" }: ILogoProps) => {
  return (
    <div className="flex gap-1 items-baseline justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width={logoWidth} viewBox="0 0 40 30">
        <g id="Group_1" data-name="Group 1" transform="translate(-701.469 -212)">
          <path
            id="noun-cloud-5495389"
            d="M135.289,112.343h-1.709a11.431,11.431,0,0,0-5.986-8.749,10.676,10.676,0,0,0-10.338.242,11.48,11.48,0,0,0-5.6,9.02,9.852,9.852,0,0,0-6.138,6.458,10.328,10.328,0,0,0,1.4,8.952,9.55,9.55,0,0,0,7.793,4.11h20.576a9.475,9.475,0,0,0,6.9-2.891,10.283,10.283,0,0,0,0-14.253,9.475,9.475,0,0,0-6.9-2.89Zm0,17.077H119.448c-8.117,0-5-15.6-5-15.6.43-2.4.831-4.457,2.368-6.072a7.973,7.973,0,0,1,11.642,0,8.655,8.655,0,0,1,2.357,6.072,1.506,1.506,0,0,0,.417,1.045,1.4,1.4,0,0,0,1.007.433h3.044a6.678,6.678,0,0,1,4.876,2.032,7.248,7.248,0,0,1,0,10.059,6.678,6.678,0,0,1-4.876,2.032Z"
            transform="translate(596.407 109.623)"
            fill={logoFillColor}
          />
        </g>
      </svg>
      <span className={`text-${textColor} font-bold leading-[${textLeading}] text-[${textFontSize}px]`}>CLOUDECIA</span>
    </div>
  );
};

export default Logo;
