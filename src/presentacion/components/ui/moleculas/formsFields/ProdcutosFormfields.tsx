import { Field, useFormikContext } from "formik";
import {
  CheckAtom,
  InputFiled,
  InputTextArea,
  LinkAtom,
  SelectAtom,
  TooltipAtom,
} from "../../atomos";
import { Producto } from "@/domain/interface";

interface ProductosFormfieldsProps {
  crearCategoria?: () => void;
  crearProveedor?: () => void;
  supplierOptions?: { key: string | number; label: string }[];
  categoryOptions?: { key: string | number; label: string }[];
}

export function ProductosFormfields({
  crearCategoria,
  crearProveedor,
  supplierOptions,
  categoryOptions,
}: ProductosFormfieldsProps): JSX.Element {
  const { values } = useFormikContext<Producto>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <Field
          nombre="name"
          label="Nombre del producto"
          component={InputFiled}
          isRequired
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between">
          <Field
            nombre="sku"
            label="SKU"
            placeholder="Si lo dejas vacío, generaremos un SKU automáticamente."
            component={InputFiled}
            isRequired={false}
          />
          <TooltipAtom content="Código único para identificar tu producto. Usa letras y/o números que tengan sentido para ti. Ejemplo: CAM-001 (Camiseta, talla S)" />
        </div>
      </div>

      <div className="flex flex-col">
        <Field
          nombre="salePrice"
          label="Precio de venta"
          component={InputFiled}
          isRequired
          className="row-span-1"
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between">
          <Field
            nombre="alert"
            texto="¿Deseas recibir alertas de stock bajo?"
            component={CheckAtom}
          />
          <TooltipAtom content="Te avisaremos cuando el stock esté por debajo de este valor. El número debe ser en unidades." />
        </div>
        <div className="flex flex-col">
          <Field
            nombre="minStock"
            component={InputFiled}
            placeholder="Te avisaremos cuando el stock esté por debajo de este valor..."
            className="row-span-1"
            type="number"
            disabled={!values.alert}
          />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Field
          nombre="supplier"
          label="Proveedor"
          isRequired
          component={SelectAtom}
          options={supplierOptions}
        />
        <LinkAtom
          onClick={crearProveedor}
          texto="Crear proveedor"
          className="text-base whitespace-nowrap shrink-0"
        />
      </div>

      <div className="flex items-center gap-4">
        <Field
          nombre="category"
          label="Categoría"
          isRequired
          component={SelectAtom}
          options={categoryOptions}
        />
        <LinkAtom
          onClick={crearCategoria}
          texto="Crear categoría"
          className="text-base whitespace-nowrap shrink-0"
        />
      </div>

      <div className="flex col-span-2">
        <Field
          nombre="description"
          label="Descripción"
          component={InputTextArea}
          isRequired={false}
          type="text"
        />
      </div>
    </div>
  );
}
