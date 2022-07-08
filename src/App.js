import './App.scss'
import {
    Container,
    Row,
    Col
}
    from 'react-bootstrap';
import WebNavbar from './components/webnavbar'
import WebCarousel from './components/webcarousel'
import WebFooter from './components/webfooter'



function App() {



    return (
        <>
            <section>
                <WebNavbar />
                <Container className='main'>
                    <Row>
                        <Col>
                            asdsasdasas
                        </Col>
                        <Col><WebCarousel /></Col>
                    </Row>

                </Container>
            </section>
            <footer>
                <WebFooter />
            </footer>
        </>
    )
}

export default App

