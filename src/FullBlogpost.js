
export default function FullBlogpost({post})
{
    return (

        <div>
        <h2>{post.title}</h2>
            <p>Published on: {post.date}</p>
             <p>Written by: {post.author}</p>
            <img src={post.image} alt={post.title} />
               <p>{post.body}</p>

         </div> 
    )

}