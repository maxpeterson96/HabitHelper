import React, { useState } from "react";
import axios from 'Axios';
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 100
  }
}));

const NewHabit = ({ getHabits, setNewHabit }) => {

  const [habit, setHabit] = useState('');
  const [message, setMessage] = useState('');
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [frequency, setFrequency] = useState('');
  const [isPM, setIsPM] = useState('false');
  const classes = useStyles()

  const handleHabit = (event) => {
    setHabit(event.target.value);
  }

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleHour = (event) => {
    setHour(event.target.value);
  }

  const handleMinutes = (event) => {
    setMinutes(event.target.value);
  }

  const handleFrequency = (event) => {
    setFrequency(event.target.value);
  }

  const handleIsPM = (event) => {
    setIsPM(event.target.value);
    if (isPM) {
      let pmHour = parseInt(hour) + 12;
      setHour(pmHour.toString());
    }
  }

  const exit = () => {
    setNewHabit(false);
  }

  const submitHabit = () => {
    if (habit.length > 0 && message.length > 0 && hour.length > 0 && minutes.length > 0 && frequency.length > 0) {
      return axios.post('http://localhost:3000/habits', {
        habit, message, hour, minutes, frequency
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
      <br/>
      <FormControl className={classes.formControl}>
        <InputLabel>Hour</InputLabel>
        <Select onChange={handleHour} defaultValue = {''}>
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'5'}>5</MenuItem>
          <MenuItem value={'6'}>6</MenuItem>
          <MenuItem value={'7'}>7</MenuItem>
          <MenuItem value={'8'}>8</MenuItem>
          <MenuItem value={'9'}>9</MenuItem>
          <MenuItem value={'10'}>10</MenuItem>
          <MenuItem value={'11'}>11</MenuItem>
          <MenuItem value={'12'}>12</MenuItem>
        </Select>
      </FormControl>
      <p>You selected: {hour}</p>
      <FormControl className={classes.formControl}>
        <InputLabel>Minutes</InputLabel>
        <Select onChange={handleMinutes} defaultValue = {''}>
          <MenuItem value={'0'}>00</MenuItem>
          <MenuItem value={'15'}>15</MenuItem>
          <MenuItem value={'30'}>30</MenuItem>
          <MenuItem value={'45'}>45</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>AM/PM</InputLabel>
        <Select onChange={handleIsPM} defaultValue = {''}>
          <MenuItem value={false}>AM</MenuItem>
          <MenuItem value={true}>PM</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <FormControl className={classes.formControl}>
        <InputLabel>Frequency</InputLabel>
        <Select onChange={handleFrequency} defaultValue = {''}>
          <MenuItem value={'*'}>Daily</MenuItem>
          <MenuItem value={'1'}>Monday</MenuItem>
          <MenuItem value={'2'}>Tuesday</MenuItem>
          <MenuItem value={'3'}>Wednesday</MenuItem>
          <MenuItem value={'4'}>Thursday</MenuItem>
          <MenuItem value={'5'}>Friday</MenuItem>
          <MenuItem value={'6'}>Saturday</MenuItem>
          <MenuItem value={'7'}>Sunday</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <br/>
      <button onClick={submitHabit}>Submit New Habit</button>
      <button onClick={exit}>Cancel</button>
    </div>
  )

}

export default NewHabit;