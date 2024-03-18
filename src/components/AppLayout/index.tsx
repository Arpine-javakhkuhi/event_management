import { FC } from "react";
import { View, Divider } from "@aws-amplify/ui-react";

import AppContent from "./AppContent";
import AppHeader from "./AppHeader";

const DashboardContent: FC = () => {
  return (
    <View as="div" width="100%">
      <AppHeader />
      <Divider orientation="horizontal" />
      <AppContent />
    </View>
  );
};

export default function Dashboard() {
  return <DashboardContent />;
}
