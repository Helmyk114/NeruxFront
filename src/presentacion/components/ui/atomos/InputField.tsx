import React from "react";
import { useField } from "formik";
import { Input } from "@nextui-org/react";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  icono?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type = "text", placeholder, icono }) => {
  const [field, meta] = useField(name);

  // Clases dinámicas para cambiar el borde según el estado del input
  const inputClass =
    meta.touched && meta.error
      ? "border-red-500"
      : meta.touched && !meta.error
      ? "border-purple-500"
      : "border-gray-300";

  return (
    <div>
      <Input
        {...field}
        type={type}
        label={label}
        placeholder={placeholder}
        contentRight={icono}
        status={meta.touched && meta.error ? "error" : "default"}
        className={`${inputClass} border-2 focus:border-purple-500 rounded-lg`} // Agregamos rounded-lg para el border-radius
        style={{ borderRadius: "12px" }} // Esto asegura que el borde del input sea redondeado
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
