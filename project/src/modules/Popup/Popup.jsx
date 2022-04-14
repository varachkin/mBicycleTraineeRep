import CloseIcon from '@mui/icons-material/Close'

import Button from '@mui/material/Button'
import React from 'react'
import "./Popup.css"


const Popup = (props) => {
  return (
    <div className={`alert_container ${props.isOpen? 'open_container': 'close_container'}`}>
      <div className={`alert_block ${props.isOpen? 'open_content': 'close_content'}`}>
        <div className="close" onClick={props.closeAlert}>
          <CloseIcon/>
        </div>
        <h4 className="alert_title">{props.title || `Невядомы алёрт. Може пропсы не прокинул`}</h4>
        <p className="alert_content">
          {props.text || `Шо, опять пропсы не прокинул? У зеркала глядзи, барана кусок`}
        </p>
        <Button variant="contained" onClick={props.closeAlert}>Ясно понятно</Button>
      </div>
    </div>
  )
}

export default Popup
