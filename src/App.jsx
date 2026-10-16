import './App.css'
import { HabitCard } from './components/HabitCard';
import { Counter } from './components/Counter';
import { Header } from './components/Header';

import habits from './data/habits';

function App() {

  return (
    <>
  <Header />
  <Counter />

  <main className="habit-list">
    {
      habits.map((habit) => (
        <HabitCard key={habit.id} icon={habit.icon} name={habit.name} />
      ))
    }

  </main>

  
    </>
  );
}

export default App
