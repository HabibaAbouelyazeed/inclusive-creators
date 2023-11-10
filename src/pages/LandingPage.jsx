import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@material-tailwind/react";


const LandingPage = () => {
  return (
    <div>LandingPage
      <div>
      <FontAwesomeIcon icon={faCoffee} />
      <Button>Button</Button>;
      
      </div>
    </div>
  )
}

export default LandingPage