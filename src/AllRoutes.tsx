import { useRoutes } from "react-router-dom";
import { lazy } from 'react';
import Product from "./Product/Product";

// import NotFound from "./404/NotFound";
const Home = lazy(() => import("./Home/Home"));
const Gallery = lazy(() => import("./Gallery/Gallery"));
// import Product from "./Product/Product";

export const Routes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Gallery",
            element: <Gallery />,
        },
        // {
        //     path: "*",
        //     element: <NotFound />,
        // },
        { path: "/Product/:productName", element: <Product /> },
    ]);
    return (
        <>{element}</>
    );

}
