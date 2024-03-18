import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import NotFoundRoute from "../components/Routes/NotFoundRoute";
import ProtectedRoutes from "../components/Routes/ProtectedRoutes";
import UnprotectedRoutes from "../components/Routes/UnProtectedRoutes";
import NotFound from "../components/NotFound";
import Events from "../pages/Events";
import Auth from "../components/Auth";
import EventCreation from "../pages/EventCreation";
import EventEditing from "../pages/EventEditing";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<ProtectedRoutes />}>
      <Route path="events" element={<Events />} />
      <Route path="events/create" element={<EventCreation />} />
      <Route path="events/:eventId" element={<EventEditing />} />
    </Route>

    <Route element={<NotFoundRoute />}>
      <Route path="*" element={<NotFound />} />
    </Route>

    <Route element={<UnprotectedRoutes />}>
      <Route path="/" element={<Auth />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(routes);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
