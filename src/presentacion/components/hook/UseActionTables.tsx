import { useDisclosure } from "@heroui/react";
import { useState } from "react";

type Mode = "ver" | "editar" | "crear";

export const useActionTables = <ID extends string | number>(
  onDelteItem?: (item: ID) => void,
) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<ID | null>(null);
  const [mode, setMode] = useState<Mode>("ver");

  const handleEdit = (item: ID) => {
    setSelectedItem(item);
    setMode("editar");
    onOpen();
  };

  const handleView = (item: ID) => {
    setSelectedItem(item);
    setMode("ver");
    onOpen();
  };

  const handleDelete = async (item: ID) => {
    setSelectedItem(item);

    if (!onDelteItem) {
      console.warn("No se pasó función de eliminación");
      return;
    }
     try {
      onDelteItem(item);
     } catch (error) {
      throw new Error(`Error al eliminar el proveedor: ${error}`);
     }

  };

  const handleCreate = () => {
    setSelectedItem(null);
    setMode("crear");
    onOpen();
  };

  return {
    handleEdit,
    handleView,
    handleDelete,
    handleCreate,
    selectedItem,
    setMode,
    mode,
    onOpen,
    isOpen,
    onOpenChange,
  };
};
