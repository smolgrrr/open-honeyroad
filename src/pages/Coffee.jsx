import {Link} from 'react-router-dom'
import AsyncImage from '../components/AsyncImage'
import {fiatToSatoshis} from 'bitcoin-conversion'

const paymentInSatsFromUsd = await fiatToSatoshis('25.35', 'USD')

const Coffee = () => {
  return (
    <div className="fragment">
      <div id="all_but_footer">
        <div id="content">
          <div className="main-info-of-product">
            <span className="img_one_wrapper">
              <div className="async-image-placeholder">
                <AsyncImage
                  src="coffee.jpeg"
                  className="main one responsive-image"
                />
              </div>
            </span>
            <span style={{display: 'inline-block', verticalAlign: 'top'}}>
              <span className="h1">
                El Salvador Ground Coffee – San Pacho Black Honey
              </span>
              <br />
              <br />
              <span className="price_big">
                <div className="for-now-info_wrapper">
                  <div className="for-now-info_folder">
                    <i className="fak fa-satoshisymbol-solid" />
                    {(paymentInSatsFromUsd / 1000).toPrecision(3)}k
                  </div>
                </div>
              </span>
              <div className="container add-to-cart">
                <Link to="/orderCoffee">buy now</Link>
              </div>
              <br />
              <br />
              <span className="container container_small">
                seller: <a href="https://sats.coffee/">satscoffee(11)</a>
                <br />
                ships from: US
                <br />
                ships to: US
                <br />
                category:
                <Link to="/coffee">Caffeine</Link>
                <br />
              </span>
              <br />
              <br />
              postage options:
              <br />
              <div>
                <select name="postage">
                  <option value={364677}>free ship (฿0.0)</option>
                </select>
                <div
                  className="info_wrapper"
                  style={{position: 'relative', bottom: 2}}
                >
                  <div className="info_folder">
                    <div className="info_icon">?</div>
                    <div className="info_message">
                      This vendor offers free shipping.
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <span className="container container_small">
                <a
                  href="https://twitter.com/smolgrrr/status/1529430160986218496?s=20&t=_NQ8TDVBqNVQKo1RxesShQ"
                  target="_blank"
                >
                  report this item
                </a>
              </span>
              <br />
              <br />
            </span>
          </div>
          <div
            className="container container_large"
            style={{margin: '20px 0 40px'}}
          >
            <div className="h3">Description</div>
            <br />
            Our top tier coffee comes from El Salvador…the first nation to
            declare bitcoin legal tender in 2021.
            <br />
            The beans come from Finca Las Veraneras in Ahuachapán, the
            westernmost city and an an agricultural center for coffee.
            <br />
            <br />
            This is an absolutely delicious coffee and very unique in its
            properties. The coffee tastes so much like the pulp of coffee fruit
            or “cherry” itself. It is sweet, delicate, and floral in its flavor
            profile. You may also taste spices, dry fruits, and cane sugar. The
            coffee is delicious when used for espresso as well as for regular
            coffee. We guarantee you will love it!
            <br />
            <br /> Black honey processing is labor-intensive, but you will get a
            sweetness to the bean as a result. If you’re not familiar with honey
            processing, you can read more about{' '}
            <a href="https://perfectdailygrind.com/2017/02/yellow-red-black-honey-processed-coffees-whats-the-difference/">
              it here.
            </a>
            <br />
            <br />
            Or checkout our Ethiopia Natural Sidamo Guji, and Satoshi’s Mocha
            Java Blend at <a href="https://sats.coffee/">sats.coffee</a>
          </div>
          <span className="h3">Customer reviews</span>
          <br />
          <br />
          <div className="responsive-table">
            <table className="zebra">
              <tbody>
                <tr>
                  <th>rating</th>
                  <th>review</th>
                  <th>name</th>
                  <th>freshness</th>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>lesgo</td>
                  <td>SmolGrrr</td>
                  <td style={{whiteSpace: 'nowrap'}}>2 days</td>
                </tr>
                <tr>
                  <td colSpan={4} id="pagination" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coffee
