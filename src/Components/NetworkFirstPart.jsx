import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Container,
  Input,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap"
import BsCheckAll from 'react-icons'

const SideBarChat = () => {
  return (
    <Container className="profile-sub-section pt-0 pb-0">
      <Row className=" px-2  mt-3">
        <Col>
          <p className=" pl-3 text-muted">Invitations </p>
        </Col>
        <Col xs="4" className=" d-flex align-items-center ">
          <p className=" text-muted ml-auto ">Manage</p>
        </Col>
      </Row>
      <hr className="mt-0 " />
      <Row>
        <ListGroup>
          <ListGroupItem>

        <div className="d-flex align-items-center ml-3 mb-2 mt-0 px-2">
          <img
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            className="sidebar-Home2-images ml-0 mt-0 d-flex align-items-baseline "
          />
          <div className="">
            <small className="text-muted ml-2">Newsletter.Weekly</small>
            <p className="mb-1 ml-2 text-dark">
              <strong> Dominic McGregor</strong> invited you to Subscribe to{" "}
              <strong> Fearlessly Puplic</strong>
            </p>
          </div>
          
        </div>
          </ListGroupItem>
        </ListGroup>
      </Row>
    </Container>
  )
}
export default SideBarChat
