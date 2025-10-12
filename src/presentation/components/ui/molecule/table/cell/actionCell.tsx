import { ActionIcons } from "@/common/constant/icon";
import { Button } from "@heroui/react";

interface ActionConfig {
  visible?: boolean;
  disable?: boolean;
}

interface ActionsProps {
  onEdit: () => void;
  onView: () => void;
  onDelete: () => void;
  config?: {
    edit?: ActionConfig;
    view?: ActionConfig;
    delete?: ActionConfig;
  };
}

export function ActionsCell({
  onEdit,
  onView,
  onDelete,
  config = {},
}: ActionsProps): JSX.Element {
  return (
    <div className="relative flex gap-2">
      {config.view?.visible !== false && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={onView}
          isDisabled={config.view?.disable}
        >
          <ActionIcons.view size={25} />
        </Button>
      )}
      {config.edit?.visible !== false && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={onEdit}
          isDisabled={config.edit?.disable}
        >
          <ActionIcons.edit size={25} />
        </Button>
      )}
      {config.delete?.visible !== false && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={onDelete}
          isDisabled={config.delete?.disable}
        >
          <ActionIcons.delete size={25} />
        </Button>
      )}
    </div>
  );
}
