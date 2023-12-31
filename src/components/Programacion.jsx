import React from "react";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Programacion = ({ departamento, setDepartamento, eliminarDepartamento }) => {
  const {
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
  } = departamento;

  const handleEliminar = () => {
    const respuesta = window.confirm("¿Deseas eliminar esta Actividad?");

    if (respuesta) {
      eliminarDepartamento(departamento.id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Agencia: <span className="font-normal normal-case">{capitalizeFirstLetter(agencia)}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Funcionario: <span className="font-normal normal-case">{capitalizeFirstLetter(funcionario)}</span>
      </p>
      
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Categoría: <span className="font-normal normal-case">{capitalizeFirstLetter (categoria).replace(/_/g, " ")}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Indicador (es): <span className="font-normal normal-case">{capitalizeFirstLetter (actividad).replace(/_/g, " ")}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Detalle del Indicador (es): <span className="font-normal normal-case">{capitalizeFirstLetter (indicador).replace(/_/g, " ")}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Intervenciones Estratégica: <span className="font-normal normal-case">{capitalizeFirstLetter (intervencion).replace(/_/g, " ")}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Técnica de extensión: <span className="font-normal normal-case">{capitalizeFirstLetter (tecnica).replace(/_/g, " ")}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Detalle Técnica: <span className="font-normal normal-case">{detalleTecnica.replace(/_/g, " ")}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Modalidad: <span className="font-normal normal-case">{modalidad.replace(/_/g, " ")}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Detalle (Objetivo actividad): <span className="font-normal normal-case">{capitalizeFirstLetter (detalle)}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre Productor Contacto u Organización atendida: <span className="font-normal normal-case">{capitalizeFirstLetter (servicio)}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Programa, Proyecto, Estrategia o Rubro: <span className="font-normal normal-case">{capitalizeFirstLetter (programa)}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
      Requerimiento Vehicular: <span className="font-normal normal-case">{vehiculo}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setDepartamento(departamento)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Programacion;
