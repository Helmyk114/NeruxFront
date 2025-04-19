import { IconAlertTriangle } from "@tabler/icons-react";

interface TextErrorProps {
  error: string;
  classname?: string;
  size?: number;
}

export function TextError({ error, classname, size=16 }: TextErrorProps): JSX.Element {
  return (
    <div className={`flex mt-2 ${classname}`}>
      <IconAlertTriangle className="text-semantic-error mr-1.5" size={size} />
      <span className="font-OpenSans text-sm text-semantic-error">{error}</span>
    </div>
  );
}
