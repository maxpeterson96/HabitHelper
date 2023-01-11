import React, { useState } from "react";
import axios from 'Axios';

const NewHabit = ({ getHabits, setNewHabit }) => {

  const [habit, setHabit] = useState('');
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleHabit = (event) => {
    setHabit(event.target.value);
  }

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleTime = (event) => {
    setTime(event.target.value);
  }

  const handleFrequency = (event) => {
    setFrequency(event.target.value);
  }

  const exit = () => {
    setNewHabit(false);
  }

  const submitHabit = () => {
    if (habit.length > 0 && message.length > 0 && time.length > 0 && frequency.length > 0) {
      return axios.post('http://localhost:3000/habits', {
        habit, message, time, frequency
      })
      .then(() => {
        getHabits();
      })
    }
    exit();
  }

  return (
    <div>
      <h2>Submit a new habit!</h2>
      <input
        placeholder='Habit'
        onChange={handleHabit}
      />
      <input
        placeholder='Message'
        onChange={handleMessage}
      />
      <input
        placeholder='Time'
        onChange={handleTime}
      />
      <input
        placeholder='Frequency'
        onChange={handleFrequency}
      />
      <button onClick={submitHabit}>Submit New Habit</button>
      <button onClick={exit}>Cancel</button>
    </div>
  )

}

export default NewHabit;