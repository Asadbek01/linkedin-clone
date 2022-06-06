import HomeLeftSidebar from "../Components/HomeLeftSidebar"
import HomeRightSidebar from "../Components/HomeRightSidebar"
import HomeCreatePost from "../Components/HomeCreatePost"
import HomeViewPost from "../Components/HomeViewPost"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import HomeSideBarFooter from '../Components/HomeSideBarFooter'

const Home = ({ data }) => {
    const [postsAdded, setPostsAdded] = useState(0)

    return (
        <Container>
            <Row>
                <Col xs='3'>
                    <HomeLeftSidebar data={data} />
                </Col>
                <Col xs='5'>
                    <HomeCreatePost setPostsAdded={setPostsAdded} data={data} />
                    <HomeViewPost postsAdded={postsAdded} />
                </Col>
                <Col xs='4'>
                    <HomeRightSidebar />
                    <HomeSideBarFooter />
                </Col>
            </Row>
        </Container>
    )
}

export default Home