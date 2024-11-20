import { color } from "framer-motion";
import React from "react";

interface BackgroundProps{
    className: string;
    color?: string;
    children: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({ className = "", color = "black", children }) => {
    return (
        <div className={`${className} min-h-screen`} style={{ backgroundColor: color }}>
            {children}
        </div>
    );
};
export default Background;