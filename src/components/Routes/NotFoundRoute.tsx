import { Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

import NotFound from "../NotFound";
import { Route } from "../../types/enum";

const NotFoundRoute = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return authStatus !== "authenticated" ? (
    <Navigate to={Route.Auth} />
  ) : (
    <NotFound />
  );
};

export default NotFoundRoute;
