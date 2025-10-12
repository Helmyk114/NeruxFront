import { Link as LinkHero } from "@heroui/react";
import { IconCirclePlus } from "@tabler/icons-react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to?: string;
  texto: string;
  onClick?: () => void;
  className?: string;
}

export function LinkAtom({
  to,
  texto,
  onClick,
  className,
}: LinkProps): JSX.Element {
  if (onClick) {
    return (
      <LinkHero
        as="button"
        onClick={onClick}
        className={`font-OpenSans ${className}`}
      >
        <span className="flex gap-1">
          <IconCirclePlus />
          {texto}
        </span>
      </LinkHero>
    );
  }

  return (
    <LinkHero as={RouterLink} to={to} className={`font-OpenSans ${className}`}>
      {texto}
    </LinkHero>
  );
}
