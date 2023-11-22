import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Genres from "./components/Genres";
import EditMovie from "./components/EditMovie";
import ManageCatalogue from "./components/ManageCatalogue";
import GraphQL from "./components/GraphQL";
import Login from "./components/Login";
import Movie from "./components/Movie";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {index: true, element: <Home></Home>},
            {
                path:"/movies",
                element: <Movies></Movies>,
            },
            {
                path:"/movies/:id",
                element: <Movie></Movie>,
            },
            {
                path:"/genres",
                element: <Genres></Genres>,
            },
            {
                path:"/admin/movies/0",
                element: <EditMovie></EditMovie>,
            },
            {
                path:"/manage-catalogue",
                element: <ManageCatalogue></ManageCatalogue>,
            },
            {
                path:"/graphql",
                element: <GraphQL></GraphQL>,
            },
            {
                path:"/login",
                element: <Login></Login>,
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
