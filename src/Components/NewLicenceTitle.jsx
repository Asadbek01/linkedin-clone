import {Col, Card} from 'react-bootstrap'

const NewLicenceTitle = (props)=>{
    return (
      <>
        <Col xs={10}>
          <Card className="mb-3 profile-cards">
            <div className="d-flex align-items-center">
              {/* <Card.Img src={image} className="sidebar-profile-images ml-2" /> */}
              <Card.Body className="p-2">
                <div className="d-flex justify-content-between">
                  <Card.Title className="mb-1 text-dark">
                    {props.description}
                  </Card.Title>
                </div>
                <Card.Text className="text-muted">{props.title}</Card.Text>
                <Card.Text className="text-muted">
                  {props.startDate} - {props.endDate}
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
      </>
    );
}

export default NewLicenceTitle;