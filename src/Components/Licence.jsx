import { Row, Card, Col } from "react-bootstrap";

const Licence =()=>{

return (
  <div className="profile-sub-section mt-4">
    <Row>
      <Col xs={8}>
        <h4 className="py-4 pl-3">Licenses & certifications</h4>
      </Col>
      <Col xs={4}>
        <i className="bi bi-plus mt-3 mr-4"></i>
      </Col>
    </Row>

    <Row className="p-3">
      <Col xs={8}>
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
      <Col xs={4}>
        <i
          className="bi bi-pencil p-2"
          onClick={(e) => console.log(e)}
          //   {handleShowModal}
        ></i>{" "}
      </Col>
    </Row>
    <Row className="p-3">
      <Col xs={8}>
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
      <Col xs={4}>
        <i
          className="bi bi-pencil p-2"
          onClick={(e) => console.log(e)}
          //   {handleShowModal}
        ></i>{" "}
      </Col>
    </Row>
    <Row className="p-3">
      <Col xs={8}>
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
      <Col xs={4}>
        <i
          className="bi bi-pencil p-2"
          onClick={(e) => console.log(e)}
          //   {handleShowModal}
        ></i>{" "}
      </Col>
    </Row>
  </div>
);
};

export default Licence;
