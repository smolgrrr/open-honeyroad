import axios from 'axios'
import config from '../../config.js'
import {useState, useEffect, useReducer} from 'react'
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'
import {useForm} from 'react-hook-form'
import {SpinnerCircular} from 'spinners-react'
import {
  nameErrors,
  nameErrorBool,
  addressErrors,
  addressErrorBool,
} from '../orderFormErrors'

// axios base url
const api = axios.create({
  baseURL: config.app.url,
})

const OrderForm = () => {
  // form info stored in state also
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [address1, setAddress1] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [loader, setLoader] = useState(false)

  function quantityReducer(state, action) {
    const {type, step} = action
    switch (type) {
      case 'INCREMENT': {
        console.log(action)
        return {
          quantity: state.quantity + step,
        }
      }
      case 'DECREMENT': {
        console.log(action)
        if (state.quantity > 1)
          return {
            quantity: state.quantity - step,
          }
      }
      case 'RESET': {
        console.log(action)
        return {
          quantity: 0,
        }
      }
      default: {
        throw new Error(`Unsupported action type: ${type}`)
      }
    }
  }

  const [_quantity, setQuantity] = useReducer(quantityReducer, {
    quantity: 1,
  })

  const {quantity} = _quantity

  const increment = step => setQuantity({type: 'INCREMENT', step})
  const decrement = step => setQuantity({type: 'DECREMENT', step})

  const redirectToCheckout = checkoutURL => {
    window.location.href = checkoutURL
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
        formData['country'] = country
        formData['state'] = state
        formData['quantity'] = quantity
        formData['uid'] = result.user.uid
        formData['product'] = 'honey'
        formData['email'] = 'null@gmail.com'
        const formJSON = JSON.stringify(formData) //need as string to send
        setLoader(true)
        sendData(formJSON)
      })
      .catch(error => {
        console.log(error.message)
        setLoader(false)
        window.alert(`Sorry! Something went wrong \n ${error.message}`)
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

  const Prompt = () => {
    return (
      <div className="prompt">
        <span>Alternatively, you can use PGP encryption</span>
        <div className="info_wrapper">
          <div className="info_folder">
            <div className="info_icon">?</div>
            <div className="info_message">
              For increased privacy, please feel free to use PGP encryption for
              your shipping information with our checkout page at
              fofvcafgehvc5ffnc37f2rnq6ojjp4pfpl6d6hq4i2qsbnpylu2y4sad.onion
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Spinner = loadingState => {
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

    const getRandomInt = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }

    const getPhrase = () => randomPhrases[getRandomInt(0, randomPhrases.length)]

    return (
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
        <p>{getPhrase()}</p>
      </div>
    )
  }

  return (
    <>
      <Spinner loadingState={loader} />
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
                  className={nameErrorBool(errors)}
                  placeholder="Kyle Davies"
                  {...register('name', {required: true, maxLength: 40})}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              {nameErrors(errors)}
            </li>
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="address1">address: </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={address1}
                  className={addressErrorBool('address1', errors)}
                  placeholder="1 Main Street"
                  {...register('address1', {
                    required: true,
                    maxLength: 100,
                    minLength: 3,
                  })}
                  onChange={e => setAddress1(e.target.value)}
                />
              </div>
              {addressErrors('address1', errors)}
            </li>
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="postalcode">postal/zip code: </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={postalCode}
                  className={addressErrorBool('postalCode', errors)}
                  placeholder="1HN 2RD"
                  {...register('postalCode', {
                    required: true,
                    maxLength: 100,
                    minLength: 3,
                  })}
                  onChange={e => setPostalCode(e.target.value)}
                />
              </div>
              {addressErrors('postalCode', errors)}
            </li>
            <li className="li-with-error">
              <div className="label-input">
                <label htmlFor="city">city: </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  className={addressErrorBool('city', errors)}
                  placeholder="Dubai"
                  {...register('city', {
                    required: true,
                    maxLength: 100,
                    minLength: 3,
                  })}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              {addressErrors('city', errors)}
            </li>
            <li className="country-state-jars">
              <label htmlFor="country">country: </label>
              <CountryDropdown
                value={country}
                required={true}
                onChange={val => selectCountry(val)}
              />
            </li>
            <li className="country-state-jars">
              <label htmlFor="state">state: </label>
              <RegionDropdown
                country={country}
                value={state}
                blankOptionLabel={'Select State'}
                defaultOptionLabel={'Select State'}
                disableWhenEmpty={true}
                required={true}
                onChange={val => selectRegion(val)}
              />
            </li>
            <br />
            <br />
            <li className="country-state-jars">
              <label htmlFor="quantity">jars:</label>
              <div>
                <button
                  name="decrement"
                  type="button"
                  disabled={quantity < 2}
                  onClick={() => decrement(1)}
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
                  onClick={() => increment(1)}
                >
                  +
                </button>
              </div>
            </li>
            <input id="submit" type="submit" value="Submit"></input>
          </ul>
        </form>
        <Prompt />
      </div>
    </>
  )
}

export default OrderForm
