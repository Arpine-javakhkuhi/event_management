import { FC } from "react";
import { Button, Flex } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { Route } from "../../../types/enum";

const AppHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <Flex
      marginTop="0"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={10}
    >
      <Button
        marginBottom={4}
        right="4px"
        onClick={() => navigate(Route.Events)}
      >
        All Events
      </Button>
      <Button marginBottom={4} right="4px" onClick={() => signOut()}>
        Sign out
      </Button>
    </Flex>
  );
};

export default AppHeader;
