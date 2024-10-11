import React from "react";
import PlantillaGenerica from "./components/ui/template/plantillaGenerica";
import TextoInicio from './components/ui/atoms/textoInicio';

const Login: React.FC = () =>{
    return(
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-purpleStart to-purpleEnd">
            <PlantillaGenerica
            izquierda={
                <div>
                 <div className="flex ml-14 mt-20">
                 </div>
                    <div className="mt-36 ml-14">
                        <div className="overflow-visible">
                        < TextoInicio
                        spans={[
                            {texto:"BIENVENID@\n", className: "font-bold text-4xl"},
                            {texto:"¡Empieza tu viaje con\n nuestro ", className: "italic font-light text-3xl" },
                            {texto:"sistema de\n gestión!", className: "font-semibold text-3xl" },

                        ]}
                        className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
                        />
                        </div>
                    </div>
                </div>
            }
            derecha ={
               <div>

               </div>
            }
            />
        </div>
    )
}
export default Login;