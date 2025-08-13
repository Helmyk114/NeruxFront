interface DerechaProps {
  formulario: React.ReactNode;
}

export function SeccionDerecha({
  formulario
}: DerechaProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {formulario}
    </div>
  );
}
