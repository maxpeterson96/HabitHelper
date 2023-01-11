import React, { useState, useEffect } from "react";

const Habit = ({ habit, index }) => {

  return (
    <div>
      <p><b>{`Habit #${index}`}</b></p>
      <p>{`Habit: ${habit.habit}`}</p>
      <p>{`Message: ${habit.message}`}</p>
      <p>{`Time: ${habit.time}`}</p>
      <br />
    </div>
  )
}

export default Habit;