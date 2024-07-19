import { useEffect, useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState([]);

  useEffect( () => {
    const getPuppies = async() => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players`);
        const result = await response.json();
        const playersfromAPI = result.data.players;
        setPuppies(playersfromAPI);
      } catch (e) {
        alert(e);
      }
    }
    getPuppies(); 
  },[])

  return (
    <>
      <h1>Puppies for Adoption</h1>

      <ul>
      {
        puppies.map((puppy) => {
          return (
            <>
              <li key={puppy.id}>{puppy.name}</li>
              <img src={puppy.imageUrl} alt="Photo of a puppy"/>
            </>
          )
        })
      }
      </ul>
    </>
  )
}

export default App
