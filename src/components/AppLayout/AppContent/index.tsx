import { FC } from "react";
import { Outlet } from "react-router-dom";
import { View } from "@aws-amplify/ui-react";

const AppContent: FC = () => (
  <View as="div" margin={10} overflow="auto">
    <Outlet />
  </View>
);

export default AppContent;
