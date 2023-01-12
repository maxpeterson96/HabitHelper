import React, { useState, useEffect } from "react";

const Habit = ({ habit, index }) => {

  const [hour, setHour] = useState(habit.hour);
  const [minutes, setMinutes] = useState('');

  useEffect(() => {
    if (habit.minutes.length < 2) {
      habit.minutes += '0';
    }
    setMinutes(habit.minutes);
    if (habit.hour > 12) {
      let pmHour = parseInt(habit.hour) - 12;
      setHour(pmHour.toString());
    }
  }, [])

  return (
    <div>
      <p><b>{`Habit #${index}`}</b></p>
      <p>{`Habit: ${habit.habit}`}</p>
      <p>{`Message: ${habit.message}`}</p>
      <p>{`Time: ${hour}:${minutes}`}</p>
      <br />
    </div>
  )
}

export default Habit;