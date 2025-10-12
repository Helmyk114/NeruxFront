import { useDisclosure } from "@heroui/react";
import { useState } from "react";
import { useRedirect } from "./useRedirect";

type Mode = "ver" | "editar" | "crear";

export const useActionTables = <ID extends string>(
  onDeleteItem?: (item: ID) => void,
  onEditNavigate?: (item: ID) => void,
  onCreateNavigate?: string
) => {
  const redirect = useRedirect();
  const drawer = useDisclosure();
  const popUp = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<ID | null>(null);
  const [mode, setMode] = useState<Mode>("ver");

  const handleEdit = (item: ID) => {
    setSelectedItem(item);
    setMode("editar");
    if (onEditNavigate) {
      onEditNavigate(item);
    } else {
      drawer.onOpen();
    }
  };

  const handleView = (item: ID) => {
    setSelectedItem(item);
    setMode("ver");
    drawer.onOpen();
  };

  const handleDelete = async (item: ID) => {
    setSelectedItem(item);
    popUp.onOpen();
  };

  const handleDeleteConfirm = async () => {
    if (!onDeleteItem || selectedItem === null) return;
    onDeleteItem(selectedItem);
    popUp.onClose();
  };

  const handleCreate = () => {
    setSelectedItem(null);
    setMode("crear");
    if (onCreateNavigate) {
      redirect(onCreateNavigate);
    } else {
      drawer.onOpen();
    }
  };

  return {
    handleEdit,
    handleView,
    handleDelete,
    handleDeleteConfirm,
    handleCreate,
    selectedItem,
    setMode,
    mode,
    drawer,
    popUp,
  };
};
