import React from "react";
import { LogoProps } from "./logo";

const ImgBackground : React.FC<LogoProps> = ({ src, alt, className }) =>{
    return (
        <div className={className}>
        <img src={src} alt={alt}/>
      </div>
    )
}
export default ImgBackground