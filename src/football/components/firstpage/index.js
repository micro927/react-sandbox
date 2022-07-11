import { Card, Container } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

// let []

function App() {
    return (
        <>
            <Container>
                <h1><ArrowRight size={20} /> FOOTBALL STATISTIC</h1>
                <Card body className="contentCard">This is some text within a card body.</Card>
            </Container>
        </>
    )
}


export default App
