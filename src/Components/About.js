import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const About = () => {

    const styled = {
        fontSize: "30px",
        margin: "50px 20px"
    }
  return (
    <div>
        <h2>Summary</h2>
        <p>This simple shopping cart was built with React. 
            Axios was used with the <a href='https://fakestoreapi.com/docs'>Fake Store</a> Api.
            React-use-cart was used to set up the shopping cart
        </p>
<div className='about-icons'>
<a target="_blank" href='https://github.com/StaceyLouis'><FontAwesomeIcon icon={faGithub} className="icon" style={styled}/></a>
<a target="_blank" href='https://www.linkedin.com/in/stacey-louis/'><FontAwesomeIcon icon={faLinkedin} className="icon" style={styled}/></a>

</div>
       
        
        
    </div>
  )
}

export default About