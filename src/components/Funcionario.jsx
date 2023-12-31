const Funcionario = ({funcionario, setFuncionario, eliminarFuncionario}) => {
    const { nombre, agencia, telefono, email, fecha, detalle, id } = funcionario

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este Funcionario?');

        if(respuesta) {
            eliminarFuncionario(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Agencia: {''}
                <span className="font-normal normal-case">{agencia}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Telefono: {''}
                <span className="font-normal normal-case">{telefono}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Detalle: {''}
                <span className="font-normal normal-case">{detalle}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setFuncionario(funcionario)}
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Funcionario
