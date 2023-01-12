import React, { useState, useEffect } from 'react';
import axios from 'Axios';
import * as styling from './Styling.js';
import NewHabit from './components/NewHabit.jsx';
import HabitsList from './components/HabitsList.jsx';



const App = () => {

  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState(false);

  useEffect(() => {
    getHabits();
  }, []);

  const getHabits = () => {
    axios.get('http://localhost:3000/habits')
    .then((response) => {
      console.log(response.data);
      setHabits(response.data);
    });
  };

  const schedule = () => {
    axios.put('http://localhost:3000/schedule');
  }

  const toggleNewHabit = () => {
    setNewHabit(!newHabit);
  };

  return (
    <styling.HabitHelperPageContainer>
      <styling.HabitHelperHeader>
        <h1>Habit Helper</h1>
      </styling.HabitHelperHeader>
      <styling.HabitHelperContainer>
        <div>
          {newHabit ? (
            <NewHabit
              getHabits={getHabits}
              setNewHabit={setNewHabit}
            />
          ) : null}
        </div>
        <div>
          <HabitsList habits={habits} />
        </div>
      </styling.HabitHelperContainer>
      <button onClick={toggleNewHabit}>Add New Habit</button>
      <button onClick={schedule}>Schedule</button>
    </styling.HabitHelperPageContainer>
  )
}

export default App;



// axios.put('/sendMessage')
//       .then((response) => {
//         console.log(response);
//       })