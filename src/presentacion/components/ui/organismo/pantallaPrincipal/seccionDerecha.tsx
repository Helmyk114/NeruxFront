interface DerechaProps {
  formulario: React.ReactNode;
}

export function SeccionDerecha({
  formulario
}: DerechaProps): JSX.Element {
  return (
    <div>
      {formulario}
    </div>
  );
}
