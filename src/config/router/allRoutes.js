import { endPoints } from "../endPoints/endPoints.js";
import { lazy } from "react";

export const publicRoutes = [
    {
        index: true,
        path: endPoints.Home,
        element: lazy(() => import('../../pages/public/HomePage.jsx')),
    }
]