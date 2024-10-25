import React from "react";

export interface LogoProps {
    src: string;
    alt: string;
    width : string;
    heigth : string;
    className?: string;

    
  }
  
  const Logo: React.FC<LogoProps> = ({ src, alt, className, heigth, width }) => {
    return (
      <div className={className}>
        <img src={src} alt={alt} height={heigth} width={width} />
         
     
      </div>
    )
  }
  
  export default Logo;