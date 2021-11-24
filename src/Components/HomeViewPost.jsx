import { useState, useEffect } from 'react'
import SinglePost from './SinglePost'

const HomeViewPost = () => {

    const [posts, setPosts] = useState(null)
    const [randomNumber, setRandomNumber] = useState(0)

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts', {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setPosts(data)
                setRandomNumber(Math.floor(Math.random() * (data.length - 50)))
                console.log(data)
            } else {    
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line
    }, [])

    return (
        <>
        {
            posts && 
            posts.slice(randomNumber, randomNumber + 50).map(post => (
               <SinglePost post={post}/>
            ))
        }
        </>
    )
}

export default HomeViewPost