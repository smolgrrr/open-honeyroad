import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Header = () => {
  var root = useLocation().pathname == '/'

  return (
    <div id="header">
      <header className="head-stream">
        <Link to="/" className="making-logo">
          <img src="/logo.png" alt="" width="58" height="85" />
          <div>
            <h4>Honey Road</h4>
            <h6>pseudonymous market</h6>
          </div>
        </Link>
        <div className="head-content">
          <div className="head-status">
            <div className="status-counter">
              <Link to="/about">about</Link>
              <span className="status-divider" />
              <a href="https://freeross.org/donate/">freeross</a>
            </div>
            <div className="profile-section">
              <div className="hostedby">
                <small>hosted by</small>
                <a href="https://twitter.com/smolgrrr">SmolGrrr</a>
              </div>
              <img width="50" height="40" src="/bera.png" alt="" />
            </div>
          </div>
          <div className="direct-action">
            <div className="search-form-wraper">
              <label className="search_label" htmlFor="3487">
                Search
              </label>
              <div className="search-input-wraper">
                <input id="3487" type="text" />
                <button>Go</button>
              </div>
            </div>
            <div className="say-hi">
              <p>
                <span>Hi, </span>
                <a href="" id="welcome_name">
                  anon
                </a>
              </p>
              <span className="cart-divider" />
              <a href="#" style={{marginRight: '10px'}}>
                <img
                  src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAQAAADdhmJCAAAACXBIWXMAAEGHAABBhwEONqVyAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIWSURBVHjapJS/a1NRHMU/J4mt2mrS5kdb1ChkcBPFCoo6uDiJwYIgVAcrOrh0EvwjnB0U0cEfddBBRBA0Sl0qrYg/0MHYIFarSUpKsVRrfV+H1NrwXsJ76Ts8uPfyOPdzz+Ud6THbeckbXvGOD1Ro5tE92ZImtFU0IYXZQIbNbCRLLxc41wzJf+2Q6aPWBiepnd6X6XBwk7BqsfqIcWMlx0FxTcoJHm4tyRxJ9lFkeCUk1XALWh+AI6tr7sVnMp0JYHJecyEX2mXgRICjRKm4nWOakOmAb5LbeusmmeYBcMo3SYbPIY/lK8BBUr4sWtlE3svkOU9JcsSXSScJbxO4A5wm7MOkhxB577BS+i7TTh+xHpNpmzdJketAvw+SNAtM1tuhV6Zv6qpfQ1qjLqV0S58UidTZ4QUj7CbLJRK00UGcKFHaiZIkTYxO4iRoBR6xUP+0x2Uqq6AfcpYVaFWOZvRF7zWqYR0VkQa5Q5wWylSYokiREkVKlJmmwiy/mOeP919cVYeGZPqts2rX6qD1WFW3xmQa1/7mOraqqzLl1NNsUSPUorwcZYLUozvYeUpkGOQ1qzDAMAxwlsa2bD3EDA+9nHep4LrURur3uuJRnnCScS4CIUCL77+RgJ/spQ+4yRg5L5IBDMPRngY5hDWCYRoSImLu/u9e3LVRLa0jDcCWeh8kldOs7qqt4Z0MaEpfdUiIvwMA0R2sBIbRlZ0AAAAASUVORK5CYII="
                  id="cart_image"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div id="main_menu_wrapper">
        <div className="hidden-mobile" id={root ? 'main_menu_folder_listings' : 'main_menu_folder'}>
          <div id="main_menu_title">
            <span id="main_menu_title_part">Shop by</span> Category
          </div>
          <div id="main_menu">
            <Link to="/honey">Honey</Link>
            <span className="footnote"> 1</span>
            <br />
            <Link to="/coffee">Caffeine</Link>
            <span className="footnote"> 1</span>
            <br />
            <Link to="/BAYC">BAYC</Link>
            <span className="footnote"> 1</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
