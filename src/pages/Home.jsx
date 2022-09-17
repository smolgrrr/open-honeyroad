import {fiatToSatoshis} from 'bitcoin-conversion'
import {createUseStyles} from 'react-jss'
import AsyncImage from '../components/AsyncImage'

const paymentInSatsFromUsd = await fiatToSatoshis('25.35', 'USD')

const useStyles = createUseStyles(theme => ({
  content: {
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px 10px 38px 150px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  featured: {
    margin: '0 5px 30px 5px',
    float: 'left',
  },
}))

const Home = () => {
  const classes = useStyles()

  const Product = ({href = '', src = '', children = '', price = ''}) => {
    return (
      <div className={classes.featured}>
        {href ? (
          <a href={href}>
            <AsyncImage src={src} className="main two" />
            <div className="featured_text">{children}</div>
          </a>
        ) : (
          <div>
            <AsyncImage src={src} className="main two" />
            <div className="featured_text">{children}</div>
          </div>
        )}
        <Price price={price} />
      </div>
    )
  }

  const Price = ({price}) => {
    return price ? (
      <div className="price_small">
        <i className="fak fa-satoshisymbol-solid" />
        {price}
      </div>
    ) : (
      ''
    )
  }

  return (
    <div className="fragment">
      <div id="all_but_footer">
        <div className={classes.content}>
          <Product href="/honey" src="product.png" price="175k">
            Bear's Honey 160g
          </Product>
          <Product
            href="/coffee"
            src="coffee.jpeg"
            price={(paymentInSatsFromUsd / 1000).toPrecision(3).concat('k')}
          >
            El Salvador Ground Coffee– <br /> San Pacho Black Honey
          </Product>
          <Product href="/BAYC" src="BAYC.png" price="100k">
            BAYC Animation
          </Product>
          <Product src="question.png"></Product>
        </div>
      </div>
    </div>
  )
}

export default Home
