import { ReactNode } from "react";

import ROUTE_PATHS from "./paths";
import SignInForm from "../auth/SignIn";
import SignUpForm from "../auth/SignUp";


type RouteType = {
  path: string;
  component: ReactNode;
};

const { SIGNUP, SIGNIN} = ROUTE_PATHS;

const ROUTES: RouteType[] = [
  // {
  //   path: "/",
  //   component: < />,
  // },
  {
    path: SIGNUP,
    component: <SignUpForm/>,
  },
  {
    path: SIGNIN,
    component: <SignInForm />,
  }
 
];

export default ROUTES;
