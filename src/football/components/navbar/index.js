import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './index.scss'

function WebNavbar() {
    const linkColor = {
        color: 'white'
    }
    return (
        <>
            <Nav className="justify-content-center pl-2" activeKey="/home" variant='{light}'>
                <Nav.Item className='align-items-center'>
                    <NavLink to="./" className="h5 nav-link navbar-to" style={linkColor}>Home</NavLink>
                </Nav.Item>
                <Nav.Item className='align-items-center'>
                    <NavLink to="./team" className="h5 nav-link navbar-to" style={linkColor}>Teams</NavLink>
                </Nav.Item>
                <Nav.Item className='align-items-center'>
                    <NavLink to="./player" className="h5 nav-link navbar-to" style={linkColor}>Players</NavLink>
                </Nav.Item>
                <Nav.Item className='align-items-center'>
                    <NavLink to="./results" className="h5 nav-link navbar-to" style={linkColor}>Results</NavLink>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default WebNavbar