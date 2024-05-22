import React, { useState } from 'react'

const Modal = () => {
    const [showModal,setShoModal] = useState(false)
  return (
    <div>
   <button className='open-modal-btn' onClick={()=> setShoModal(true)}>open Modal</button>

   <main className={`modal-container ${showModal ? "show-modal": "close-modal"}`}>
<div className='section-container'>
    <section className='first-section'>
<h1>just call me anything an i will answer you</h1>
<button className='cancel-btn'  onClick={()=> setShoModal(false)} >X</button>
    </section>
    <section className='second-section'>
<h1>I am just the middle section</h1>
    </section>
    <section className='third-section'>
<h1>I am the third section😁😁😁😁</h1>
    </section>

</div>
   </main>
    </div>
  )
}

export default Modal
