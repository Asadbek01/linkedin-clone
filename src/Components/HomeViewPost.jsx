import { useState, useEffect } from 'react'
import SinglePost from './SinglePost'
import SkeletonPost from './SkeletonPost'

const HomeViewPost = () => {

    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
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
                setRandomNumber(Math.floor(Math.random() * (data.length - 100)))
                setIsLoading(false)
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
            isLoading && 
            [1, 2, 3, 4].map(number => <SkeletonPost /> )
        }
        {
            posts && 
            posts.slice(posts.length - 50, posts.length).map(post => <SinglePost post={post} /> )
        }
        </>
    )
}

export default HomeViewPost