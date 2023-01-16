import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Pizza() {
  const [pizzaFood, setPizzaFood] = useState([])

  async function getFood()
  {
    let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    setPizzaFood(data.recipes)
  }
  useEffect(() => {
    getFood() 
  } , [])

  return (
    <>
    {pizzaFood? <div className="row justify-content-center">
        {pizzaFood.map((pizza , i) => <div key={i} className='col-md-3'>
          <Link to={`/homedetalis/${pizza.recipe_id}`}>
            <div className='position-relative h-100'>
              <span className='bg-dark text-light position-absolute top-0 end-0 py-2 px-3'>
                  {pizza.social_rank}
              </span>
              <img src={pizza.image_url} className='w-100 h-75' alt="" />
              <h4 className='text-dark mt-4'>{pizza.title}</h4>
            </div>
          </Link>
        </div>)}
      </div> : <div className='d-flex vh-100 justify-content-center align-items-center'> 
      <i className="fas fs-1 fa-spinner fa-spin"></i> </div>}
      
    </>
  )
} 
