import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./allRoutes.js";
import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import { Loader } from "../../components/UI/Loader.jsx";

const createRouteElement = (route) => (
    <React.Suspense loader={<Loader />} >
        <route.element />
    </React.Suspense>
)

export const createRouter = 
    createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: publicRoutes.map((route) => ({
                path: route.path,
                element: createRouteElement(route),
                index: route.index,
            }))
        }
]);

