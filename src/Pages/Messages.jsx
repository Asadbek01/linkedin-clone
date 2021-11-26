import MessageMain from "../Components/MessageMain"
import MessageRightSidebar from "../Components/MessageRightSidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const Messages = () => {
  return (
    <Container>
      <Row>
        <Col xs="8">
          <MessageMain />
        </Col>
        <Col xs="4">
          <MessageRightSidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default Messages
