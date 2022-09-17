import {Link} from 'react-router-dom'
import AsyncImage from '../components/AsyncImage'

const Honey = props => {
  return (
    <div className="fragment">
      <div id="all_but_footer">
        <div id="content">
          <div className="main-info-of-product">
            <span className="img_one_wrapper">
              <div className="async-image-placeholder">
                <AsyncImage
                  src="product.png"
                  className="main one responsive-image"
                />
              </div>
            </span>
            <span style={{display: 'inline-block', verticalAlign: 'top'}}>
              <span className="h1">Bear's Organic Honey 160g</span>
              <br />
              <br />
              <span className="price_big">
                <div className="for-now-info_wrapper">
                  <div className="for-now-info_folder">
                    <i className="fak fa-satoshisymbol-solid" />
                    175k
                  </div>
                </div>
              </span>
              <div className="container add-to-cart">
                <Link to="/order">buy now</Link>
              </div>
              <br />
              <br />
              <span className="container container_small">
                seller: <a href="https://twitter.com/smolgrrr">smolgrrr(94)</a>
                <br />
                ships from: Australia
                <br />
                ships to: Worldwide
                <br />
                category:
                <a href="">Honey</a>
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
            best KYC-free honey on the market. safe, stealth delivery <br />
            <br />
            <br />
            includes the number of sats paid on the label- you've now got your
            own bitcoin pizza to show-off in 10yrs.
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
                  <td>
                    amazing honey- just bought 500 and going to leave a huge tip
                  </td>
                  <td>SBF</td>
                  <td style={{whiteSpace: 'nowrap'}}>2 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>shit crazy fr</td>
                  <td>smolmooo</td>
                  <td style={{whiteSpace: 'nowrap'}}>6 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>
                    It doesn't compare to Phoenician Honey, but enjoyed
                    none-the-less.
                  </td>
                  <td>smoltaleb</td>
                  <td style={{whiteSpace: 'nowrap'}}>19 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>#Bitcoin is Honey</td>
                  <td>Saylor</td>
                  <td style={{whiteSpace: 'nowrap'}}>29 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>Great vendor! Bought with size at 333ea</td>
                  <td>smolzhu</td>
                  <td style={{whiteSpace: 'nowrap'}}>1 month</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>2 of 5</td>
                  <td>Found the jar difficult to open</td>
                  <td>Poordart</td>
                  <td style={{whiteSpace: 'nowrap'}}>1 month</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>yo</td>
                  <td>0xdazai</td>
                  <td style={{whiteSpace: 'nowrap'}}>1 month</td>
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

export default Honey
