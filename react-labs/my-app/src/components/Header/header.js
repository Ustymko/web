import './header.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'

function header() {
    return(
        <div className="header">
            <Navbar variant='dark'>
                <Container>
                        <div className="logo-and-name">
                            <img alt="logo" src="https://dec-mkt.imgix.net/font-awesome_4-7-0_car_256_0_ffffff_none.png?v=1595523505&auto=format,compress"/>
                            Autoria
                        </div>
                        <Nav style={{fontSize: 25}}>
                            <Nav.Link style={{marginRight: 10}}>Home</Nav.Link>
                            <Nav.Link style={{marginRight: 10}}>Account</Nav.Link>
                            <Nav.Link style={{marginRight: 10}}>About</Nav.Link>
                            <Nav.Link style={{marginRight: 10}}>Contact</Nav.Link>
                        </Nav>
                        <Button style={{marginLeft: 300}} variant="light">Login</Button>
                        <Button style={{marginLeft: 30}} variant="outline-light">Register</Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default header;