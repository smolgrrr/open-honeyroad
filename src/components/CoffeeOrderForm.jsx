import axios from 'axios'
import config from '../../config.js'
import app from '../firebase.config'
import {getAuth, signInAnonymously} from 'firebase/auth'
import {useState, useEffect} from 'react'
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'
import {useForm} from 'react-hook-form'
import {SpinnerCircular} from 'spinners-react'

const auth = getAuth(app)

// min and max items per order
const minOrder = 1
const maxOrder = 1000

// axios base url
const api = axios.create({
  baseURL: config.app.url,
})

const CoffeeOrderForm = () => {
  // form info stored in state also
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [address1, setAddress1] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [email, setEmail] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [disBut, setDisBut] = useState([true, true]) //disBut: is de/increment button disabled?
  const [loader, setLoader] = useState(false)

  // reset state function
  const clearState = () => {
    setName('')
    setCountry('')
    setAddress1('')
    setPostalCode('')
    setCity('')
    setState('')
    setEmail('')
    setQuantity('')
  }

  // increment / decrement on click
  const handleClick = e => {
    if (e.target.name === 'increment') {
      if (quantity < maxOrder) {
        setQuantity(prev => prev + 1)
      }
    } else if (e.target.name === 'decrement') {
      if (quantity > minOrder) {
        setQuantity(prev => prev - 1)
      }
    }
  }
  // handles button disabled status
  useEffect(() => {
    switch (quantity) {
      case minOrder:
        setDisBut([true, false])
        break
      case maxOrder:
        setDisBut([false, true])
        break
      default:
        setDisBut([false, false])
    }
  }, [handleClick])

  const redirectToCheckout = checkoutURL => {
    window.location.href = checkoutURL
    clearState()
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const formatAndSendData = event => {
    signInAnonymously(auth)
      .then(result => {
        const formData = JSON.parse(JSON.stringify(event)) //need as obj to add country/state
        formData['country'] = 'United States'
        formData['state'] = state
        formData['email'] = email
        formData['quantity'] = quantity
        formData['uid'] = result.user.uid
        formData['product'] = 'coffee'
        const formJSON = JSON.stringify(formData) //need as string to send
        setLoader(true)
        sendData(formJSON)
      })
      .catch(error => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  const sendData = async data => {
    try {
      let response = await api.post('/v1/stores/invoices', data, {
        headers: {'Content-Type': 'application/json'},
      })
      //console.log(response);
      redirectToCheckout(response.data.checkoutLink)
    } catch (error) {
      console.log(error)
    }
  }

  const selectCountry = val => {
    setCountry(val)
  }

  const selectRegion = val => {
    setState(val)
  }

  const requiredErrorMessage = (
    <p className="error-message">
      <img src="/BearNoCigSmall.png" alt="" />
      This field is required
    </p>
  )
  const maxLengthErrorMessage = n => {
    return (
      <p className="error-message">
        <img src="/BearNoCigSmall.png" alt="" />
        Max {n} characters
      </p>
    )
  }

  // const spinnerStyles = {
  //   position: "absolute",
  //   left: "50%",
  //   top: "50%",
  //   margin: "-10%",
  //   zIndex: "1",
  // };

  const randomPhrases = [
    //"Fasten your seatbelts!",
    "Please be patient- don't close this window! May take 1-2min",
  ]

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  const [phrase, setPhrase] = useState('')

  useEffect(() => {
    const index = getRandomInt(0, randomPhrases.length)
    setPhrase(randomPhrases[index])
  }, [loader])

  return (
    <>
      <div
        className={
          loader ? 'loading-spinner spinner-container' : 'spinner-container'
        }
      >
        <SpinnerCircular
          enabled={loader}
          thickness="200"
          style={
            {
              /*spinnerStyles*/
            }
          }
        />
        <p>{phrase}</p>
      </div>
      <div className={loader ? 'loading-form' : ''}>
        <form
          className={'details-form'}
          onSubmit={handleSubmit(formatAndSendData)}
        >
          <ul className="details-flex-ul">
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="name">fake/real name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  className={
                    errors?.name?.type === 'required' ||
                    errors?.name?.type === 'maxLength'
                      ? 'error'
                      : ''
                  }
                  placeholder="Kyle Davies"
                  {...register('name', {required: true, maxLength: 40})}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              {errors?.name?.type === 'required' && requiredErrorMessage}
              {errors?.name?.type === 'maxLength' && maxLengthErrorMessage(40)}
            </li>
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="address1">address: </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={address1}
                  className={
                    errors?.address1?.type === 'required' ||
                    errors?.address1?.type === 'maxLength'
                      ? 'error'
                      : ''
                  }
                  placeholder="1 Main Street"
                  {...register('address1', {required: true, maxLength: 100})}
                  onChange={e => setAddress1(e.target.value)}
                />
              </div>
              {errors?.address1?.type === 'required' && requiredErrorMessage}
              {errors?.address1?.type === 'maxLength' &&
                maxLengthErrorMessage(100)}
            </li>
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="postalcode">postal/zip code: </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={postalCode}
                  className={
                    errors?.postalCode?.type === 'required' ? 'error' : ''
                  }
                  {...register('postalCode', {required: true})}
                  onChange={e => setPostalCode(e.target.value)}
                />
              </div>
              {errors?.postalCode?.type === 'required' && requiredErrorMessage}
            </li>
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="city">city: </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  className={errors?.city?.type === 'required' ? 'error' : ''}
                  placeholder="New York"
                  {...register('city', {required: true})}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              {errors?.city?.type === 'required' && requiredErrorMessage}
            </li>
            <li className="country-state-jars">
              <label htmlFor="country"></label>
              <CountryDropdown
                value={'United States'}
                required={true}
                onChange={val => selectCountry(val)}
                disabled={true}
              />
            </li>
            <li className="country-state-jars">
              <label htmlFor="state">state: </label>
              <RegionDropdown
                country={'United States'}
                value={state}
                blankOptionLabel={'Select State'}
                defaultOptionLabel={'Select State'}
                disableWhenEmpty={true}
                required={true}
                onChange={val => selectRegion(val)}
              />
            </li>
            <br />
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="email">email: </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  className={
                    errors?.email?.type === 'required' ||
                    errors?.email?.type === 'maxLength'
                      ? 'error'
                      : ''
                  }
                  {...register('email', {required: true, maxLength: 100})}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              {errors?.email?.type === 'required' && requiredErrorMessage}
              {errors?.email?.type === 'maxLength' &&
                maxLengthErrorMessage(100)}
            </li>
            <br />
            <br />
            <li className="country-state-jars">
              <label htmlFor="quantity">bags:</label>
              <div>
                <button
                  name="decrement"
                  type="button"
                  disabled={disBut[0]}
                  onClick={handleClick}
                >
                  -
                </button>
                <input
                  type="number"
                  readOnly={true}
                  id="quantity"
                  name="quantity"
                  {...register('quantity')}
                  value={quantity}
                />
                <button
                  name="increment"
                  type="button"
                  disabled={disBut[1]}
                  onClick={handleClick}
                >
                  +
                </button>
              </div>
            </li>
            <input id="submit" type="submit" value="Submit"></input>
          </ul>
        </form>
      </div>
    </>
  )
}

export default CoffeeOrderForm
