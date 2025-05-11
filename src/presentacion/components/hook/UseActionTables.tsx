  import { useDisclosure } from "@heroui/react";
  import { useState } from "react";

  export const useActionTables = <T extends object> () => {
    const { isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selectedItem, setSelectedItem] = useState<T | null>(null);

    const handleEdit = (item: T) => {
      console.log("Editando:", item);
      // Lógica para editar
    };

    const handleView = (item: T) => {
      setSelectedItem(item);
      onOpen();
    };

    const handleDelete = (item: T) => {
      console.log("hola", item);
    };

    return {
      handleEdit,
      handleView,
      handleDelete,
      selectedItem,
      isOpen,
      onOpenChange,
    };
  };
