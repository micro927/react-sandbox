import { useState, useEffect } from 'react'
import {
    Card,
    Container,
    Button,
    Row,
    Col,
} from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';


function Welcome(props) {
    const [leagues, setLeagues] = useState([])


    useEffect(() => {
        async function fetchLeagues() {
            const url = "http://localhost:3099/football/leagues";
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    const result = data.response.filter((row) => (row.country.name === props.country || row.country.name === 'England') && row.league.type === 'League')

                    setLeagues(result ? result : {})

                })
                .catch(err => console.log(err))
        }
        fetchLeagues();
        // leagues.map(league => console.log(league)) //dev
    }, [props.country])

    const allCountry = [... new Set(leagues.map(league => league.country.name))]
    console.log(allCountry)
    return (
        <>
            <Container>
                <h1><ArrowRight size={20} /> FOOTBALL STATISTIC</h1>
                <Card body className="contentCard flex">
                    <Row>

                        {leagues.map(league => {
                            return (
                                <Col sm={3} key={league.league.id}>
                                    <Card className="contentCard" style={{ minHeight: '35rem', margin: '0.5rem' }}>
                                        <Card.Img variant="top" src={league.league.logo} style={{ objectFit: 'none', height: '18rem' }} />
                                        <Card.Body>
                                            <Card.Title>{league.league.name} <img src={league.country.flag} style={{ width: '20px' }} /></Card.Title>
                                            <Card.Text>
                                                This is League from {league.country.name}.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default Welcome
