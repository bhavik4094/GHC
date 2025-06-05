import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import VideoPage from "../Pages/VideoPage";
import TeamPage from "../Pages/TeamPage";
import BlogPage from "../Pages/blogpage/BlogPage";
import SingleBlog from "../Pages/blogpage/SingleBlog";
import ServicePage from "../Pages/ServicePage";
import PhotosPage from "../Pages/PhotosPage";


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
        path: "/singleblog/:id", // dynamic segment
        element: <SingleBlog />,
      },
      {
        path: "/services", // dynamic segment
        element: <ServicePage />,
      },
      {
        path: "/photos/allphotos", // dynamic segment
        element: <PhotosPage />,
      },

    ],
  },
]);
