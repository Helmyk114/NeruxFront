// import { NumberInput } from "@heroui/react";
// import { useField } from "formik";
// import { TextError } from "../textos/textError";
// import { useEffect, useState } from "react";

// interface InputNumberProps {
//   label: string;
//   nombre: string;
//   isRequired?: boolean;
//   className?: string;
// }

// export function InputNumber({
//   label,
//   nombre,
//   isRequired,
//   className,
// }: InputNumberProps): JSX.Element {
//   const [field, meta, helpers] = useField(nombre);
//   const [displayValue, setDisplayValue] = useState<string>("");
//   const hasError = meta.touched && meta.error;

//   useEffect(() => {
//     if (field.value !== undefined && field.value !== null) {
//       setDisplayValue(field.value.toString());
//     }
//   }, [field.value]);

//   const handleValueChange = (value: number) => {
//     helpers.setValue(value);
//     setDisplayValue(value.toString());
//   };


//   const handleBlur = () => {
//     // Formatear al perder foco
//     if (field.value) {
//       setDisplayValue(
//         new Intl.NumberFormat('es-ES', {
//           minimumFractionDigits: 1,
//           maximumFractionDigits: 2,
//           useGrouping: true
//         }).format(field.value)
//       );
//     }
//     helpers.setTouched(true);
//   };

//   return (
//     <div className="flex flex-col w-full">
//       <NumberInput
//         {...field}
//         classNames={{
//           label: [
//             "font-OpenSans",
//             hasError ? "!text-semantic-error" : "text-texts-level1",
//           ],
//           inputWrapper: [
//             "!text-texts-level1",
//             "dark:!text-texts-level1",
//             "focus-within:!border-button-active",
//             "dark:focus-within:border-button-active",
//             "hover:!border-button-active",
//             "dark:hover:border-button-active",
//             "dark:border-base-fourth",
//             "border-base-fourth",
//             "dark:bg-base-thrith",
//             "bg-base-thrith",
//             hasError
//               ? "!border-semantic-error hover:!border-semantic-error focus-within:!border-semantic-error"
//               : "dark:hover:!border-button-active dark:focus:!border-button-active",
//           ],
//         }}
//         className={className}
//         label={label}
//         isRequired={isRequired}
//         variant="bordered"
//         labelPlacement="outside"
//         placeholder=""
//         value={field.value ?? ""}
//         onValueChange={handleValueChange}
//         onBlur={handleBlur}
//         isInvalid={Boolean(hasError)}
//         errorMessage={
//           meta.error ? (
//             <TextError error={meta.error as string} classname={className} />
//           ) : null
//         }
//         hideStepper
//         minValue={1}
//       />
//     </div>
//   );
// }
