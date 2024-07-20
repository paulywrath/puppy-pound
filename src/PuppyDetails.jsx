function PuppyDetails( { onePuppy , setOnePuppy } ) {

  return (
          <>
            <h2>{onePuppy.name}</h2>
            <h4>Breed: {onePuppy.breed}</h4>
            <img src={onePuppy.imageUrl} alt="Photo of a puppy" />
            <button onClick={() => {setOnePuppy({})}}>Back</button>
          </>
          )
}

export default PuppyDetails
