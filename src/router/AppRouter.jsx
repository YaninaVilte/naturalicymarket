import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";
import { routes } from "./routes";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import RegisterConfirm from "../components/pages/register/RegisterConfirm";
import ForgotPassword from "../components/pages/forgotPassword/ForgotPassword";
import ChangePassword from "../components/pages/forgotPassword/ChangePassword";
import Dashboard from "../components/pages/dashboard/Dashboard";
import ProtectedAdmin from "./ProtectedAdmin";
import Footer from "../components/layout/footer/Footer";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      

      {/* PARA LOS USUARIOS ADMIN */}
      <Route element={<ProtectedAdmin />} >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* register  */}
      <Route path="/register" element={<Register />} />
      <Route path="/register/confirm" element={<RegisterConfirm />} />

      {/* forgot password  */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />

      {/* Nota: Asegúrate de agregar el componente Footer dentro del Route */}
      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
