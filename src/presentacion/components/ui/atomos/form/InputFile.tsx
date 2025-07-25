import { useRef } from "react";
import { FiTrash, FiUpload } from "react-icons/fi";
import { CardSimple } from "../Card/CardSimple";


interface Props {
  name: string;
  setFieldValue: (field: string, value: File | string | null) => void;
  previewUrl: string | null;
  setPreviewUrl: (url: string | null) => void;
  error?: string;
}

export const ImageUpload = ({
  name,
  setFieldValue,
  previewUrl,
  setPreviewUrl,
  error,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (
      file &&
      file.size <= 25 * 1024 * 1024 &&
      ["image/jpeg", "image/png"].includes(file.type)
    ) {
      setFieldValue(name, file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      alert("Solo se permiten imágenes JPEG o PNG menores a 25MB");
    }
  };

  const handleRemove = () => {
    setFieldValue(name, null);
    setPreviewUrl(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <CardSimple
    className="p-2 w-full h-full bg-background-two"
      children={
        <>
          <h3 className="text-lg font-semibold mb-1">
            Sube una imagen del producto
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Por favor, sube un archivo en formato JPEG o PNG y asegúrate de que
            el tamaño del archivo sea menor a 25 MB.
          </p>
          <div className="relative border-dashed border-2 border-gray-500 rounded-xl overflow-hidden bg-black/20">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-sm text-center p-4">
                <p>No se ha seleccionado ninguna imagen.</p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <FiUpload /> Subir imagen
                </button>
              </div>
            )}

            {previewUrl && (
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-white/80 hover:bg-white text-black p-2 rounded-full"
                >
                  <FiUpload size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="bg-white/80 hover:bg-red-500 hover:text-white text-red-600 p-2 rounded-full"
                >
                  <FiTrash size={18} />
                </button>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/jpeg,image/png"
            ref={fileInputRef}
            onChange={handleChange}
            className="hidden"
          />

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </>
      }
    />
  );
};
