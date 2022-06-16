import React from 'react'

const Modal = ({images}) => {
  return (
    <div className=''>
           <img
          class="w-full"
          src={`${images.front_default}`}
          alt="Sunset in the mountains"
        />
    </div>
  )
}

export default Modal