import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Food.css'

export default function Cake() {
  const [cakes, setCakes] = useState([])

  async function getFood()
  {
    let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=cake`);
    setCakes(data.recipes)
  }
  useEffect(() => {
    getFood() 
  } , [])

  return (
    <>
    {cakes? <div className="row justify-content-center">
        {cakes.map((cake , i) => <div key={i} className='col-md-3'>
          <Link to={`/homedetalis/${cake.recipe_id}`}>
            <div className='box my-3 h-75'>
              <span className='bg-dark text-light rank py-2 px-3'>
                {cake.social_rank}
              </span>
              <img src={cake.image_url} className='w-100 h-100' alt="" />
              <div className='item text-white py-1 px-2 text-center'>
              <h5 className='mt-3 mb-4'>{cake.title}</h5>
              <p>{cake.publisher}</p>
              </div>
            </div>
          </Link>
        </div>)}
      </div> : <div className='d-flex vh-100 justify-content-center align-items-center'> 
      <i className="fas fs-1 fa-spinner fa-spin"></i> </div>}
      
    </>
  )
} 
