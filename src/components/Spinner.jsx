import {SpinnerCircular} from 'spinners-react'

const Spinner = loadingState => {
  const getLoadingPhrase = () => {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }

    const randomPhrases = [
      //"Fasten your seatbelts!",
      "Please be patient- don't close this window! May take 1-2min",
    ]

    return randomPhrases[getRandomInt(0, randomPhrases.length)]
  }

  // const spinnerStyles = {
  //   position: "absolute",
  //   left: "50%",
  //   top: "50%",
  //   margin: "-10%",
  //   zIndex: "1",
  // };

  console.log(loadingState)

  return (
    <div
      className={
        loadingState ? 'loading-spinner spinner-container' : 'spinner-container'
      }
    >
      <SpinnerCircular
        enabled={loadingState}
        thickness="200"
        style={
          {
            /*spinnerStyles*/
          }
        }
      />
      <p>{getLoadingPhrase()}</p>
    </div>
  )
}

export default Spinner
