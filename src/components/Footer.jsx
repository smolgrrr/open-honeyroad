import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Footer = () => {
  var not_root = useLocation().pathname !== '/'

  return (
    <div id="footer" className={not_root ? 'not-root' : 'root'}>
      {not_root && (
        <Link to="/" className="">
          <div className="back-home">&#8249; Back to home</div>
        </Link>
      )}
      <div>
        <Link to="/about#support" className="support">
          support
        </Link>
        |
        <a href="https://twitter.com/12yearoldwithcc" className="refunds">
          refunds
        </a>
      </div>
    </div>
  )
}

export default Footer
