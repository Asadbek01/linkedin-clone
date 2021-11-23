import { Row, Card, Col, Modal, Form, Button } from "react-bootstrap";
import { useState, setLocation } from "react";

const Licence =()=>{
const [addLicence, setAddLicence] = useState(false);
const [description, setDescription] = useState('');
const [title, setTitle] = useState('')
const [startDate, setStartDate] = useState('')
const [endDate, setEndDate] = useState("");

const showAddLicence = () => setAddLicence(true);
const closeAddLicence = () => setAddLicence(false);


return (
  <div className="profile-sub-section mt-4">
    <Row className="justify-content-between">
      <Col xs={10}>
        <h4 className="py-4 pl-3">Licenses & certifications</h4>
      </Col>
      <Col xs={2} className="py-4 pl-5">
        <i className="bi bi-plus mt-3 mr-4" onClick={showAddLicence}></i>
      </Col>
    </Row>

    <Row className="p-3">
      <Col xs={10}>
        <Card className="mb-3 profile-cards">
          <div className="d-flex align-items-center">
            {/* <Card.Img src={image} className="sidebar-profile-images ml-2" /> */}
            <Card.Body className="p-2">
              <div className="d-flex justify-content-between">
                <Card.Title className="mb-1 text-dark">
                  Learn Javascript Course
                </Card.Title>
              </div>
              <Card.Text className="text-muted">StriveSchool</Card.Text>
              <Card.Text className="text-muted">
                Issued Sep 2021 - No Exipration Date
              </Card.Text>
            </Card.Body>
          </div>
        </Card>{" "}
      </Col>
      <Col xs={2} className="py-4 pl-5">
        <i
          className="bi bi-pencil p-2"
          onClick={(e) => console.log(e)}
          //   {handleShowModal}
        ></i>{" "}
      </Col>
    </Row>
    <Row className="p-3">
      <Col xs={10}>
        <Card className="mb-3 profile-cards">
          <div className="d-flex align-items-center">
            {/* <Card.Img src={image} className="sidebar-profile-images ml-2" /> */}
            <Card.Body className="p-2">
              <div className="d-flex justify-content-between">
                <Card.Title className="mb-1 text-dark">
                  Learn Javascript Course
                </Card.Title>
              </div>
              <Card.Text className="text-muted">StriveSchool</Card.Text>
              <Card.Text className="text-muted">
                Issued Sep 2021 - No Exipration Date
              </Card.Text>
            </Card.Body>
          </div>
        </Card>{" "}
      </Col>
      <Col xs={2} className="py-4 pl-5">
        <i
          className="bi bi-pencil p-2"
          onClick={(e) => console.log(e)}
          //   {handleShowModal}
        ></i>{" "}
      </Col>
    </Row>
    <Row className="p-3">
      <Col xs={10}>
        <Card className="mb-3 profile-cards">
          <div className="d-flex align-items-center">
            {/* <Card.Img src={image} className="sidebar-profile-images ml-2" /> */}
            <Card.Body className="p-2">
              <div className="d-flex justify-content-between">
                <Card.Title className="mb-1 text-dark">
                  Learn Javascript Course
                </Card.Title>
              </div>
              <Card.Text className="text-muted">StriveSchool</Card.Text>
              <Card.Text className="text-muted">
                Issued Sep 2021 - No Exipration Date
              </Card.Text>
            </Card.Body>
          </div>
        </Card>{" "}
      </Col>
      <Col xs={2} className="py-4 pl-5">
        <i
          className="bi bi-pencil p-2"
          onClick={(e) => console.log(e)}
          //   {handleShowModal}
        ></i>{" "}
      </Col>
    </Row>

    <Modal show={addLicence} onHide={closeAddLicence}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* onSubmit={handleSubmit} */}
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  </div>
);
};

export default Licence;
