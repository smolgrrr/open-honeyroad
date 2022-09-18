import {Link} from 'react-router-dom'
import AsyncImage from '../components/AsyncImage'

const Convert = props => {
  return (
    <div className="fragment">
      <div id="all_but_footer">
        <div id="content">
          <div className="main-info-of-product">
            <span className="img_one_wrapper">
              <div className="async-image-placeholder" style={{width: '100%', height: '28vw',}}>
                <AsyncImage
                  src="fixedfloat.jpeg"
                  style={{width: '100%', height: '100%',}}
                />
              </div>
            </span>
            <span style={{display: 'inline-block', verticalAlign: 'top'}}>
              <span className="h1">Swap to <i className="fak fa-satoshisymbol-solid" /></span>
              <br />
              <br />
              <iframe src="https://widget.fixedfloat.com/?to=BTCLN&amp;ref=4fg6te1a&amp;lockReceive=true&amp;lockType=true&amp;hideType=true&amp;lockAmount=true&amp;toAmount=0.001" allowtransparency="true" style={{minHeight: '400px', width: '100%', border: 'none'}}></iframe>
              <br />
            </span>
          </div>
          <div
            className="container container_large"
            style={{margin: '20px 0 40px'}}
          >
            <div className="h3">Description</div>
            <br />
            <a href="https://fixedfloat.com/">FixedFloat.com</a> is an instant, fully automated digital asset exchange with lightning network.
            <br />
            <br />
            <strong>HOW TO</strong><br />
            1) Download wallet with lightning support (I recommend Muun or Wallet of Satoshi)<br />
            2) Generate a lightning invoice <br />
            3) Enter your invoice into the fixed float widget above<br />
            4) Pay with whatever token you'd like<br />
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
                    really simple, and easy
                  </td>
                  <td>smolgrrr</td>
                  <td style={{whiteSpace: 'nowrap'}}>2 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>good place to exchange cryptocurrency without KYC</td>
                  <td>Colin Teach (trustpilot)</td>
                  <td style={{whiteSpace: 'nowrap'}}>6 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>
                    Exchange in seconds. Thank you!
                  </td>
                  <td>Neven Zec (bestchange.com)</td>
                  <td style={{whiteSpace: 'nowrap'}}>19 days</td>
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

export default Convert