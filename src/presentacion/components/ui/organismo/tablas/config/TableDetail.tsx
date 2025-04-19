import { useDisclosure } from "@heroui/react";


export function DetailItemTable(data: string) {
  const { onOpen, onClose } = useDisclosure();
  console.log('hola',data)

  
  

  const closer = () => {
    onClose();
  }

  const handleView = async () => {
    try {
      onOpen();
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  return{

    closer,
    handleView,
  }
}