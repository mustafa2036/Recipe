import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Pasta() {
    const [pastaFood, setPastaFood] = useState([])

  async function getFood()
  {
    let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pasta`);
    setPastaFood(data.recipes) 
  }
  useEffect(() => {
    getFood() 
  } , [])

  return (
    <>
    {pastaFood? <div className="row justify-content-center">
        {pastaFood.map((pasta , i) => <div key={i} className='col-md-3'>
          <Link to={`/homedetalis/${pasta.recipe_id}`}>
            <div className='position-relative h-100'>
              <img src={pasta.image_url} className='w-100 h-75' alt="" />
              <span className='bg-dark text-light position-absolute top-0 end-0 py-2 px-3'>
                    {pasta.social_rank}
              </span>
              <h4 className='text-dark mt-4'>{pasta.title}</h4>
            </div>
          </Link>
        </div>)}
      </div> : <div className='d-flex justify-content-center align-items-center vh-100'> 
      <i className="fas fs-1 fa-spinner fa-spin"></i> </div>}
    </>
  )
}
