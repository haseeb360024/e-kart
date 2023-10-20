import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
 
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div><Navbar className="bg-dark">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} className='fs-4' style={{textDecoration:"none",color:"white", fontWeight:'bold'}}>
      <i className="fa-solid fa-truck-fast me-2"></i> E kart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link className='btn border rounded'>
                <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    <i className='fa-solid fa-heart text-danger me-2'></i>Whishlist
                <Badge className='ms-2 rounded' bg="light">{wishlist.length}</Badge>
                </Link>
            </Nav.Link>

            <Nav.Link className='btn border rounded ms-3'>
                <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    <i className='fa-solid fa-cart-shopping text-warning me-2'></i>Cart
                <Badge className='ms-2 rounded' bg="light">{cart.length}</Badge>
                </Link>
            </Nav.Link>  
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar></div>
    
  )
}

export default Header