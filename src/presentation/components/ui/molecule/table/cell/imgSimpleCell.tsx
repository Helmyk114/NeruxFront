import { User } from "@heroui/react";

interface ImgCellProps {
  avatar?: string;
  textTop?: string;
}

export function ImgCellSimple({ avatar, textTop }: ImgCellProps): JSX.Element {
  return (
    <User
      avatarProps={{ radius: "lg", src: avatar || undefined }}
      name={textTop}
    />
  );
}
