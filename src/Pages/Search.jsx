import { Col, Container, Row } from "react-bootstrap"
import SearchResults from "../Components/SearchResults"

const Search = () => {
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <SearchResults heading='People' type='profile'/>
                </Col>
                <Col xs='12'>
                    <SearchResults heading='Posts' type='posts' />
                </Col>
            </Row>
        </Container>
    )
}

export default Search