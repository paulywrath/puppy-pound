function PuppyDetails( { onePuppy , setOnePuppy, LogInStatus } ) {

  return (
          <>
            <h2>{onePuppy.name}</h2>
            <h4>Breed: {onePuppy.breed}</h4>
            <img src={onePuppy.imageUrl} alt="Photo of a puppy" />

            { LogInStatus === true ? <button>Adopt Now</button>: null}
            
            <button onClick={() => {setOnePuppy({})}}>Back</button>
          </>
          )
}

export default PuppyDetails