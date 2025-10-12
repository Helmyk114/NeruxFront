import { IconCheck, IconPoint, IconX } from "@tabler/icons-react";

interface ValidationRule {
  id: number;
  mensaje: string;
  valido: boolean | null;
}

interface PasswordCheckListProps {
  rules: ValidationRule[];
}

export function PasswordCheckList({ rules }: PasswordCheckListProps) {
  return (
    <div className="flex flex-col text-sm items-center">
      <div className="flex flex-col w-[77%] max-w-md">
        {rules.map((regla) => {
          let icon = (
            <span>
              <IconPoint className="" size={18} />
            </span>
          );
          let textColor = "text-gray-500";

          if (regla.valido !== null) {
            icon = regla.valido ? (
              <IconCheck className="text-semantic-exito" size={18} />
            ) : (
              <IconX className="text-semantic-error" size={18} />
            );
            textColor = regla.valido
              ? "text-semantic-exito"
              : "text-semantic-error";
          }

          return (
            <span
              key={regla.id}
              className={`flex flex-row font-OpenSans gap-x-2 items-center ${textColor}`}
            >
              {icon}
              {regla.mensaje}
            </span>
          );
        })}
      </div>
    </div>
  );
}
