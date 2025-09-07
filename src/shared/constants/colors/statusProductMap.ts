export const statusProductMap: Record<string, { color: string; dot: string }> = {
  Disponible:{
    color: "text-semantic-exito",
    dot: "bg-semantic-exito",
  },
  Agotado: {
    color: "text-semantic-error",
    dot: "bg-semantic-error",
  },
  "Stock bajo": {
    color: "text-semantic-advertencia",
    dot: "bg-semantic-advertencia",
  },
  Nuevo:{
    color: "text-semantic-exito",
    dot: "bg-semantic-exito",
  },
  Default:{
    color: "text-semantic-exito",
    dot: "bg-semantic-exito",
  },
}