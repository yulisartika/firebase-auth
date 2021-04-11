import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import Dashboard from "../components/dashboard/Dashboard";
import CreateProject from "../components/projects/CreateProject";
import ProjectDetails from "../components/projects/ProjectDetails";

// later on, try making a private route in app.js
export const privateRoutes = [
  {
    commponent: Dashboard,
    path: "/",
    exact: true,
  },
  {
    commponent: ProjectDetails,
    path: "/project/:id",
    exact: true,
  },
  {
    commponent: CreateProject,
    path: "/create",
    exact: true,
  },
];

export const publicRoutes = [
  {
    commponent: SignIn,
    path: "/signin",
    exact: true,
  },
  {
    commponent: SignUp,
    path: "/signup",
    exact: true,
  },
];
