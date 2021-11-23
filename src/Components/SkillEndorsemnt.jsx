import ListGroup from "react-bootstrap/ListGroup"
import DashboardItem from "./DashboardItem"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Button } from "react-bootstrap"

const SkillEndorsemnt = () => {
  return (
    // <div className="profile-sub-section mt-4 ">
    //   <h4 className="pt-4 pl-3">Skill and Endorsment</h4>

    //   <ListGroup className="w-100 mt-4 profile-sub-section ">
    //     <DashboardItem
    //       title="Team Work .6"
    //       subtitle="Diego Torres and 5 connections have given endorsments for this skill"
    //     />
    //     <DashboardItem
    //       title="Managment .4"
    //       subtitle="Diego Torres and 3 connections, has given endorsments for this skill "
    //     />
    //     <DashboardItem
    //       title="Leadership .4"
    //       subtitle="Diego Torres and 3 connections, has given endorsments for this skill"
    //     />
    //   </ListGroup>
    // </div>
    <div className="profile-sub-section mt-4">
      <Row>
        <Col xs="8">
          <h4 className="pt-4 pl-3 text-muted">Skills &#38; endorsment </h4>
        </Col>
        <Col xs="3" className="mt-4 mr-auto ">
          <p>Add a new Skill</p>
        </Col>
        <Col xs="1" className="mt-4 ">
          <i className="bi bi-pencil p-2  mt-3"></i>
        </Col>
      </Row>
      <Row className="p-3">
        <Col>
          <Button variant="outline-primary button second-btn-outline mr-2">
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
          <h6 className="text-muted text-center">
            Show More<i class="bi bi-caret-down pl-2"></i>
            <span className="text-muted text-center"></span>
          </h6>
        </Col>
      </Row>
    </div>
  )
}
export default SkillEndorsemnt
