import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import SignIn from './pages/SignIn.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AddEquipment from './pages/AddEquipment.jsx';
import AllEquipments from './pages/AllEquipments.jsx';
import EquipmentDetails from './pages/EquipmentDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('http://localhost:5000/equipments/limited'),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addEquipment",
        element: <AddEquipment />,
      },
      {
        path: "/allEquipments",
        element: <AllEquipments />,
        loader: () => fetch('http://localhost:5000/equipments'),
      },
      {
        path: "/equipments/:_id",
        element: <EquipmentDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params._id}`),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
