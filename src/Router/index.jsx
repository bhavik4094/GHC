import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import VideoPage from "../Pages/VideoPage";
import TeamPage from "../Pages/TeamPage";
import BlogPage from "../Pages/blogpage/BlogPage";
import SingleBlog from "../Pages/blogpage/SingleBlog";
import ServicePage from "../Pages/ServicePage";
import PhotosPage from "../Pages/PhotosPage";
import ReviewsPage from "../Pages/ReviewsPage";
import ContactPage from "../Pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/videos",
        element: <VideoPage />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:slug", // Changed from /singleblog/:id to use slug
        element: <SingleBlog />,
      },
      {
        path: "/services/:slug",
        element: <ServicePage />,
      },
      {
        path: "/photos/allphotos",
        element: <PhotosPage />,
      },
      {
        path: "/reviews",
        element: <ReviewsPage />,
      },
    ],
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);