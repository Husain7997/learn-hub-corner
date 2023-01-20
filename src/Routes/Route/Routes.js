import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CoursesSection from "../../Pages/CoursesSection/CoursesSection";
import Home from "../../Pages/Home/Home";
import Blogs from "../../Pages/Blogs/Blogs";
import NotFounde from "../../Pages/NotFounde/NotFounde";
import Parches from "../../Pages/Parches/Parches";
import Course from "../../Pages/Course/Course";
import Login from "../../Sheard/Login/Login";
import Register from "../../Sheard/Register/Register";
import TermsAndConditions from "../../Sheard/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`https://learn-hub-corner-sarver.vercel.app/courses`)

            },
            {
                path: "/courses",
                element: <CoursesSection></CoursesSection>,
                loader: () => fetch(`https://learn-hub-corner-sarver.vercel.app/courses`)
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/courses/:id",
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learn-hub-corner-sarver.vercel.app/courses/${params.id}`)
            },
            {
                path: "/Parches",
                element: <PrivateRoute><Parches></Parches></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learn-hub-corner-sarver.vercel.app/courses/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
                loader: ({ params }) => fetch(`https://learn-hub-corner-sarver.vercel.app/courses/${params.id}`)

            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: "*",
                element: <NotFounde></NotFounde>
            }
        ]
    },
])