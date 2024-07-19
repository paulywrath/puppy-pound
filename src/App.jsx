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

  const [onePuppy, setOnePuppy] = useState({})
  
  const getPuppyDetails = async(puppyID) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players/${puppyID}`);
      const result = await response.json();
      const puppyFromAPI = result.data.player
      setOnePuppy(puppyFromAPI);
    } catch (e) {
      alert(e);
    }
  }

  return (
            <>
              {onePuppy.name ? 
                <>
                  <h2>{onePuppy.name}</h2>
                  <h4>Breed: {onePuppy.breed}</h4>
                  <img src={onePuppy.imageUrl} alt="Photo of a puppy" />
                </> :

                <>
                  <h1>Puppies for Adoption</h1>
                  
                  <ul>
                  {
                    puppies.map((puppy) => {
                      return (
                        <>
                        <li onClick={() => { getPuppyDetails(puppy.id)}}>
                        <h3>{puppy.name}</h3>
                        <img src={puppy.imageUrl} alt="Photo of a puppy" />
                        </li>
                        </>
                      )
                    })
                  }
                  </ul>
                </>
              }
            </>
          )
}

export default App
