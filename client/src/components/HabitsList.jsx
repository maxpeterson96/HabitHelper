import React, { useState, useEffect } from "react";
import Habit from './Habit.jsx';

const HabitsList = ({ habits }) => {

  const [sortedHabits, setSortedHabits] = useState([]);

  useEffect(() => {
    console.log('before', habits)
    let sortHabits = habits.sort((a, b) => (a.hour > b.hour ? 1 : -1));
    setSortedHabits(sortedHabits);
    console.log('sorted', sortHabits);
  }, [habits])

  return (
    sortedHabits.map((habit, index) => (
      <Habit habit={habit} index={index + 1} />
    ))
  )
}

export default HabitsList