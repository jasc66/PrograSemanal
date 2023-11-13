import Programacion from "./Programacion";

const ListadoProgramacion = ({departamentos, setDepartamento, eliminarDepartamento}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {departamentos && departamentos.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Programación Semanal</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold ">Tus actividades</span>
                    </p>

                    { departamentos.map( departamento => (
                        <Programacion 
                            key={departamento.id}
                            departamento={departamento}
                            setDepartamento={setDepartamento}
                            eliminarDepartamento={eliminarDepartamento}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Programación para agregar</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando actividades {''}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoProgramacion
