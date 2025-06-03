import React from 'react';
import { useParams } from 'react-router-dom';
import Blogdata from '../../assets/data/blogs.json';
import SingleblogHero from '../../component/blogpage/SingleblogHero';
import SingleBlogBody from './SingleBlogBody';

function SingleBlog() {
    const { id } = useParams(); // 👈 get id from URL
    const blog = Blogdata.find(item => item.id === Number(id));


    if (!blog) return <p className="text-center my-5">Blog not found</p>;

    return (
        <div>
            <SingleblogHero blog={blog} />
            <SingleBlogBody blog={blog} />
        </div>
    );
}

export default SingleBlog;
