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

const NetworkFirstPart = () => {
  return (
    <Container>
      <Row className="profile-sub-section pt-0 pb-0">
        <Col xs="8">
          <p className="pt-4 pl-3 text-muted">Invitations </p>
        </Col>
        <Col xs="4" className="mt-4 d-flex align-items-center ">
          <p className="mb-0 text-muted ">Manage</p>
        </Col>

        <hr />
        <div className="d-flex align-items-center">
          <img
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            className="sidebar-Home2-images ml-2 mt-0 d-flex align-items-baseline"
          />
          <div>
            <strong></strong>
            <small className="text-muted ml-2">Newsletter.Weekly</small>
            <p className="mb-1 ml-2 text-dark">
              <strong> Dominic McGregor</strong> invited you to Subscribe to{" "}
              <strong> Fearlessly Puplic</strong>
            </p>
          </div>
        </div>
      </Row>
    </Container>
  )
}
export default NetworkFirstPart
