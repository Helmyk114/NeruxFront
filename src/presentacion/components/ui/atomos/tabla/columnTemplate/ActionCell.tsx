import { Button } from "@heroui/react";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";

interface ActionsProps {
  onEdit: () => void;
  onView: () => void;
  onDelete: () => void;
}

export function ActionsCell({ onEdit, onView, onDelete }: ActionsProps):JSX.Element {
  return (
    <div className="relative flex gap-2">
      <Button isIconOnly size="sm" variant="light" onPress={onView}>
        <IconEye className="text-default-300" />
      </Button>
      <Button isIconOnly size="sm" variant="light" onPress={onEdit}>
        <IconPencil className="text-default-300" />
      </Button>
      <Button isIconOnly size="sm" variant="light" onPress={onDelete}>
        <IconTrash className="text-default-300" />
      </Button>
    </div>
  );
};
