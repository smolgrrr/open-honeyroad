import {Carousel} from 'react-responsive-carousel'
import OrderForm from '../components/OrderForm'
import CoffeeOrderForm from '../components/CoffeeOrderForm'

const Order = ({product}) => {
  return (
    <div id="order-page" className="fragment">
      <div id="all_but_footer">
        <div id="content" className="order-form-content">
          <div className="form-column">
            <span className="h2">Shopping cart</span>
            <div className="container address-form">
              {product === 'coffee' ? <CoffeeOrderForm /> : <OrderForm />}
            </div>
          </div>
          <Carousel
            emulateTouch={true}
            swipeable={true}
            infiniteLoop={true}
            autoPlay={true}
            width="300px"
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            interval={8000}
          >
            <div>
              <img src="/uglySOB.png" />
            </div>
            <div>
              <img src="/bullBearDealers.png" />
            </div>
            <div>
              <img src="/wantedWassie.jpg" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Order
