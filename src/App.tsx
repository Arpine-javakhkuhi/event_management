import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import { defaultStorage } from "aws-amplify/utils";

import AppRouterProvider from "./routes";

Amplify.configure(amplifyconfig);

cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);

const App = () => {
  return (
    <Authenticator.Provider>
      <AppRouterProvider />
    </Authenticator.Provider>
  );
};

export default App;
