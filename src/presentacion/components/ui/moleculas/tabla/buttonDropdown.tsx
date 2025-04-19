import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Key } from "@react-types/shared"; // Importa el tipo Key correcto

interface DropdownButtonProps {
  label: string;
  options: { uid: string; name: string }[];
  selectedKeys: "all" | Iterable<Key>;
  onSelectionChange: (keys: "all" | Set<Key>) => void;
  endContent?: React.ReactNode;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  options,
  selectedKeys,
  onSelectionChange,
  endContent,
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button endContent={endContent} variant="flat">
          {label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label={`${label} Options`}
        closeOnSelect={false}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        onSelectionChange={onSelectionChange}
      >
        {options.map((option) => (
          <DropdownItem key={option.uid} className="capitalize">
            {option.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
