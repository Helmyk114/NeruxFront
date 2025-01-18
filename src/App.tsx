// import { useDisclosure } from "@heroui/react";
// import PopUpSuccess from "./utils/popUps/success";

import Login  from "./presentacion/pages/Login";

 export default function App(): JSX.Element {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <button onClick={onOpen}>Open Modal</button>
      <PopUpSuccess isOpen={isOpen} onClose={onClose} /> */}
      <Login />
    </>
  );
}
