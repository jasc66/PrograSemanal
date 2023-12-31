import { useState, useEffect } from 'react'
import Header from "./components/Header"
import FormularioFuncionario from './components/FormularioProgra'
import Listadofuncionarios from './components/ListadoFuncionarios'
import FormularioProgramacion from './components/PrograSemanal'
import ListadoProgramacion from './components/ListadoProgramacion'

function App() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionario, setFuncionario] = useState({});
  const [departamentos, setDepartamentos] = useState([]);
  const [departamento, setDepartamento] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const funcionariosLS = JSON.parse(localStorage.getItem('funcionarios')) ?? [];
      setFuncionarios(funcionariosLS)
      const departamentoS = JSON.parse(localStorage.getItem('departamentos')) ?? [];
      setDepartamentos(departamentoS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('funcionarios', JSON.stringify( funcionarios ));
    localStorage.setItem('departamentos', JSON.stringify( departamentos ));
  }, [funcionarios, departamentos])

  const eliminarFuncionario = id => {
    const funcionariosActualizados = funcionarios.filter( funcionario => funcionario.id !== id);
    setFuncionarios(funcionariosActualizados)
  }
  const eliminarDepartamento = id => {
    const departamentosActualizados = departamentos.filter( departamento => departamento.id !== id);
    setDepartamentos(departamentosActualizados)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
       {/* <FormularioFuncionario 
          funcionarios={funcionarios}
          setFuncionarios={setFuncionarios}
          funcionario={funcionario}
          setFuncionario={setFuncionario}
        />
      <Listadofuncionarios 
        funcionarios={funcionarios}
        setFuncionario={setFuncionario}
        eliminarFuncionario={eliminarFuncionario}
      />*/}
      <FormularioProgramacion
      departamentos={departamentos}
      setDepartamentos={setDepartamentos}
      departamento={departamento}
      setDepartamento={setDepartamento}
      />
      <ListadoProgramacion
      departamentos={departamentos}
      setDepartamento={setDepartamento}
      eliminarDepartamento={eliminarDepartamento}
      />
      </div>

    </div>
  )
}

export default App
