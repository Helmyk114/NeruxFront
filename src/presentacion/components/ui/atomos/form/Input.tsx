import {Input} from "@nextui-org/react";
import { IconUser } from "@tabler/icons-react";

export default function InputFiled(): JSX.Element {
  return (
    <Input
      className="max-w-xs"
      endContent={
        <IconUser className="text-2xl text-default-400 pointer-events-none"/>
      }
      label="Usuario"
      variant="bordered"
      labelPlacement="outside"
    />
  );
}

