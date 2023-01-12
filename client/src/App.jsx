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
      let sortHabits = response.data.sort((a, b) => {
        if (a.hour === b.hour) {
          return parseInt(a.minutes) > parseInt(b.minutes) ? 1 : -1
        } else {
          return parseInt(a.hour) > parseInt(b.hour) ? 1 : -1
        }
      })
      setHabits(sortHabits);
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
      <styling.HabitHelperContainer>
        <h1 style={{ fontSize: '2.6rem' }}>Habit Helper</h1>
        <styling.Buttons onClick={toggleNewHabit}>Add New Habit</styling.Buttons>
          <styling.HabitsContainer>
            {newHabit ? (
              <NewHabit
                getHabits={getHabits}
                setNewHabit={setNewHabit}
              />
            ) : null}
          </styling.HabitsContainer>
          <styling.HabitsContainer>
            <HabitsList habits={habits} />
          </styling.HabitsContainer>
          <styling.Buttons onClick={schedule}>Say Hello</styling.Buttons>
      </styling.HabitHelperContainer>
    </styling.HabitHelperPageContainer>
  )
}

export default App;



// axios.put('/sendMessage')
//       .then((response) => {
//         console.log(response);
//       })



//  parseInt(a.hour) > parseInt(b.hour) || ? 1 : -1