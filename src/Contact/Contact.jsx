import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="mx-auto w-75">
        <h4 className='fw-bold mb-3 h2'>Contact Now</h4>
        <label htmlFor="user_name">user_name :</label>
        <input type="text" className='form-control mb-3' id='user_name'/>
        <label htmlFor="last_name">last_name :</label>
        <input type="text" className='form-control mb-3' id='last_name'/>
        <label htmlFor="user_email">user_email :</label>
        <input type="email" className='form-control mb-3' id='user_email'/>
        <label htmlFor="user_password">user_password :</label>
        <input type="password" className='form-control mb-3' id='user_password'/>
        <button className="btn btn-outline-info px-4 my-3 py-2">Send Contact</button>
      </div>
    </>
  )
}
