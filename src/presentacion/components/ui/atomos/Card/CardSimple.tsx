import { Card, CardBody } from "@heroui/react";

interface CardSimpleProps {
  className?: string;
  children?: React.ReactNode;
}

export function CardSimple({
  className,
  children,
}: CardSimpleProps): JSX.Element {
  return (
    <Card className={className}>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
