import React from "react";
import { Button } from "@heroui/react";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";

export const Actions: React.FC = () => {
  return (
    <div className="relative flex gap-2">
      <Button isIconOnly size="sm" variant="light">
        <IconEye className="text-default-300" />
      </Button>
      <Button isIconOnly size="sm" variant="light">
        <IconPencil className="text-default-300" />
      </Button>
      <Button isIconOnly size="sm" variant="light">
        <IconTrash className="text-default-300" />
      </Button>
    </div>
  );
};
