import {Card,ListGroup} from 'react-bootstrap';
import {
  BsPeopleFill,
  BsCalendarDate,
  BsJournalRichtext,
} from "react-icons/bs";
import {useState} from 'react'
import { TiContacts } from "react-icons/ti";
import { MdGroups } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";


const NetworkLeftSidebar = () => {
  const [show, setShow] = useState(true)

    return (
      <>
        <Card className="mt-2">
          <Card.Body>
            <Card.Title>Manage my network</Card.Title>
            <ListGroup>
              <div
                className="d-flex align-baseline"
                style={{ fontSize: "16px" }}
              >
                <BsPeopleFill style={{ fontSize: "25px" }} />
                <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                  Connections
                </p>{" "}
                <p
                  className="text_muted pl-2"
                  style={{ marginLeft: "auto", fontSize: "16px" }}
                >
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
                  style={{ fontSize: "16px" }}
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
                  <div className="d-flex align-baseline">
                    <TiContacts style={{ fontSize: "30px" }} />
                    <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                      Contacts
                    </p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto", fontSize: "16px" }}
                    >
                      280
                    </p>
                  </div>
                  <div className="d-flex align-baseline">
                    <IoChatbubbleOutline style={{ fontSize: "25px" }} />
                    <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                      People I Follow
                    </p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto", fontSize: "16px" }}
                    >
                      64
                    </p>
                  </div>
                  <div className="d-flex align-baseline">
                    <MdGroups style={{ fontSize: "25px" }} />
                    <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                      Groups
                    </p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto", fontSize: "16px" }}
                    >
                      12
                    </p>
                  </div>
                  <div className="d-flex align-baseline">
                    <BsCalendarDate style={{ fontSize: "25px" }} />
                    <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                      Events
                    </p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto", fontSize: "16px" }}
                    >
                      10
                    </p>
                  </div>
                  <div className="d-flex align-baseline">
                    <BsJournalRichtext style={{ fontSize: "25px" }} />
                    <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                      Pages
                    </p>
                    <p
                      className="text_muted pl-2"
                      style={{ marginLeft: "auto", fontSize: "16px" }}
                    >
                      5
                    </p>
                  </div>
                  <div className="d-flex align-baseline">
                    <BiNews style={{ fontSize: "25px" }} />
                    <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                      Newsletters
                    </p>
                  </div>
                  <div className="d-flex mb-5 align-baseline">
                    <FaHashtag style={{ fontSize: "25px" }} />
                    <p className="text_muted pl-2" style={{ fontSize: "16px" }}>
                      Hashtags
                    </p>
                  </div>
                </ListGroup>
                <p className=" text-center">
                  <button
                    className="outline button Showless"
                    type="button"
                    onClick={() => setShow(false)}
                    style={{ fontSize: "16px" }}
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