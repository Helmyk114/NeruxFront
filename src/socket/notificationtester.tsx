// src/components/NotificationTester.tsx

import { useEffect } from "react";
import { getSocket } from "./SocketClient";


export const NotificationTester = () => {
  useEffect(() => {
    const socket = getSocket(); // 👈 obtiene el socket creado tras login
  
    if (!socket) return;
  
    socket.on("connect", () => {
      console.log("✅ Conectado al socket:", socket.id);
    });
  
    socket.on("receiveNotification", (data) => {
      console.log("🔔 Notificación recibida:", data);
      alert(`🔔 ${data.title}: ${data.message}`);
    });
  
    socket.on("disconnect", () => {
      console.log("❌ Desconectado del socket");
    });
  
    return () => {
      socket.off("receiveNotification");
    };
  }, []);
  
  const emitirPrueba = () => {
    const socket = getSocket();
    if (socket) socket.emit("testNotification");
  };
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Prueba de Notificación</h2>
      <button
        onClick={emitirPrueba}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Emitir notificación de prueba
      </button>
    </div>
  );
};
