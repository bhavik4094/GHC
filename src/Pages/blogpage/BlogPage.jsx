import React from 'react';
import BlogHero from '../../component/blogpage/BlogHero'; // Fixed folder name
// import BlogBody from '../../components/blogpage/BlogBody'; // Fixed folder name
import BlogBody from '../../component/blogpage/BlogBody'; // Fixed folder name

const heroCardData = [
    {
        title: 'Check out our blog',
    }
];

// Remove duplicates based on title


// Remove duplicates based on title


function BlogPage() {
    return (
        <div>
            {heroCardData.map((hero) => (
                <BlogHero
                    key={hero.title}
                    hero_title={hero.title}
                />
            ))}

            <BlogBody />
        </div>
    );
}

export default BlogPage;
