import * as React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import TestPage from './pages/TestPage.tsx';
import ShoppingPage from './pages/ShoppingPage.tsx';
  
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={ <div>penis</div> }>
//         <Route path="/starwars" element={<StarWars />} />
//         <Route path="test" element={<h1>poop</h1>} />
//       </Route>
//     )
//   );

  const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>test error</div>
    },
    {
        path: "nftshop",
        element: <ShoppingPage />
    }
  ])

  const root = createRoot(document.getElementById("root")!);
  
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();