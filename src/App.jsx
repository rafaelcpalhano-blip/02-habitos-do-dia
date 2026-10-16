import './App.css'
import { HabitCard } from './components/HabitCard';
import { Counter } from './components/Counter';
import { Header } from './components/Header'

function App() {

  return (
    <>
  <Header />
  <Counter />

  <HabitCard icon={"💧"} name={"Beber 2l de Água"} /> 
    </>
  );
}

export default App
