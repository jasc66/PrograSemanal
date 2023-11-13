import { useState, useEffect } from "react";
import Error from "./Error";

const FormularioFuncionario = ({ funcionarios, setFuncionarios, funcionario, setFuncionario }) => {
  const [nombre, setNombre] = useState("");
  const [agencia, setAgencia] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [detalle, setDetalle] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(funcionario).length > 0) {
      setNombre(funcionario.nombre);
      setAgencia(funcionario.agencia);
      setTelefono(funcionario.telefono);
      setEmail(funcionario.email);
      setFecha(funcionario.fecha);
      setDetalle(funcionario.detalle);
    }
  }, [funcionario]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, agencia, telefono, email, fecha, detalle].includes("")) {
      console.log("Hay Al Menos un campo vacio");

      setError(true);
      return;
    }

    setError(false);

    // Objeto de funcionario
    const objetoFuncionario = {
      nombre,
      agencia,
      telefono,
      email,
      fecha,
      detalle
    };

    if (funcionario.id) {
        // Editando el Registro
        objetoFuncionario.id = funcionario.id;
        const funcionarioActualizados = funcionarios.map((funcionarioState) =>
          funcionarioState.id === funcionario.id ? objetoFuncionario : funcionarioState
        );
  
        setFuncionarios(funcionarioActualizados);
        setFuncionario({});
      } else {
        // Nuevo registro
        objetoFuncionario.id = generarId();
        setFuncionarios([...funcionarios, objetoFuncionario]);
      }

    // Reiniciar el form
    setNombre("");
    setAgencia("");
    setTelefono("");
    setEmail("");
    setFecha("");
    setDetalle("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento funcionarios
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade funcionarios y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="funcionario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Funcionario
          </label>
          <input
            id="funcionario"
            type="text"
            placeholder="Nombre de la Funcionario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="agencia"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Agencia
          </label>
          <input
            id="agencia"
            type="text"
            placeholder="Nombre de la Agencia"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={agencia}
            onChange={(e) => setAgencia(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="telefono"
            className="block text-gray-700 uppercase font-bold"
          >
            Telefono
          </label>
          <input
            id="telefono"
            type="text"
            placeholder="Numero de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Registro
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="detalle"
            className="block text-gray-700 uppercase font-bold"
          >
            Detalle
          </label>
          <textarea
            id="detalle"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los detalles"
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={funcionario.id ? "Editar funcionario" : "Agregar funcionario"}
        />
      </form>
    </div>
  );
};

export default FormularioFuncionario;
