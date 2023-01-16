import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Restaurant</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {props.userData?
                    <>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        RestaurantFoods
                        </Link>
                        <ul className="dropdown-menu py-3 px-4 fs-5" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="pizza">Pizza Food</Link></li>
                            <li><Link className="dropdown-item" to="pasta">Pasta Food</Link></li>
                            <li><Link className="dropdown-item" to="corn">Corn Food</Link></li>
                            <li><Link className="dropdown-item" to="carrot">Carrot Food</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="chicken">Chicken</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="cake">Cake</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="contact">Contact</Link>
                        </li>
                    </>
                    :''}
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 order-lg-first order-lg-last">
                    {props.userData?<>
                    <li className="nav-item">
                        <i className='fab text-white ms-4 fa-facebook-f'></i>
                        <i className='fab text-white ms-4 fa-twitter'></i>
                        <i className='fab text-white ms-4 fa-instagram'></i>
                        <i className='fab text-white ms-4 fa-dribbble'></i>
                    </li>
                    </>: ''}
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 order-lg-last order-md-first">
                    {props.userData? <>
                        <li className="nav-item">
                            <span onClick={props.logOut} className="nav-link curror">Logout</span>
                        </li>
                    </>:<>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="login">Login</Link>
                        </li>
                    </>}
                </ul>
            </div>
        </div>
        </nav>
    </>
  )
}
