import { FC } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";

const Auth: FC = () => {
  return (
    <Authenticator
      initialState="signIn"
      components={{
        SignUp: {
          FormFields() {
            return <Authenticator.SignUp.FormFields />;
          },
        },
      }}
    />
  );
};

export default withAuthenticator(Auth);
