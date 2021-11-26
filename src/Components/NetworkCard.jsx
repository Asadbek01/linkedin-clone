import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Container,
  Input,
} from "react-bootstrap"
import MyButton from "./MyButton"
import { Link } from "react-router-dom"

const NetworkCard = ({ _id, image, name, surname, title }) => {
  return (
    <Link to={`/profile/${_id}`}>
      <Card key={_id} className="mb-3  ">
        <i class="bi bi-x-circle-fill text-dark ml-auto"></i>
        <Card.Header className="text-center" style={{ height: "3rem" }}>
          <Card.Img src={image} className="profile-image-posts2 ml-2" />
        </Card.Header>
        <Card.Body className="p-2 mt-5 card-profile-title text-center">
          <Card.Title className="mb-3 text-dark">
            <small className="mt-0 text-center">
              <strong>
                {name} {surname}
              </strong>{" "}
            </small>
          </Card.Title>
          <Card.Text className="text-muted">
            <small>{title}</small>
          </Card.Text>
        </Card.Body>

        <MyButton type="outline button third-btn-outline" text="Connect" />
      </Card>
    </Link>
  )
}
export default NetworkCard
