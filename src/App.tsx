import { useDisclosure } from "@nextui-org/react";
import PopUpSuccess from "./utils/popUps/success";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open Modal</button>
      <PopUpSuccess isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
