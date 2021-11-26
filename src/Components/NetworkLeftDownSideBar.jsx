import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const NetworkLeftDownSidebar = ({_id, image, name, surname}) => {
  return (
    <>
      <Card className="mt-2">
        <Card.Body>
          <div style={{ textAlign: "right" }}>
            <p>
              Ad <BiDotsHorizontalRounded />
            </p>
          </div>

          <ListGroup>
            <div className="d-flex align-baseline" style={{ fontSize: "16px" }}>
              <p
                className="text_muted pl-2"
                style={{ fontSize: "12px", textAlign: "center" }}
              >
                Hitachi brings you the updates as a Climate Change Innovator
              </p>{" "}
            </div>
            <div className="d-flex justify-content-center">
              <Link to={`/profile/${_id}`}>
                <ListGroup variant="flush" key={_id} className="">
                  <img src={image} className="list_group ml-2" alt="" />
                  <span className="span">
                    {name} {surname}
                  </span>
                </ListGroup>
              </Link>

              <div className="ml-3">
                <img src="/logo192.png" height='80px' alt="" />
              </div>
            </div>
            <h6 style={{ textAlign: "center", marginTop: "10px" }}>
              Technology can do better for the Environment
            </h6>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default NetworkLeftDownSidebar;
