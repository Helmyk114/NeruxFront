import React from "react";

interface BackgroundProps{
    className: string;
    children: React.ReactNode;
};

const Background : React.FC<BackgroundProps>=({className, children}) => {
    return(
        <div className={`${className} min-h-screen`}>
          {children}
        </div>
    );
};
export default Background;