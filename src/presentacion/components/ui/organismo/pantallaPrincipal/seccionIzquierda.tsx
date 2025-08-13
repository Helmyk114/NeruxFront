import { Logo } from "@/presentacion/components/ui/atomos";

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
      <div className="flex flex-col h-full justify-between relative z-10 ">
        <div className="p-14 ">
          <Logo
            src={logotipo}
            alt="logotipo"
            width="250px"
            className="md:w-48 lg:w-64 sm:w-48"
          />
        </div>
        <div className="p-14">
          <div className="overflow-visible">{texto}</div>
        </div>
      </div>
    </>
  );
}
