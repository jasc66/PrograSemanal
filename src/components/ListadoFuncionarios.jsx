import Funcionario from "./Funcionario"

const Listadofuncionarios = ({funcionarios, setFuncionario, eliminarFuncionario}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {funcionarios && funcionarios.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado funcionarios</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold ">funcionarios y Citas</span>
                    </p>

                    { funcionarios.map( funcionario => (
                        <Funcionario 
                            key={funcionario.id}
                            funcionario={funcionario}
                            setFuncionario={setFuncionario}
                            eliminarFuncionario={eliminarFuncionario}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay funcionarios</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando funcionarios {''}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default Listadofuncionarios
