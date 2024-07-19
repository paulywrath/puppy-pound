import { useEffect, useState } from 'react'

function App() {

  useEffect( () => {
    const getPuppies = async() => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players`);
        const result = await response.json();
        const playersfromAPI = result.data.players;
        console.log(playersfromAPI);
      } catch (e) {
        alert(e);
      }
    }
    getPuppies(); 
  },[])

  return (
    <>
      <h1>working</h1>
    </>
  )
}

export default App
