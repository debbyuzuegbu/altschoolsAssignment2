import React from 'react'
import { Link } from "react-router-dom";


function Error() {
  return (
    <div>
        <img style={{width: 10, height: 5}} src="https://demo.activeitzone.com/ecommerce/public/assets/img/404.svg"/>
        <h2>Page Not Found!</h2>
        <p>Oops! The page you are looking for has not been found on our server.</p>
        <Link to="/">BACK TO HOME </Link>
    </div>
  )
}

export default Error