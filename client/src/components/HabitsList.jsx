import React, { useState, useEffect } from "react";
import Habit from './Habit.jsx';

const HabitsList = ({ habits }) => {

  console.log('habits list', habits);

  return (
    habits.map((habit, index) => (
      <Habit habit={habit} index={index + 1} />
    ))
  )
}

export default HabitsList