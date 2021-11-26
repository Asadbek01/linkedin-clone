import { Card, ListGroup } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import Notifcs from "./Notifcs";

const NetworkLeftDownSidebar = () => {
  const [show, setShow] = useState(true);

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
            <Notifcs />
            <div className='d-flex align-content-center'>
                <div><img
              src="https://via.placeholder.com/150"
              alt=""
                />
            </div>
            <div>
                <img
              src="https://via.placeholder.com/150"
              alt=""
                />
            </div>
            

            </div>
            
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default NetworkLeftDownSidebar;
