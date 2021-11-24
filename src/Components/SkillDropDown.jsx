import ListGroup from "react-bootstrap/ListGroup"
import DashboardItem from "./DashboardItem"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Button } from "react-bootstrap"
import { useState } from "react"

const SkillDropDown = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="profile-sub-section mt-4">
      <Row className="align-items-center">
        <Col xs="8">
          <h4 className="pt-4 pl-3 text-muted">Skills &#38; endorsment </h4>
        </Col>
        <Col xs="4" className="mt-4 d-flex align-items-center ">
          <p className="mb-0 ">Add a new Skill</p>
          <i className="bi bi-pencil p-2  mt-0 ml-2 "></i>
        </Col>
        {/* <Col xs="1" className="mt-4  ">
     
        </Col> */}
      </Row>
      <Row className="p-3">
        <Col>
          <Button variant="outline button third-btn-outline mr-2">
            Take Skill Quiz
          </Button>{" "}
        </Col>
      </Row>
      <Row className="p-3 ">
        <Col>
          <h5>
            Team Work <span className="text-muted">.6</span>
          </h5>
          <p>
            <strong> Diego Torres and 3 connections</strong> have given
            endorsments for this skill
          </p>
          <hr />
          <h5>
            Mangement <span className="text-muted">.4</span>
          </h5>
          <p>
            <strong> Diego Torres and 3 connections</strong> have given
            endorsments for this skill
          </p>
          <hr />
          <h5>
            Leadership <span className="text-muted">.4</span>
          </h5>
          <p>
            <strong> Diego Torres and 5 connections</strong> have given
            endorsments for this skill
          </p>
          <hr />
          {/* <h6 className="text-muted text-center">
            Show More<i class="bi bi-caret-down pl-2"></i>
            <span className="text-muted text-center"></span>
          </h6> */}

          {!showMore && (
            <p className=" text-center">
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
              <h5>
                Leadership <span className="text-muted">.4</span>
              </h5>
              <p>
                <strong> Diego Torres and 5 connections</strong> have given
                endorsments for this skill
              </p>
              {/*  */}
              <h5>
                Leadership <span className="text-muted">.4</span>
              </h5>
              <p>
                <strong> Diego Torres and 5 connections</strong> have given
                endorsments for this skill
              </p>
              {/*  */}

              <p className=" text-center">
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
        </Col>
      </Row>
    </div>
  )
}
export default SkillDropDown
