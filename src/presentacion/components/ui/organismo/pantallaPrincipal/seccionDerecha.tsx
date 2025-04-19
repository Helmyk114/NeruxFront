interface DerechaProps {
  formulario: React.ReactNode;
}

export function SeccionDerecha({
  formulario
}: DerechaProps): JSX.Element {
  return (
    <div className="items-center justify-center flex flex-col w-full">
      {formulario}
    </div>
  );
}
