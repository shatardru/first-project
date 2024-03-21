import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import DashboardLayout from "../components/layout/dashboard-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: "/about",
        element: (
            <Layout>
                <About />
            </Layout>
        ),
    },
    {
        path: "/address",
        element: <div>This is a address page</div>,
    },
    {
        path: "/contact",
        element: (
            <DashboardLayout>
                <Contact />
            </DashboardLayout>
        ),
    },
]);
