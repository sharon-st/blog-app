import React, { useEffect, useState } from "react"
import CreatePost from "./CreatePost"

function EditPost({ match }) {
    const id = match.params.id
    const [post, setPost] = useState([])
   console.log(post)
    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        const data1 = await fetch('http://localhost:9000/testAPI')
        const Items = await data1.json()
         console.log(Items)
        setPost(Items[id - 1])
    }

    return (

 <div>
            {/* <h1>{post.Title} </h1>
            <div dangerouslySetInnerHTML={{ __html: post.Description}}></div> */}
 <CreatePost id={id} Title={post.Title} data={post.Description} edit={true}/> 


        </div>
    )

 
}
export default EditPost