import React, { useState } from "react";
import { useField } from "formik";
//import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  value: string;
  icon?: React.ReactNode; // Prop para íconos opcionales al final
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type = "text", onChange, onBlur, value, icon }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  // Alternar visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mb-4 relative">
      <label className="text-white font-semibold mb-1">
        {label} <span className="text-pink-500">*</span>
      </label>
      <div className="relative">
        <input
          {...field}
          type={type === "password" && showPassword ? "text" : type} // Cambia a "text" solo si showPassword es true
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`border-2 ${
            meta.touched && meta.error ? "border-red-500" : meta.touched ? "border-purple-500" : "border-white"
          } rounded-lg bg-transparent text-white p-2 pr-10 outline-none focus:border-purple-500 w-full`} // pr-10 para espacio del ícono
        />
        {type === "password" ? (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
          >
            {/* {showPassword ? <FiEyeOff /> : <FiEye />} */}
          </button>
        ) : (
          icon && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
              {icon}
            </div>
          )
        )}
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default InputField;
