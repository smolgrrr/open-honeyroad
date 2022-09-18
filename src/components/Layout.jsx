import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Modal from './Popup'
import useStyles from '../styles/layout'
import Home from '../pages/Home'
import Order from '../pages/Order'
import About from '../pages/About'
import Coffee from '../pages/Coffee'
import Honey from '../pages/Honey'
import BAYC from '../pages/BAYC'
import Convert from '../pages/Convert'

const Layout = props => {
  const classes = useStyles()
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderCoffee" element={<Order product={'coffee'} />} />
          <Route path="/honey" element={<Honey />} />
          <Route path="/about" element={<About />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/BAYC" element={<BAYC />} />
          <Route path="/convert" element={<Convert />} />
        </Routes>
      </div>
      <Footer />
      <Modal />
    </div>
  )
}

export default Layout
