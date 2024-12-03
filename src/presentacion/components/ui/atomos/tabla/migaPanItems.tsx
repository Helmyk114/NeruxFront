// src/atomos/BreadcrumbItem.tsx
import React from "react";

interface MigaItemProps {
  label: string;
  href?: string;
  isActive?: boolean;
  icon?: React.ReactNode; // Ícono opcional
}

const MigaItem: React.FC<MigaItemProps> = ({ label, href, isActive = false, icon }) => {
  return (
    <li className={`inline-flex items-center ${isActive ? "text-gray-100 font-semibold" : "text-gray-500"}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {href && !isActive ? (
        <a href={href} className="hover:underline">
          {label}
        </a>
      ) : (
        <span>{label}</span>
      )}
      {!isActive && <span className="mx-2 text-gray-400">/</span>}
    </li>
  );
};

export default MigaItem;
