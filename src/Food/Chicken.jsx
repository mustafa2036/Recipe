import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Chicken() {
    const [chickenFood, setChickenFood] = useState([])

    async function getFood()
    {
      let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=chicken`);
      setChickenFood(data.recipes)
    }
    useEffect(() => {
      getFood() 
    } , [])

  return (
    <>
    {chickenFood? <div className="row justify-content-center">
        {chickenFood.map((chicken , i) => <div key={i} className='col-md-3'>
          <Link to={`/homedetalis/${chicken.recipe_id}`}>
            <div className="box my-3 h-75">
              <span className='bg-dark text-light py-2 px-3 rank'>
                {chicken.social_rank}
              </span>
              <img src={chicken.image_url} className='w-100 h-100' alt="" />
              <div className="item text-white text-center">
                <h5 className='h6 mt-3'>{chicken.title}</h5>
                <p>{chicken.publisher}</p>
              </div>
            </div>
          </Link>
        </div>)}
      </div> : <div className='d-flex vh-100 justify-content-center align-items-center'> 
      <i className="fas fs-1 fa-spinner fa-spin"></i> </div>}
    </>
  )
}
