import { Logo } from "../../atomos/paginaPrincipal/logo";

interface IzquierdaProps {
  fondo: string;
  logotipo: string;
  texto: React.ReactNode;
}

export function SeccionIzquierda({
  fondo,
  logotipo,
  texto,
}: IzquierdaProps): JSX.Element {
  return (
    <>
      <Logo
        src={fondo}
        alt="fondo"
        className="w-[97%] h-[94%] absolute inset-4 z-0 rounded-l-[34px]"
      />
      <div className="relative z-10">
        <div className="flex ml-12 mt-12">
          <Logo
            src={logotipo}
            alt="logotipo"
            width="250px"
            className="md:w-48 lg:w-64 sm:w-48 absolute z-20"
          />
        </div>
        <div className="mt-64 ml-14">
          <div className="overflow-visible">{texto}</div>
        </div>
      </div>
    </>
  );
}
