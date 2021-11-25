import Card from "react-bootstrap/Card"
import MyButton from "./MyButton"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import DashboardItem from "./DashboardItem"
import { useState } from "react"

const Image =
  "data:image/png;base64,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"
const HomeRightSidebar = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body className="ml-0 test-2">
          <Row className=" d-flex align-items-between">
            <Col xs="10">
              <h6 className="ml-2 mt-2  mb-4">
                <strong>Linkdln News</strong>
              </h6>
              {/* <h4 className="mr-5 mt-0  pb-2 pt-0">Linkdln News</h4> */}
              {/* <h4 className="pt-4 pl-3 text-muted">Skills &#38; endorsment </h4> */}
            </Col>
            <Col xs="2" className=" d-flex align-items-center ml-auto mb-0 ">
              <i class="bi bi-info-square-fill rightsideicon"></i>
            </Col>
          </Row>

          <Row>
            <Col className=" ml-0 test pl-3">
              <ul className=" pb-0 pl-4 ">
                <li>
                  <strong>IBM see quantrum computing future </strong>
                  <p className="text-muted p-0 ">
                    <small>1d ago. 2,430 readers</small>
                  </p>
                </li>
              </ul>
              <ul className="pb-0 pl-4">
                <li>
                  <strong>Amazon workers prepare global strike </strong>
                  <p className="text-muted pt-0 ">
                    <small>2d ago. 80,283 readers</small>
                  </p>
                </li>
              </ul>
              <ul className="pb-0 pl-4">
                <li>
                  <strong>Workers suffer 'headaches of hybrid' </strong>
                  <p className="text-muted pt-0 ">
                    <small>6d ago. 14359 readers</small>
                  </p>
                </li>
              </ul>
              <ul className="pb-0 pl-4">
                <li>
                  <strong>Bulb collapses ino adminstration</strong>
                  <p className="text-muted pt-0 ">
                    <small>21hr ago. 14359 readers</small>
                  </p>
                </li>
              </ul>
              <ul className="pb-0 pl-4">
                <li>
                  <strong>Apple shifting to 'DIY' repair model</strong>
                  <p className="text-muted pt-0 ">
                    <small>7d ago. 38,400 readers</small>
                  </p>
                </li>
              </ul>
              {/* add */}
              {!showMore && (
                <p className=" ">
                  {" "}
                  <button
                    className="outline button third2-btn-outline"
                    type="button"
                    onClick={() => setShowMore(true)}
                  >
                    Show More <i class="bi bi-caret-down "></i>
                  </button>
                </p>
              )}
              {showMore && (
                <>
                  <ul className="pb-0 pl-4">
                    <li>
                      <strong>Facebook introudce metaverse in October</strong>
                      <p className="text-muted pt-0 ">
                        <small>7d ago. 38,400 readers</small>
                      </p>
                    </li>
                  </ul>
                  <ul className="pb-0 pl-4">
                    <li>
                      <strong>Tesla Started Manufacutrig Smartphone</strong>
                      <p className="text-muted pt-0 ">
                        <small>7d ago. 38,400 readers</small>
                      </p>
                    </li>
                  </ul>
                  {/*  */}

                  <p className=" ">
                    {" "}
                    <button
                      className="outline button third2-btn-outline"
                      type="button"
                      onClick={() => setShowMore(false)}
                    >
                      Show Less <i class="bi bi-caret-up"></i>
                    </button>
                  </p>
                </>
              )}
              {/*  */}
            </Col>
          </Row>

          {/* </div> */}
        </Card.Body>
      </Card>
      {/*  */}
      <Card className="mb-3 mt-2 " style={{ width: "25rem" }}>
        <div className="d-flex align-items-center">
          <h6 className="ml-2 mt-2  mb-4">
            <strong>Promoted</strong>
          </h6>
          <i class="bi bi-three-dots ml-auto align-items-baseline mb-0"></i>
        </div>
        <div className="d-flex align-items-center">
          <Card.Img
            src={Image}
            className="sidebar-Home2-images ml-2 mt-0 d-flex align-items-baseline"
          />
          <Card.Body className="p-2 card-profile-title test3 p-0">
            <p className="mb-1 text-dark">Remote Developer Job</p>
            <small className="text-muted">
              Work Remotely For London top Tech comapines From 40k to 100k
            </small>
          </Card.Body>
        </div>

        {/*  */}

        <div className="d-flex align-items-center">
          <Card.Img
            src="https://image.similarpng.com/very-thumbnail/2021/08/Travel-agency-logo-design-template-on-transparent-background-PNG.png"
            className="sidebar-Home-images ml-2 mt-0 d-flex align-items-baseline"
          />
          <Card.Body className="p-2 card-profile-title">
            <p className="mb-1 text-dark">Environment Agency </p>
            <small className="text-muted">
              You will do vital purposfull work that infulences and protect
            </small>
          </Card.Body>
        </div>

        {/*  */}
        <div className="d-flex align-items-center">
          <Card.Img
            src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-doctors-safety-prevention-and-control-shield-png-image_5362335.jpg"
            className="sidebar-Home-images ml-2 mt-0 d-flex align-items-baseline"
          />
          <Card.Body className="p-2 card-profile-title">
            <p className="mb-1 text-dark">Puplic Safety antennas</p>
            <small className="text-muted">
              Explore panmormas high performing antennas
            </small>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default HomeRightSidebar
