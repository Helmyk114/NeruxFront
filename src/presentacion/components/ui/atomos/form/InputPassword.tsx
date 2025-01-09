import React from "react";
import {Input} from "@nextui-org/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

export default function InputPassword(): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isRequired = {true}
      className="max-w-xs"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <IconEyeClosed className="text-2xl text-default-400 pointer-events-none"/>
          ) : (
            <IconEye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label="Password"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      labelPlacement="outside"
    />
  );
}

