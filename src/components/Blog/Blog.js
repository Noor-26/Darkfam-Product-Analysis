import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div >
            <h1 className=" text-center my-3">Blogs</h1>
            <div className="blog-container mt-3">

            <article className="blog p-3 mx-2">
            <h2 className="text-center">What is context API</h2>
            <p>usually when we need to pass a property to a upper level component ,the property needs to be passed by one level to another  level through props. In an application with lot of nested components, it is quite difficult . Context API helps to directly send an information from a parent component to a child component at any level with ease. </p>
            </article>
           <article className="blog p-3 mx-2">
               <h2 className="text-center">what is semantic tag </h2>
               <p>Before HTML5 web developers used to use class and id in there divs to show there purposes,Instead of header tag they were using class header for showing the header. There are many sementic tags for many parts in the websites. in HTML5 tags like header , aside, nav,sections,article included so that one can simply know what the tags purpose is. though many still used the old method of using class or id . </p>
           </article>
            </div>
        
        </div>
    );
};

export default Blog;