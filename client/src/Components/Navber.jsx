import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <div style={{"display":"flex","justifyContent":"space-evenly"}} >
        
        <Button> <Link to="/signup" >Signup</Link> </Button>
        <Button> <Link to="/login" >Login </Link> </Button>
        <Button> <Link to="/" >Products</Link> </Button>
        <Button> <Link to="/admin" >Admin Page</Link> </Button>

        </div>
    </div>
  )
}

export default Navbar