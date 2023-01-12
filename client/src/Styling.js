import styled, { keyframes } from 'styled-components';

export const HabitHelperPageContainer = styled.div`
  border: solid 1px yellow;
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
  border: solid 1px blue;
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
  border: solid 1px blue;
`;


export const HabitTile = styled.div`
  text-align: center;
  vertical-align: middle;
  display: flex;
  border-right: solid 1px black;
  margin: auto;
  width: 100%;
  height 300%;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

export const HabitNumberInfo = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px orange;
  margin: auto;
  width: 15%;
`

export const HabitTileInfo = styled.div`
  display: flex;
  justify-content: left;
  border: solid 1px orange;
  padding-left: 1rem;
  margin: auto;
  width: 85%;
`

export const NewHabitTile = styled.div` text-align: center;
  vertical-align: middle;
  border-right: solid 1px rgba(0, 0, 0, 0.25);
  margin: auto;
  width: 100%;
  height 500%;
  padding-bottom: 1rem;
`