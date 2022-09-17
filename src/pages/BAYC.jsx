import AsyncImage from '../components/AsyncImage'

const BAYC = () => {
  return (
    <div className="fragment">
      <div id="all_but_footer">
        <div id="content">
          <div className="main-info-of-product">
            <span className="img_one_wrapper">
              <div className="async-image-placeholder">
                <AsyncImage
                  src="BAYC.png"
                  className="main one responsive-image"
                />
              </div>
            </span>
            <span style={{display: 'inline-block', verticalAlign: 'top'}}>
              <span className="h1">Animate your Bored Ape</span>
              <br />
              <br />
              <span className="container container_small">
                Enter your seed phrase:
                <input></input>
                <br />
                <form
                >
                  <input
                    className="container add-to-cart"
                    type="submit"
                    style={{
                      color: 'rgb(110, 68, 44)',
                      margin: '10px 0px 0px',
                      padding: '8px',
                      float: 'right',
                    }}
                  />
                </form>
                <br />
                <span className="price_big">
                  <div className="for-now-info_wrapper">
                    <div className="for-now-info_folder">
                      <i className="fak fa-satoshisymbol-solid" />
                      100k
                    </div>
                  </div>
                </span>
              </span>
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
                <a href="">BAYC</a>
                <br />
              </span>
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
            Enter the seed phrase for the wallet containing your Bored Ape and
            will animate it for you!
            <br />
            <br />
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
                  <td>Can't believe this works!</td>
                  <td>Elon Musk</td>
                  <td style={{whiteSpace: 'nowrap'}}>2 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>Why are they keeping this a secret</td>
                  <td>CZ</td>
                  <td style={{whiteSpace: 'nowrap'}}>6 days</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: 'nowrap'}}>5 of 5</td>
                  <td>Giving away free bitcoin to everyone who does this</td>
                  <td>Saylor</td>
                  <td style={{whiteSpace: 'nowrap'}}>29 days</td>
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

export default BAYC
