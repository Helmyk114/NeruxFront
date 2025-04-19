import * as Yup from "yup";

export const yupValidate = <T extends object>(schema: Yup.Schema<T>) => {
  return (values: T) => {
    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (err: unknown) {
      const errors: Record<string, string> = {};
      if (err && typeof err === "object" && "inner" in err) {
        (err as { inner: Array<{ path?: string; message: string }> }).inner.forEach(
          (validationError) => {
            const path = validationError.path;
            const message = validationError.message;
            if (path && !errors[path]) {
              errors[path] = message;
            } else if (path && errors[path]) {
              errors[path] += `\n${message}`;
            }
          }
        );
      }
      return errors;
    }
  };
};
