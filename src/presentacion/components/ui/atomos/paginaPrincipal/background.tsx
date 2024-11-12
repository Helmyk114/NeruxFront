import { color } from "framer-motion";
import React from "react";

interface BackgroundProps{
    className: string;
    color?: string;
    children: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({  color = "black", children }) => {
    return (
        <div style={{ backgroundColor: color }}>
            {children}
        </div>
    );
};
export default Background;