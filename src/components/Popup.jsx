import React from 'react'
import Popup from 'reactjs-popup'
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'

const Modal = () => {
  const location = useLocation()
  const queryString = new URLSearchParams(location.search)
  const [orderId, setOrderId] = useState(queryString.get('invoiceid'))

  useEffect(() => {
    if (orderId != null && orderId != '') {
      setOpen(true)
    }
  }, [orderId])

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  return (
    <Popup
      modal
      closeOnDocumentClick
      lockScroll
      open={open}
      onClose={closeModal}
      overlayStyle={{
        background: 'rgba(1,1,1,.5)',
      }}
    >
      {close => (
        <div className="modal">
          <div className="header">Thank You!</div>
          <div className="content">
            <div className="column left">
              <img className="popupImage" src="/cuteBera.jpg" />
            </div>
            <div className="column right">
              <p>
                Thank you for buying my delicious honey and giving bitcoin a go!
              </p>
              <div id="order-id">
                <span>Your Invoice ID is:</span>
                <span className="number">{orderId}</span>
              </div>
            </div>
          </div>
          <div className="actions">
            <button
              className="ty-button"
              onClick={() => {
                close()
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default Modal
