import { ListGroup } from "react-bootstrap"

const SingleSearchResult = ({ data }) => {
    return (
        <ListGroup.Item>
            {data.name}
        </ListGroup.Item>
    )
}

export default SingleSearchResult