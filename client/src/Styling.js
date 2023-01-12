import styled, { keyframes } from 'styled-components';

export const HabitHelperPageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const HabitHelperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  height: 100%;
  padding-top: 3%;
`;



export const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  height: 100%;
  padding-top: 3%;
`;


export const HabitTile = styled.div`
  text-align: center;
  vertical-align: middle;
  display: flex;
  border: solid 1px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: auto;
  width: 100%;
  height 300%;
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem
`

export const HabitNumberInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 20%;
`

export const HabitTileInfo = styled.div`
  display: flex;
  text-align: start;
  padding-left: 1rem;
  margin: auto;
  width: 80%;
`

export const NewHabitTile = styled.div` text-align: center;
  vertical-align: middle;
  margin: auto;
  width: 100%;
  height 500%;
  padding-bottom: 1rem;
`

export const Buttons = styled.button`
  border-radius: 0.25rem;
  padding: .5rem;
  cursor: pointer;
  border: 0.0625rem solid;
  border-color: teal;
  background-color: teal;
  color: white;
  width: 15%;
  overflow-wrap: break-word;
  min-width: fit-content;
  max-width: fit-content;
  &: hover{
    background-color: #bfe3b4;
    color: black;
    cursor: pointer;
    border-color: teal;
  }
`;