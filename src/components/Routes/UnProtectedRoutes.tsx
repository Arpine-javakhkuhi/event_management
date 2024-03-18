import { Outlet, Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

import { Route } from "../../types/enum";

const UnprotectedRoutes = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return authStatus == "authenticated" ? (
    <Navigate to={Route.Events} />
  ) : (
    <Outlet />
  );
};

export default UnprotectedRoutes;
