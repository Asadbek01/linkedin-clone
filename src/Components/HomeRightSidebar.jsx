import Card from "react-bootstrap/Card"
import MyButton from "./MyButton"
const Image =
  "data:image/png;base64,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"
const HomeRightSidebar = () => {
  return (
    <Card className="mb-3 profile-cards">
      <h5>Add to your feed</h5>
      <div className="d-flex align-items-center">
        <Card.Img
          src={Image}
          className="sidebar-Home-images ml-2 mt-0 d-flex align-items-baseline"
        />
        <Card.Body className="p-2 card-profile-title">
          <Card.Title className="mb-1 text-dark">Linkedin</Card.Title>
          <Card.Text className="text-muted">Company.Internet</Card.Text>
        </Card.Body>
      </div>
      <div className="ml-5">
        <button className="button second-btn-outline mr-2">+ Follow</button>
      </div>
    </Card>
  )
}

export default HomeRightSidebar
