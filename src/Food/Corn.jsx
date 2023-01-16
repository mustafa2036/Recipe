import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Corn() {

    const [cornFood, setCornFood] = useState([])

    async function getFood()
    {
      let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=corn`);
      setCornFood(data.recipes)
    }
    useEffect(() => {
      getFood() 
    } , [])
  return (
    <>
   {cornFood? <div className="row justify-content-center">
        {cornFood.map((corn , i) => <div key={i} className='col-md-3'>
          <Link to={`/homedetalis/${corn.recipe_id}`}>
            <div className='position-relative h-100'>
              <span className='bg-dark text-light position-absolute top-0 end-0 py-2 px-3'>
                    {corn.social_rank}
              </span>
              <img src={corn.image_url} className='w-100 h-75' alt="" />
              <h4 className='text-dark mt-4'>{corn.title}</h4>
            </div>
          </Link>
        </div>)}
      </div> : <div className='d-flex vh-100 justify-conent-center align-items-center'> 
      <i className="fas fs-1 fa-spinner fa-spin"></i> </div>}
    </>
  )
}
