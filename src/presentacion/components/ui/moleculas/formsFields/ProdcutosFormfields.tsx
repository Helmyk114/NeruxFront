import { Field, useFormikContext } from "formik";
import {
  CheckAtom,
  InputFiled,
  InputTextArea,
  LinkAtom,
  SelectAtom,
  TooltipAtom,
} from "../../atomos";
import { InfoProduct } from "@/presentacion/pages";

interface ProductosFormfieldsProps {
  crearCategoria?: () => void;
  crearProveedor?: () => void;
}

export function ProductosFormfields({
  crearCategoria,
  crearProveedor,
}: ProductosFormfieldsProps): JSX.Element {
  const { values } = useFormikContext<InfoProduct>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <Field
          nombre="nameProduct"
          label="Nombre del producto"
          component={InputFiled}
          isRequired
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Field
            nombre="category"
            label="Categoría"
            isRequired
            component={SelectAtom}
          />
          <LinkAtom
            onClick={crearCategoria}
            texto="Crear categoría"
            className="text-base whitespace-nowrap shrink-0"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Field
          nombre="salePrice"
          label="Precio de venta"
          component={InputFiled}
          isRequired
          className="row-span-1"
          type="number"
        />
      </div>

      <div className="flex flex-col">
        <Field
          nombre="supplierPrice"
          label="Precio de proveedor"
          component={InputFiled}
          className="row-span-1"
          type="number"
        />
      </div>

      <div className="flex flex-col">
        <Field
          nombre="stock"
          label="Stock actual"
          component={InputFiled}
          isRequired
          className="row-span-1"
          type="number"
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between">
          <Field
            nombre="alert"
            texto="¿Deseas recibir alertas de stock bajo?"
            component={CheckAtom}
          />
          <TooltipAtom />
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

      <div className="flex flex-col gap-y-1">
        <Field
          nombre="unit"
          label="Unidad de medida"
          isRequired
          component={SelectAtom}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <Field
            nombre="supplier"
            label="Proveedor"
            isRequired
            component={SelectAtom}
          />
          <LinkAtom
            onClick={crearProveedor}
            texto="Crear proveedor"
            className="text-base whitespace-nowrap shrink-0"
          />
        </div>
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
