import { CardAtom } from "../atom/layout";

interface CardTemplateProps {
  children: React.ReactNode;
}
export function CardTemplate({ children }: CardTemplateProps): JSX.Element {
  return (
    <div className="w-full">
      <CardAtom className="bg-base-second">{children}</CardAtom>
    </div>
  );
}
