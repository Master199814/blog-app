import { useEffect, useState } from "react";
// import axios from 'axios';
import './App.css'
import  Home from './Home'
export default function Nav()
{
    const [headlines,setHeadlines]=useState([]);
    useEffect(() => {
        getData()
        setInterval(()=>
        {
            getData();
        },60000)
      }, []);

      const sendRequest = (method, url) => {

        const promise = new Promise((resolve, reject) => {
    
        const xhr = new XMLHttpRequest();
    
        xhr.open(method, url);
    
    
        xhr.responseType = 'json';
    
    
        xhr.onload = () => {
    
            if (xhr.status >= 400) {
    
                reject(xhr.response);
    
            }
    
            resolve(xhr.response);
    
        };
    
    
            xhr.send();
    
        });
    
        return promise;
    
    };
    
    
    const getData = async () => {
    
        try {
    
            const res = await sendRequest('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ac81fc76748f4cac914ba7f6e85a462d');
    
            setHeadlines(res.articles.slice(0,5))
    
        } catch (err) {
    
            console.log(err);
    
        }
    
    };
    const handleclick=()=>
    {
        window.location.href="/";
    }
    

    return (

        <div className="article-section">
            <button onClick={handleclick}>Home Page</button>
           {headlines.map((headline,index) =>(
            <span className="articles"key={index}>
                <h1>{headline.title}</h1> 
               <a href={headline.url}><button>click to know More</button></a>
                <img src={headline.urlToImage} alt="image"/>
            </span>
           ))}
        </div>
    )


}
