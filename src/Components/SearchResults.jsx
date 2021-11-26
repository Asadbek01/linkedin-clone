import { ListGroup } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleSearchResult from "./SingleSearchResults"

const SearchResults = ({ heading, type }) => {

    const { searchQuery } = useParams()
    const [data, setData] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/${type}`, {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const body = await response.json()
                setData(body)
                console.log(body)
            } else {
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
        //eslint-disable-next-line
    }, [])

    return (
        <div className="profile-sub-section p-3 my-2">
            <h2 className=''>{heading}</h2>
            <ListGroup>
                {
                    data && data.slice(0, 3).map(d => <SingleSearchResult data={d} /> )
                }
            </ListGroup>
        </div>
    )
}

export default SearchResults