import {Card,ListGroup,List} from 'react-bootstrap';
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs";
import {useState} from 'react'



const NetworkLeftSidebar = () => {
  const [show, setShow] = useState(false)

    return (
      <>
        
        <Card className="mt-2">
          <Card.Body>
            <Card.Title>Manage my network</Card.Title>
            <ListGroup>
              <div className="d-flex">
                <BsPeopleFill />
                <p className="text_muted pl-2">Connections</p>{" "}
                <p className="text_muted pl-2" style={{ marginLeft: "auto" }}>
                  280
                </p>
              </div>
              {/* show more section */}
              {/* ========================== */}
            </ListGroup>

            {!show && (
              <p className=" text-center">
                {" "}
                <button
                  className="outline button Showmore"
                  type="button"
                  onClick={() => setShow(true)}
                >
                  Show More
                  <i class="bi bi-caret-down "></i>
                </button>
              </p>
            )}

            {show && (
              <>
                <ListGroup>
                  <div className="d-flex">
                    <BsPeopleFill />
                    <p className="text_muted pl-2">Contacts</p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto" }}
                    >
                      280
                    </p>
                  </div>
                  <div className="d-flex">
                    <BsPeopleFill />
                    <p className="text_muted pl-2">People I Follow</p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto" }}
                    >
                      64
                    </p>
                  </div>
                  <div className="d-flex">
                    <BsPeopleFill />
                    <p className="text_muted pl-2">Groups</p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto" }}
                    >
                      12
                    </p>
                  </div>
                  <div className="d-flex">
                    <BsPeopleFill />
                    <p className="text_muted pl-2">Events</p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto" }}
                    >
                      10
                    </p>
                  </div>
                  <div className="d-flex mb-5">
                    <BsPeopleFill />
                    <p className="text_muted pl-2">Pages</p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto" }}
                    >
                      5
                    </p>
                  </div>
                </ListGroup>
                <p className=" text-center">
                  <button
                    className="outline button Showless"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Show Less <i class="bi bi-caret-up"></i>
                  </button>
                </p>
              </>
            )}
          </Card.Body>
        </Card>
      </>
    );
}

export default NetworkLeftSidebar