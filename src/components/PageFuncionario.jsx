import { useState, useEffect } from 'react'
import FormularioFuncionario from './components/FormularioProgra'
import Listadofuncionarios from './components/ListadoFuncionarios'

function DatosFuncionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionario, setFuncionario] = useState({});


  useEffect(() => {
    const obtenerLS = () => {
      const funcionariosLS = JSON.parse(localStorage.getItem('funcionarios')) ?? [];
      setFuncionarios(funcionariosLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('funcionarios', JSON.stringify( funcionarios ));
  }, [funcionarios])

  const eliminarFuncionario = id => {
    const funcionariosActualizados = funcionarios.filter( funcionario => funcionario.id !== id);
    setFuncionarios(funcionariosActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
  

      <div className="mt-12 md:flex">
        <FormularioFuncionario 
          funcionarios={funcionarios}
          setFuncionarios={setFuncionarios}
          funcionario={funcionario}
          setFuncionario={setFuncionario}
        />
      <Listadofuncionarios 
        funcionarios={funcionarios}
        setFuncionario={setFuncionario}
        eliminarFuncionario={eliminarFuncionario}
      />
      </div>

    </div>
  )
}

export default DatosFuncionario
