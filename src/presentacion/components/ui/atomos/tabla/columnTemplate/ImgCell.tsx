import { User } from "@heroui/react";

interface ImgCellProps {
  avatar?: string;
  textBotton?: string;
  textTop?: string;
}

export function ImgCell({
  avatar,
  textBotton,
  textTop,
}: ImgCellProps): JSX.Element {
  return (
    <User
      avatarProps={{ radius: "lg", src: avatar || undefined }}
      description={textBotton}
      name={textTop}
    />
  );
}
