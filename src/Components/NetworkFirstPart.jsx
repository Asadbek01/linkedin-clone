import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Container,
  Input,
} from "react-bootstrap"
import MyButton from "./MyButton"

const NetworkFirstPart = () => {
  return (
    <Container className="profile-sub-section pt-0 pb-0">
      <Row className=" pl-1 ">
        <Col>
          <p className=" pl-3 text-muted">Invitations </p>
        </Col>
        <Col xs="4" className=" d-flex align-items-center ">
          <p className=" text-muted ml-auto ">Manage</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <div className="d-flex align-items-center ml-3 mb-2 mt-0">
          <img
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            className="sidebar-Home2-images ml-2 mt-0 d-flex align-items-baseline"
          />
          <div>
            <small className="text-muted ml-2">Newsletter.Weekly</small>
            <p className="mb-1 ml-2 text-dark">
              <strong> Dominic McGregor</strong> invited you to Subscribe to{" "}
              <strong> Fearlessly Puplic</strong>
            </p>
          </div>
          <MyButton type=" outline button  " text="Ignore" />
          <MyButton type="outline button third-btn-outline " text="Accept" />
        </div>
      </Row>
    </Container>
  )
}
export default NetworkFirstPart
