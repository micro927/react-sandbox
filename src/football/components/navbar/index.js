import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './index.scss'

function WebNavbar() {
    return (
        <>
            <Nav className="justify-content-center pl-2 WebNavbar" activeKey="/home">
                <Nav.Item className='align-items-center'>
                    <NavLink to="./" className="h5 nav-link">Home</NavLink>
                </Nav.Item>
                <Nav.Item className='align-items-center'>
                    <NavLink to="./team" className="h5 nav-link">Teams</NavLink>
                </Nav.Item>
                <Nav.Item className='align-items-center'>
                    <NavLink to="./player" className="h5 nav-link">Players</NavLink>
                </Nav.Item>
                <Nav.Item className='align-items-center'>
                    <NavLink to="./results" className="h5 nav-link">Results</NavLink>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default WebNavbar