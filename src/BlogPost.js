import {useState,useEffect} from 'react';
import './App.css'
import FullBlogpost from './FullBlogpost';

export default function BlogPost(){
  const [posts,setPosts]=useState([])
  const [currentpost,setCurrentPost]=useState();
  useEffect(() => {
    loadDoc()
  }, []);
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const posts = Array.from(this.responseXML.getElementsByTagName("post")).map(
          (post) => ({
            id: post.getElementsByTagName("id")[0].textContent,
            title: post.getElementsByTagName("title")[0].textContent,
            date: post.getElementsByTagName("date")[0].textContent,
            author: post.getElementsByTagName("author")[0].textContent,
            summary: post.getElementsByTagName("summary")[0].textContent,
            image: post.getElementsByTagName("image")[0].textContent,
            link: post.getElementsByTagName("a")[0].textContent,
            body:post.getElementsByTagName("body")[0].textContent
          })
        );
        setPosts(posts);
  
      }
    };
    //check the local ran xml url here 
    xhttp.open("GET", "http://127.0.0.1:5500/src/posts.xml", true);
    xhttp.send();
  
  } 
  const handleBlog =(post) =>
  {
    setCurrentPost(post);
  }



  return(
 
  
      <div className='blog-posts'>
        {currentpost?(
          <div>
            <FullBlogpost post={currentpost}/>
            </div>
        ):(
          <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2 onClick={() =>handleBlog(post)}>{post.title}</h2>
              <p>Published on: {post.date}</p>
              <p>Written by: {post.author}</p>
              <img src={post.image} alt={post.title} />
              <p>{post.summary}</p>
            </div>
          ))}
          </div>
        )}
      </div>


   
   
  )
}
