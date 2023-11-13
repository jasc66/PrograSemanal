import React, { useState, useEffect } from "react";
import Error from "./Error";
import { actividadData } from "../types/categorias";
import { tecnicaData } from "../types/tecnica";

const FormularioProgramacion = ({
  departamentos,
  setDepartamentos,
  departamento,
  setDepartamento,
}) => {
  const [funcionario, setFuncionario] = useState("");
  const [agencia, setAgencia] = useState("");
  const [fecha, setFecha] = useState("");
  const [intervencion, setIntervencion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [indicador, setIndicador] = useState("");
  const [actividad, setActividad] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [detalle, setDetalle] = useState("");
  const [servicio, setServicio] = useState("");
  const [programa, setPrograma] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [error, setError] = useState(false);
  const [indicadoresOpciones, setIndicadoresOpciones] = useState([]);
  const [tecnicaOpciones, setTecnicaOpciones] = useState([]);
  const [detalleTecnica, setDetalleTecnica] = useState("");

  useEffect(() => {
    if (Object.keys(departamento).length > 0) {
      setFuncionario(departamento.funcionario);
      setAgencia(departamento.agencia);
      setFecha(departamento.fecha);
      setIntervencion(departamento.intervencion);
      setCategoria(departamento.categoria);
      setIndicador(departamento.indicador);
      setActividad(departamento.actividad);
      setTecnica(departamento.tecnica);
      setModalidad(departamento.modalidad);
      setDetalle(departamento.detalle);
      setServicio(departamento.servicio);
      setPrograma(departamento.programa);
      setVehiculo(departamento.vehiculo);
      setDetalleTecnica(departamento.detalleTecnica);
    }
  }, [departamento]);
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if (
      [
        funcionario,
        agencia,
        fecha,
        intervencion,
        categoria,
        indicador,
        actividad,
        tecnica,
        modalidad,
        detalle,
        servicio,
        programa,
        vehiculo,
        detalleTecnica
      ].includes("")
    ) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de departamento
    const objetoDepartamento = {
      funcionario,
      agencia,
      fecha,
      intervencion,
      categoria,
      indicador,
      actividad,
      tecnica,
      modalidad,
      detalle,
      servicio,
      programa,
      vehiculo,
      detalleTecnica
    };

    if (departamento.id) {
      // Editando el Registro
      objetoDepartamento.id = departamento.id;
      const departamentoActualizados = departamentos.map((departamentoState) =>
        departamentoState.id === departamento.id
          ? objetoDepartamento
          : departamentoState
      );

      setDepartamentos(departamentoActualizados);
      setDepartamento({});
    } else {
      // Nuevo registro
      objetoDepartamento.id = generarId();
      setDepartamentos([...departamentos, objetoDepartamento]);
    }

    // Reiniciar el form
    setFuncionario("");
    setAgencia("");
    setFecha("");
    setIntervencion("");
    setCategoria("");
    setIndicador("");
    setActividad("");
    setTecnica("");
    setModalidad("");
    setDetalle("");
    setServicio("");
    setPrograma("");
    setVehiculo("");
    setDetalleTecnica("");
  };

  const handleCategoriaChange = (e) => {
    const selectedCategoria = e.target.value;
    setCategoria(selectedCategoria);
    setIndicador("");
    setActividad("");
    setTecnica("");
  };

  const handleIndicadorChange = (e) => {
    setIndicador(e.target.value);
  };

  const handleActividadChange = (e) => {
    const selectedActividad = e.target.value;
    setActividad(selectedActividad);

    // Obtén las opciones de indicador basadas en la actividad seleccionada
    const indicadoresRelacionados =
      actividadData.opcionesDetalladas[selectedActividad]?.options || [];

    setIndicador("");
    setIndicadoresOpciones(indicadoresRelacionados);

    // Obtén las opciones de técnica basadas en la actividad seleccionada
    const tecnicaRelacionada = tecnicaData[selectedActividad]?.options || [];

    setTecnica("");
    setTecnicaOpciones(tecnicaRelacionada);
  };

  const handleTecnicaChange = (e) => {
    const selectedTecnica = e.target.value;
    setTecnica(selectedTecnica);
  };

  const handleDetalleTecnicaChange = (e) => { // New function for handling "detalleTecnica" change
    const selectedDetalleTecnica = e.target.value;
    setDetalleTecnica(selectedDetalleTecnica);
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Actividades
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Actividades y{" "}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
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
            htmlFor="agencia"
            className="block text-gray-700 uppercase font-bold"
          >
            Agencia
          </label>
          <input
            id="agencia"
            type="text"
            placeholder="Funcionario de la Agencia"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={agencia}
            onChange={(e) => setAgencia(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="funcionario"
            className="block text-gray-700 uppercase font-bold"
          >
            Funcionario
          </label>
          <input
            id="funcionario"
            type="text"
            placeholder="Funcionario del Departamento"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={funcionario}
            onChange={(e) => setFuncionario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="categoria"
            className="block text-gray-700 uppercase font-bold"
          >
            Categoría
          </label>
          <select
            id="categoria"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={categoria}
            onChange={handleCategoriaChange}
          >
            <option value="">Selecciona una categoría</option>
            {Object.keys(actividadData).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="actividad"
            className="block text-gray-700 uppercase font-bold"
          >
            Indicador
          </label>
          <select
            id="actividad"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={actividad}
            onChange={handleActividadChange}
          >
            <option value="">Selecciona una actividad</option>
            {actividadData[categoria]?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="indicador"
            className="block text-gray-700 uppercase font-bold"
          >
            Detalle del Indicador
          </label>
          <select
            id="indicador"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={indicador}
            onChange={handleIndicadorChange}
          >
            <option value="">Selecciona un indicador</option>
            {indicadoresOpciones.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="intervencion"
            className="block text-gray-700 uppercase font-bold"
          >
            INTERVENCIONES ESTRATÉGICA
          </label>
          <input
            id="intervencion"
            type="text"
            placeholder="Número de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={intervencion}
            onChange={(e) => setIntervencion(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="tecnica"
            className="block text-gray-700 uppercase font-bold"
          >
            TÉCNICA DE EXTENSIÓN
          </label>
          <select
            id="tecnica"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={tecnica}
            onChange={handleTecnicaChange}
          >
            <option value="">Selecciona una Técnica</option>
            {Object.keys(tecnicaData).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
        <label
          htmlFor="detalleTecnica"
          className="block text-gray-700 uppercase font-bold"
        >
          Detalle de la Técnica
        </label>
        <select
          id="detalleTecnica"
          className="border-2 w-full p-2 mt-2 rounded-md"
          value={detalleTecnica} // Update the value here
          onChange={handleDetalleTecnicaChange} // Use the new function
        >
          <option value="">Selecciona un detalle de técnica</option>
          {tecnicaData[tecnica]?.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
        <div className="mb-5">
          <label
            htmlFor="modalidad"
            className="block text-gray-700 uppercase font-bold"
          >
            Modalidad
          </label>
          <input
            id="modalidad"
            type="text"
            placeholder="Modalidad"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
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

        <div className="mb-5">
          <label
            htmlFor="servicio"
            className="block text-gray-700 uppercase font-bold"
          >
            NOMBRE PRODUCTOR CONTACTO U ORGANIZACIÓN ATENDIDA
          </label>
          <input
            id="servicio"
            type="text"
            placeholder="Servicio"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="programa"
            className="block text-gray-700 uppercase font-bold"
          >
            PROGRAMA, PROYECTO, ESTRATEGIA O RUBRO
          </label>
          <input
            id="programa"
            type="text"
            placeholder="Programa"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="vehiculo"
            className="block text-gray-700 uppercase font-bold"
          >
            REQUERIMIENTO VEHICULAR
          </label>
          <input
            id="vehiculo"
            type="text"
            placeholder="Vehículo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={vehiculo}
            onChange={(e) => setVehiculo(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover-bg-indigo-700 cursor-pointer transition-colors"
          value={
            departamento.id ? "Editar Departamento" : "Agregar Departamento"
          }
        />
      </form>
    </div>
  );
};

export default FormularioProgramacion;
