import { Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

import AppLayout from "../AppLayout";
import { Route } from "../../types/enum";

const ProtectedRoutes = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return authStatus !== "authenticated" ? (
    <Navigate to={Route.Auth} />
  ) : (
    <AppLayout />
  );
};

export default ProtectedRoutes;
