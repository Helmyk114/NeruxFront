import { IconAlertTriangle } from "@tabler/icons-react";

interface TextErrorProps {
  error: string;
  classname?: string;
}

export function TextError({ error, classname }: TextErrorProps): JSX.Element {
  return (
    <div className={`flex mt-2 ${classname}`}>
      <IconAlertTriangle className="text-semantic-error mr-1.5" size={15} />
      <span className="font-OpenSans text-xs text-semantic-error">
        {error}
      </span>
    </div>
  );
}
