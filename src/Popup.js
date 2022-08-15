import React from 'react'
import './Popup.css'
function Popup(props) {
  const { setIsPop, onDelete, curId } = props;

  return (
    <div onClick={(e) => {
      if (e.target.classList[0] === 'popup')
        setIsPop(false);
    }
    }

      className='popup'>
      <div className='inner'>
        <p style={{ color: "teal" }}>Are you sure you want to delete?</p>
        <button className='btn yes-btn' onClick={() => {
          onDelete(curId);
          setIsPop(false);
        }}  > Yes </button>
        <button className='btn no-btn' onClick={() => props.setIsPop(false)}> No </button>
      </div>
    </div>
  )
}

export default Popup