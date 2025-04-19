import React from "react";

interface SidebarLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  label,
  onClick,
  startIcon,
  endIcon,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className=" flex px-4 py-2 hover:bg-hoverPurple rounded-md transition"
    >
      {startIcon && <span className="text-gray mr-2">{startIcon}</span>}
      <span className="text-white truncate">{label}</span>
      {endIcon && <span className="text-gray-400">{endIcon}</span>}
    </a>
  );
};

export default SidebarLink;
