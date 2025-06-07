import { useDisclosure } from "@heroui/react";
import { useState } from "react";

type Mode = "ver" | "editar" | "crear";

export const useActionTables = <ID extends string | number>() => {
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

  const handleDelete = (item: ID) => {
    console.log("hola", item);
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
    mode,
    isOpen,
    onOpenChange,
  };
};
