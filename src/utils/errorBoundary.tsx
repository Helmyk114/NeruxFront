import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode; // Permite que el componente acepte otros componentes dentro de sí
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Actualiza el estado para mostrar la UI alternativa en caso de error
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Puedes registrar los errores aquí, por ejemplo, en un servicio de monitoreo
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // UI alternativa
    }

    return this.props.children; // Renderiza los hijos si no hay error
  }
}

export default ErrorBoundary;
