import React , {useContext} from 'react'
import {Link} from 'react-router-dom'
import { NewsContext } from '../Store/Store';

export default function Home() {

  let {pizza , pasta , corns , cakes} = useContext(NewsContext)

  return (
    <>
      <div className="row py-4 justify-content-center">
        <div className="col-md-3 d-flex align-items-center">
          <div>
            <h3>Get Food Pizza</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod impedit tenetur quos nostrum dolore aliquam.</p>
          </div>
        </div>
        {pizza.map((pizz) => <div className='col-md-3'>
            <Link to={`/homedetalis/${pizz.recipe_id}`}>
              <div className="position-relative h-100">
                <span className='bg-dark text-light end-0 top-0 position-absolute py-2 px-3'>
                  {pizz.social_rank}
                </span>
                <img className='w-100 h-75' src={pizz.image_url} alt="" />
                <h3 className='h6 mt-3'>{pizz.title}</h3>
              </div>
            </Link>
        </div>)}
      </div>
      <div className="row py-4 justify-content-center">
        <div className="col-md-3 d-flex align-items-center">
          <div>
            <h3>Get Food Pasta</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod impedit tenetur quos nostrum dolore aliquam.</p>
          </div>
        </div>
        {pasta.map((past) => <div className='col-md-3'>
          <Link to={`/homedetalis/${past.recipe_id}`}>
              <div className="position-relative h-100">
                <span className='bg-dark text-light end-0 top-0 position-absolute py-2 px-3'>
                  {past.social_rank}
                </span>
                <img className='w-100 h-75' src={past.image_url} alt="" />
                <h3 className='h6 mt-3'>{past.title}</h3>
              </div>
          </Link>
        </div>)}
      </div>
      <div className="row py-4 justify-content-center">
        <div className="col-md-3 d-flex align-items-center">
          <div>
            <h3>Get Food corn</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod impedit tenetur quos nostrum dolore aliquam.</p>
          </div>
        </div>
        {corns.map((corn) => <div className='col-md-3'>
          <Link to={`/homedetalis/${corn.recipe_id}`}>
              <div className="position-relative h-100">
                <span className='bg-dark text-light end-0 top-0 position-absolute py-2 px-3'>
                  {corn.social_rank}
                </span>
                <img className='w-100 h-75' src={corn.image_url} alt="" />
                <h3 className='h6 mt-3'>{corn.title}</h3>
              </div>
          </Link>
          </div>)}
      </div>
      <div className="row py-4 justify-content-center">
        <div className="col-md-3 d-flex align-items-center">
          <div>
            <h3>Get Cake</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod impedit tenetur quos nostrum dolore aliquam.</p>
          </div>
        </div>
        {cakes.map((cake) => <div className='col-md-3'>
          <Link to={`/homedetalis/${cake.recipe_id}`}>
          <div className='box my-3 h-75'>
              <span className='bg-dark text-light rank py-2 px-3'>
                {cake.social_rank}
              </span>
              <img src={cake.image_url} className='w-100 h-100' alt="" />
              <div className='item py-1 px-2 text-center'>
              <h5 className='mt-3 text-white mb-4'>{cake.title}</h5>
              <p className='text-white'>{cake.publisher}</p>
              </div>
            </div>
          </Link>
          </div>)}
      </div>
    </>
  )
}
