import { NavigateOptions, useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigate = useNavigate();

  const redirectTo = (path: string, options?: NavigateOptions) => {
    navigate(path, options);
  };

  return redirectTo;
};
