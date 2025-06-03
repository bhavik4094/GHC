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
const blogCardDataRaw = [
    {
        date: "Jun 02, 2025",
        title: "Crafting Timeless Concrete Designs: Green Hammer's Commitment to Lasting Elegance",
        description: "In the ever-evolving world of construction and design, concrete stands as a timeless material renowned for its durability and versatility. At Green Hammer Concrete, we are dedicated to crafting concrete designs…",
        url: "https://greenhammerconcrete.com/blog/blog-innovative-concrete-for-modern-architecture"
    },
    {
        date: "May 25, 2025",
        title: "Eco-Friendly Foundations: Green Hammer's Approach to Sustainable Concrete Construction",
        description: "When it comes to construction, sustainability is becoming a key focus for many businesses and customers. As a leader in the concrete service industry, Green Hammer Concrete is committed to…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "May 21, 2025",
        title: "Enhancing Residential Spaces: Green Hammer's Expertise in Custom Concrete Solutions",
        description: "Transforming your residential space into a modern and stylish haven can be as simple as integrating the right type of concrete solutions. At Green Hammer Concrete, we specialize in providing custom co…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "May 15, 2025",
        title: "Innovative Concrete for Modern Architecture: Explore Green Hammer's Advanced Techniques",
        description: "In today's evolving world of architecture, the demand for innovative and sustainable building materials is at an all-time high. Concrete, a fundamental element in construction, has seen remarkable ad…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "May 07, 2025",
        title: "Sustainable Innovations: Green Hammer's Approach to Environmentally Friendly Concrete",
        description: "In an era where sustainability is more than just a buzzword, industries are rapidly adapting to environmentally friendly practices. The construction sector, notably the use of concrete, is no excepti…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 27, 2025",
        title: "Green Hammer's Guide to Eco-Conscious Concrete Choices for Modern Construction",
        description: "In today's world, sustainability is more than just a buzzword; it's a necessity, especially in construction where choices can significantly impact the environment. Green Hammer Concrete understands t…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 26, 2025",
        title: "The Science of Solidity: Understanding Concrete Performance with Green Hammer",
        description: "When it comes to building anything from driveways to skyscrapers, the unyielding backbone of construction is concrete. At Green Hammer Concrete, we've spent years perfecting the craft of blending…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 05, 2025",
        title: "Concrete Excellence: Tailoring Solutions for Commercial Spaces at Green Hammer",
        description: "As businesses evolve and grow, the importance of robust infrastructure becomes increasingly clear, particularly in commercial spaces. For property managers and business owners, selecting xyz…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 01, 2025",
        title: "Sculpting Urban Strength: How Green Hammer Concrete Enhances City Infrastructure",
        description: "In the heart of every thriving city lies a robust infrastructure designed to support everyday life and future growth. As urban areas continue to expand, the need for sturdy, reliable construction sol…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Mar 31, 2025",
        title: "Weathering the Elements: Green Hammer Concrete's Approach to Seasonal Durability",
        description: "In the world of construction, concrete stands as the foundational backbone of countless structures. However, surviving the test of time and the challenges posed by different seasons requires more tha…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Mar 29, 2025",
        title: "Sculpting Urban Beauty: The Artistic Side of Concrete Solutions by Green Hammer",
        description: "In the bustling landscapes of our cities, concrete is often seen as a utilitarian necessity. However, at Green Hammer Concrete, we envision concrete as much more than just a building material. We…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Mar 12, 2025",
        title: "Foundation to Finish: A Comprehensive Look at Green Hammer's Construction Expertise",
        description: "In the world of construction, the journey from foundation to finish involves a series of meticulous steps that require expertise, precision, and innovation. At Green Hammer Concrete, our commitment t…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Mar 07, 2025",
        title: "The Future of Concrete: Advanced Techniques and Materials at Green Hammer",
        description: "As the demand for sustainable and efficient building materials rises, the concrete industry is undergoing a transformation. At the forefront of this evolution is Green Hammer Concrete, renowned for i……",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Feb 26, 2025",
        title: "Enhancing Urban Landscapes: The Role of Green Hammer Concrete in City Revitalization",
        description: "Urban landscapes are constantly evolving, and as cities grow and change, the need for sustainable, attractive, and functional concrete solutions becomes more pressing. Green Hammer Concrete plays…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Feb 18, 2025",
        title: "Innovative Green Solutions for Sustainable Concrete Projects by Green Hammer",
        description: "In today's world, sustainability isn't just a trend—it's a necessity. For the forward-thinking clientele of Green Hammer Concrete, sustainability means seamlessly integrating eco-friendly practices i…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Feb 17, 2025",
        title: "Seamless Construction: How Green Hammer Concrete Blends Functionality with Aesthetics",
        description: "In the world of construction, concrete plays a pivotal role—providing the necessary foundation and structure to buildings and infrastructures. However, beyond functionality, aesthetics have…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Feb 14, 2025",
        title: "From Blueprint to Reality: The Journey of Concrete Implementation at Green Hammer",
        description: "Transforming architectural blueprints into tangible structures is a process as fascinating as it is complex. At Green Hammer Concrete, we pride ourselves on crafting spaces that not only meet but…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Jan 14, 2025",
        title: "Resilient Concrete Solutions for Modern Infrastructure with Green Hammer",
        description: "In today's world, creating resilient infrastructure is more crucial than ever. As cities expand and more structures are needed, choosing the right materials becomes essential to ensure durability…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Jan 12, 2025",
        title: "Achieving Flawless Concrete Surfaces: Expert Tips from Green Hammer Concrete",
        description: "Concrete surfaces are a crucial aspect of modern construction, offering durability and sustainability for both residential and commercial projects. Achieving a flawless finish not only enhances aesth…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Jan 11, 2025",
        title: "Unlocking the Beauty of Decorative Concrete: Designs by Green Hammer",
        description: "As the landscape of construction and home improvement evolves, decorative concrete has emerged as a versatile and aesthetically pleasing solution for both residential and commercial spaces. At the…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Jan 04, 2025",
        title: "Achieving Precision and Strength: Behind the Scenes of Green Hammer's Concrete Innovation",
        description: "IWhen it comes to creating robust and reliable structures, precision and strength in concrete are paramount. At Green Hammer Concrete, innovation and expertise blend seamlessly to ensure…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 30, 2024",
        title: "Innovative Approaches to Sustainable Concrete Rehabilitation by Green Hammer",
        description: "In today's world, where sustainability is becoming an ever-growing concern, businesses are seeking innovative approaches to reduce their environmental impact. One area where sustainability is…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 27, 2024",
        title: "Custom Concrete Creations: Bringing Unique Architectural Visions to Life with Green Hammer",
        description: "In the world of modern architecture, concrete is no longer considered just a functional building material. It has emerged as a medium for creativity, offering endless possibilities for aesthetic…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 18, 2024",
        title: "The Benefits of Choosing Green Hammer Concrete for Your Next Residential Project",
        description: "IAre you considering starting a new residential project? The choice of a concrete service provider can make a significant difference in the quality and durability of your construction. In this…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 18, 2024",
        title: "The Green Hammer Approach: Expert Concrete Services for Every Project",
        description: "Concrete is the cornerstone of modern construction, and choosing the right provider for your projects can make all the difference. Green Hammer Concrete has long been recognized for delivering high-q…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 11, 2024",
        title: "The Impact of Weather on Concrete Performance: Expert Insights from Green Hammer",
        description: "Understanding the impact of weather on concrete performance is crucial for homeowners and builders alike. Weather conditions can significantly influence concrete's strength, durability, and…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 11, 2024",
        title: "Mastering the Craft: Unveiling the Secrets of Superior Concrete Finish with Green Hammer",
        description: "Discovering the secrets to a superior concrete finish isn't just about mixing the right ingredients; it's an art form honed by the experts at Green Hammer Concrete. For customers seeking durable, aes…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 10, 2024",
        title: "Enhancing Structural Integrity: Innovative Techniques by Green Hammer Concrete",
        description: "DIn today's construction world, ensuring the longevity and stability of buildings and structures is more important than ever. At Green Hammer Concrete, we specialize in enhancing structural integrity…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Dec 06, 2024",
        title: "Exploring the Versatility of Concrete: Unique Applications with Green Hammer",
        description: "Concrete is often celebrated for its durability and strength, but at Green Hammer Concrete, we know there's so much more to this versatile material. Whether you're a homeowner considering…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Nov 28, 2024",
        title: "Green Hammer's Role in the Evolution of Sustainable Urban Landscapes",
        description: "Green Hammer Concrete has been at the forefront of the evolution of sustainable urban landscapes, playing a crucial role in transforming traditional concrete services to eco-friendly and green practi…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Nov 19, 2024",
        title: "Designing Impressive Interiors: How Green Hammer Concrete Can Transform Your Space",
        description: "Designing impressive interiors is an exciting and transformative process that can completely change the look and feel of your space. Whether you are a homeowner looking to enhance your living…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Nov 17, 2024",
        title: "Building the Future: How Green Hammer Concrete Innovates with Cutting-Edge Technology",
        description: "Green Hammer Concrete is committed to building the future, one project at a time. With a focus on innovation and cutting-edge technology, we are constantly pushing the boundaries of what is possible…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Nov 11, 2024",
        title: "From Driveways to Walkways: Enhancing Curb Appeal with Green Hammer Concrete",
        description: "A beautifully designed driveway or walkway can make a significant impact on your home's curb appeal. At Green Hammer Concrete, we specialize in creating stunning concrete surfaces that not only enhan…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Nov 07, 2024",
        title: "Crafting Stunning Interiors: The Role of Concrete in Modern Design with Green Hammer",
        description: "Crafting Stunning Interiors: The Role of Concrete in Modern Design with Green HammerWhen it comes to designing a modern and stylish interior, the material choices play a crucial role in achieving…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Oct 31, 2024",
        title: "Revolutionizing Urban Spaces: Green Hammer's Community Projects",
        description: "Urban spaces play a crucial role in shaping the quality of life in a city. From parks to public squares, these spaces provide opportunities for people to come together, engage in activities, and building…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Oct 24, 2024",
        title: "Innovative Concrete Design Trends for Modern Homes with Green Hammer",
        description: "Are you looking to update the look of your modern home with some innovative concrete design trends? Look no further than Green Hammer Concrete! As a leading concrete service company, we…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Jun 27, 2024",
        title: "Green Hammer's 70x70 Addition at Grace Bible Church",
        description: "At Green Hammer Concrete, we take pride in our ability to handle projects of all sizes with expertise and precision.Our recent project involved a 70x70 addition at Grace Bible Church. To ensure the c…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Jun 25, 2024",
        title: "The Story Behind Green Hammer Concrete",
        description: "A few years ago, Adam had an old '94 Chevy pickup truck that became an integral part of our early projects. With no other names in mind, the truck was dubbed the 'Green Hammer' and the…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "May 02, 2024",
        title: "Transform Your Outdoor Space with Green Hammer Concrete's Expert Services",
        description: "Transform Your Outdoor Space with Green Hammer Concrete's Expert Services Are you looking to enhance the beauty and functionality of your outdoor space? Look no further than Green Hammer Concrete,…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "May 02, 2024",
        title: "Creative Outdoor Projects Delivered by Green Hammer's Expert Concrete Services",
        description: "Welcome to Green Hammer Concrete, where our expert concrete services are here to help you bring your creative outdoor projects to life! From driveways to patios, walkways to retaining walls, our…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 22, 2024",
        title: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer Concrete",
        description: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer ConcreteWhen it comes to transforming your outdoor spaces, there is no better partner than Green Hammer Concrete.…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 22, 2024",
        title: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer Concrete",
        description: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer ConcreteWhen it comes to transforming your outdoor spaces, there is no better partner than Green Hammer Concrete.…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 22, 2024",
        title: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer Concrete",
        description: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer ConcreteWhen it comes to transforming your outdoor spaces, there is no better partner than Green Hammer Concrete.…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 22, 2024",
        title: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer Concrete",
        description: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer ConcreteWhen it comes to transforming your outdoor spaces, there is no better partner than Green Hammer Concrete.…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 22, 2024",
        title: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer Concrete",
        description: "Unlocking the Potential of Your Outdoor Spaces with Green Hammer ConcreteWhen it comes to transforming your outdoor spaces, there is no better partner than Green Hammer Concrete.…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 22, 2024",
        title: "The Ultimate Guide to Sustainable Concrete Solutions from Green Hammer Concrete",
        description: "Green Hammer Concrete offers sustainable concrete solutions that are not only environmentally friendly but also durable and aesthetically pleasing. As a customer of Green Hammer Concrete, you have ac…",
        url: "https://greenhammerconcrete.com/sustainable-innovations"
    },
    {
        date: "Apr 20, 2024",
        title: "The Ultimate Guide to Durable, Stylish Concrete Solutions by Green Hammer",
        description: "Are you looking for durable and stylish concrete solutions for your next project? Look no further than Green Hammer Concrete! With years of experience in the industry, we pride ourselves on deliverin…",
        url: "https://greenhammerconcrete.com/blog-the-ultimate-guide-to-durable-35"
    },
    {
        date: "Apr 19, 2024",
        title: "Eco-Friendly and Durable: Why Green Hammer Concrete is the Future of Construction",
        description: "With the increasing focus on sustainable living and environmentally friendly practices, it is no surprise that the construction industry is also embracing the green movement. Green Hammer Concrete is…",
        url: "https://greenhammerconcrete.com/blog-eco-friendly-and-durable-why-green"
    },
    {
        date: "Apr 18, 2024",
        title: "Mastering Concrete: Tips and Tricks from the Pros at Green Hammer Concrete",
        description: "Concrete is a versatile and durable building material that has been used for centuries in construction. Whether you are a homeowner looking to do some DIY projects or a professional contractor workin…",
        url: "https://greenhammerconcrete.com/blog-mastering-concrete-tips-and-tricks"
    },
    {
        date: "Apr 17, 2024",
        title: "Maximizing Durability: Best Practices in Concrete Installation",
        description: "As a customer of Green Hammer Concrete, it is important to understand the best practices in concrete installation in order to maximize durability and longevity of your concrete structures. Whether yo…",
        url: "https://greenhammerconcrete.com/blog-maximizing-durability-best-practices-in-2"
    },
    {
        date: "Apr 17, 2024",
        title: "Transform Your Patio: Innovative Design Ideas from Green Hammer Concrete",
        description: "Are you looking to transform your patio into a beautiful and functional outdoor space? Look no further than Green Hammer Concrete! We are a leading concrete service company specializing in innovative…",
        url: "https://greenhammerconcrete.com/blog-transform-your-patio-innovative-design"
    },
    {
        date: "Apr 13, 2024",
        title: "Eco-Friendly Concrete Solutions: Paving the Way for a Greener Future",
        description: "Concrete has long been a staple in the construction industry, used for a variety of applications such as building foundations, driveways, and sidewalks. However, the production of traditional concret…",
        url: "https://greenhammerconcrete.com/blog-eco-friendly-concrete-solutions-paving-the"
    },
    {
        date: "Apr 11, 2024",
        title: "From Foundations to Finishes: The Comprehensive Guide to Concrete Services with Green Hammer",
        description: "Are you in need of top-quality concrete services for your upcoming construction project? Look no further than Green Hammer Concrete! With years of experience and a dedication to excellence, we offer …",
        url: "https://greenhammerconcrete.com/blog-from-foundations-to-finishes-the-5"
    },
    {
        date: "Apr 10, 2024",
        title: "Green Hammer Concrete: Transforming Your Property with High-Quality Craftsmanship",
        description: "Are you looking to transform your property with high-quality craftsmanship? Look no further than Green Hammer Concrete! With years of experience in the concrete industry, we are dedicated to providin…",
        url: "https://greenhammerconcrete.com/blog-green-hammer-concrete-transforming-your"
    },
    {
        date: "Apr 05, 2024",
        title: "Transforming Spaces: Innovative Concrete Solutions by Green Hammer",
        description: "Transforming Spaces: Innovative Concrete Solutions by Green HammerAt Green Hammer Concrete, we understand the importance of transforming spaces and creating functional, visually stunning concrete fea…",
        url: "https://greenhammerconcrete.com/blog-transforming-spaces-innovative-concrete-solutions-2"
    },
    {
        date: "Apr 01, 2024",
        title: "Unlocking the Full Potential of Your Outdoor Spaces with Green Hammer Concrete Services",
        description: "Unlocking the Full Potential of Your Outdoor Spaces with Green Hammer Concrete ServicesAs the warmer weather begins to creep in, it's time to start thinking about all the ways you can enhance your ou…",
        url: "https://greenhammerconcrete.com/blog-unlocking-the-full-potential-of-8"
    },
    {
        date: "Apr 01, 2024",
        title: "The Art of Concrete: Decorative Techniques from Green Hammer Pros",
        description: "Concrete is often thought of as a mundane building material, but with the right techniques and creativity, it can be transformed into a work of art. At Green Hammer Concrete, we specialize in decorat…",
        url: "https://greenhammerconcrete.com/blog-the-art-of-concrete-decorative"
    },
    {
        date: "Jan 21, 2024",
        title: "The Purpose of Control Joints for Concrete Slabs",
        description: "Control joints are an essential component of concrete slabs, playing a crucial role in maintaining the integrity and durability of the surface. These joints are intentionally created to control and m…",
        url: "https://greenhammerconcrete.com/blog-the-purpose-of-control-joints"
    },
    {
        date: "Dec 15, 2023",
        title: "Transform Your Property with Expert Concrete Services by Green Hammer",
        description: "Transform Your Property with Expert Concrete Services by Green HammerWhen it comes to enhancing the aesthetic appeal and functionality of your property, choosing the right materials and construction …",
        url: "https://greenhammerconcrete.com/blog-transform-your-property-with-expert"
    },
    {
        date: "May 09, 2023",
        title: "Concrete vs. Pavers",
        description: "When it comes to outdoor spaces, whether it's a walkway, patio, or driveway, the two most popular choices for homeowners are concrete and pavers. They both have their benefits and drawbacks, but whic…",
        url: "https://greenhammerconcrete.com/blog-concrete-vs-pavers"
    },
    {
        date: "Apr 24, 2023",
        title: "How to figure out if you need a concrete replacement or repair",
        description: "If you have concrete walkways, patios, or driveways around your home, then you know the importance of taking great care of them. Concrete is a durable and long-lasting material, but it can become dam…",
        url: "https://greenhammerconcrete.com/blog-how-to-figure-out-if"
    }
];

// Remove duplicates based on title
const blogCardData = Array.from(
    new Map(blogCardDataRaw.map(item => [item.title, item])).values()
);

function BlogPage() {
    return (
        <div>
            {heroCardData.map((hero) => (
                <BlogHero
                    key={hero.title}
                    hero_title={hero.title}
                />
            ))}

            <BlogBody blogCardData={blogCardData} />
        </div>
    );
}

export default BlogPage;
