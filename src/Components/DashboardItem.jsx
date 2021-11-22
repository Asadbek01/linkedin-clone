import ListGroup from "react-bootstrap/ListGroup"

const DashboardItem = ({ icon, title, subtitle }) => {
    return (
        <ListGroup.Item className='w-100'>
            <div className="d-flex">
                <i className={icon}></i>
                <div className="d-flex flex-column">
                    <h6 className='mb-1'>{title}</h6>
                    <p className='mb-1 text-muted'>{subtitle} </p>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export default DashboardItem