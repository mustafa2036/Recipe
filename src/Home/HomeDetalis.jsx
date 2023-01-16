import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function HomeDetalis() {
    let params = useParams()
    const [foodDetalis, setFoodDetalis] = useState({})

    async function getFood(recipe_id)
    {
      let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`);
      setFoodDetalis(data.recipe)
    }
    useEffect(() => {
      getFood(params.recipe_id) 
    },[])

  return (
    <>
        {foodDetalis? <div className="row py-5">
            <div className="col-md-6">
              <div className='position-relative'>
                <img src={foodDetalis.image_url} className='w-100' alt="" />
                <span className='bg-dark text-light position-absolute top-0 end-0 py-2 px-4'>
                    {foodDetalis.social_rank}
                </span>
              </div>
            </div>
            <div className="col-md-9 my-3">
                <h2 className='my-2'>publisher: {foodDetalis.publisher}</h2>
                <h4 className='my-2'>title: {foodDetalis.title}</h4>
                <a href={foodDetalis.publisher_url} target='__blank' className='text-info my-4'>{foodDetalis.publisher_url}</a>
                <p className='text-muted fs-5 my-2'>ingredients: {foodDetalis.ingredients}</p>
            </div>
        </div>: <div className='vh-100 d-flex align-items-center justift-content-center'> 
        <i className="fas fa-spinner fs-1 fa-spin"></i> </div>}
    </>
  )
}
