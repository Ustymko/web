import './header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function header() {
    return(
        <div className="header">
            <Navbar variant='dark'>
                <Container>
                        <div className="logo-and-name">
                            <img alt="logo" src="https://dec-mkt.imgix.net/font-awesome_4-7-0_car_256_0_ffffff_none.png?v=1595523505&auto=format,compress"/>
                            Autoria
                        </div>
                        <Nav style={{fontSize: 25, marginLeft: 400}}>
                            <Nav.Link as={Link} to="/" style={{marginRight: 50}}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/catalog" style={{marginRight: 50}}>Catalog</Nav.Link>
                            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default header;