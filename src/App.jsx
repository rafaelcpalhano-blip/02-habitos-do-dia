import { useState } from 'react'
import './App.css'
import { HabitCard } from './components/HabitCard';
import { Counter } from './components/Counter';
import { Header } from './components/Header';

import initialHabits from './data/habits';

function App() {
  const [habits, setHabits] = useState(initialHabits);

  function handleToggle(id) {
    console.log(id)

    setHabits(
      habits.map((habit) => 
        habit.id == id ? { ...habit, done: !habit.done } : habit,
      ),
    );
  }

  return (
    <>
      <Header />
      <Counter />

      <main className="habit-list">
        {
          habits.map((habit) => (
            <HabitCard key={habit.id}
              icon={habit.icon}
              name={habit.name}
              done={habit.done}
              onToggle={() => handleToggle(habit.id)}
            />
          ))
        }

      </main>


    </>
  );
}

export default App
