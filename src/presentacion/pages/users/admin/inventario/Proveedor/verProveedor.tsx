import { Proveedor } from "@/domain/entities";
import { proveedoresUseCase } from "@/domain/usecases/inventario/categoria/proveedor.useCase";
import { useItemFetch } from "@/presentacion/components/hook";
import { ButtonAtom, Title2, Title3 } from "@/presentacion/components/ui/atomos";
import { DrawerWrapper } from "@/presentacion/components/ui/organismo";
import { Spinner } from "@heroui/react";


interface VerProveedorProps {
  isOpen: boolean;
  onClose: () => void;
  id: string | number | null;
  setMode: (mode: "ver" | "editar" | "crear") => void;
  onOpen: () => void;
}

export function VerProveedores({
  isOpen,
  onClose,
  id,
  setMode,
  onOpen,
}: VerProveedorProps): JSX.Element {
  const { data: proveedor, loading, error } = useItemFetch<Proveedor>(
    async (id) => {
      const data = await proveedoresUseCase.getById("/supplier", id);
      return { data };
    },
    {
      byId: id,
      enable: !!id,
      reload: isOpen,
    }
  );

  const handleEditClick = () => {
    setMode("editar");
    onOpen();
  };

  return (
    <DrawerWrapper
      isOpen={isOpen}
      onClose={onClose}
      isDimissable={true}
      header={<Title3 classname="mt-6" titulo="Información del proveedor" />}
      body={
        loading ? (
          <div><Spinner title="Loading..."/></div>
        ) : error ? (
          <div>Error: {"No se encontró el proveedor"}</div>
        ) : (
        <>
          <div className="-mb-3">Nombre</div>
          <Title2 titulo={proveedor?.name}/>
          <div className="-mb-3">Empresa</div>
          <Title2 titulo={proveedor?.supplier || "-"}/>
          <div className="-mb-3">Correo</div>
          <Title2 titulo={proveedor?.email || "-"}/>
          
          <div className="-mb-3">🗓️ Creado el:</div>
          <Title2 clasname="ml-5" titulo={proveedor?.create_at}/>
          <div className="-mb-3 -mt-3">✏️ Ultima actualización:</div>
          <Title2 clasname="ml-5" titulo={proveedor?.update_at}/>
        </>
        )
      }
      footer={<ButtonAtom className="mt-4" texto="Editar proveedor" onClick={handleEditClick}/>}
      />
  );
  
}
