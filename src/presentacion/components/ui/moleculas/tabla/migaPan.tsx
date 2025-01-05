// src/moleculas/Breadcrumb.tsx
import React from "react";
import MigaItem from "../../atomos/tabla/migaPanItems";

interface MigaPanProps {
  items: { label: string; href?: string; icon?: React.ReactNode }[];
}

const MigaPan: React.FC<MigaPanProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex space-x-1">
        {items.map((item, index) => (
          <MigaItem
            key={index}
            label={item.label}
            href={item.href}
            icon={item.icon}
            isActive={index === items.length - 1}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MigaPan;
