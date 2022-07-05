import {
    Navbar,
    Container
}
    from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function WebNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    MY REACT WEBSITE
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default WebNavbar