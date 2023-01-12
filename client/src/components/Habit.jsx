import React, { useState, useEffect } from "react";
import * as styling from '../Styling.js';

const Habit = ({ habit, index }) => {

  const [hour, setHour] = useState(habit.hour);
  const [minutes, setMinutes] = useState(habit.minutes);
  const [isPM, setIsPM] = useState(false);

  useEffect(() => {
    if (habit.minutes.length < 2) {
      habit.minutes += '0';
      setMinutes(habit.minutes);
    }
    if (habit.hour > 12) {
      let pmHour = parseInt(habit.hour) % 12;
      setHour(pmHour.toString());
      setIsPM(true);
    }
  }, [habit])

  return (
    <styling.HabitTile>
      <styling.HabitNumberInfo>
        <p><b>{`Habit #${index}`}</b></p>
      </styling.HabitNumberInfo>
      <styling.HabitTileInfo>
        <p>{`Habit: ${habit.habit}`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>{`Message: ${habit.message}`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>{`Time: ${hour}:${minutes} ${isPM ? 'PM' : 'AM'}`}</p>
      </styling.HabitTileInfo>
    </styling.HabitTile>
  )
}

export default Habit;