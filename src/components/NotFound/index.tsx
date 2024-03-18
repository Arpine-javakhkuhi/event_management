import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";

interface Props {
  target?: string;
}

const NotFound: FC<Props> = ({ target }) => {
  const navigate = useNavigate();

  return (
    <Flex alignItems="center" height="100vh" gap={3} paddingTop="9rem">
      <Heading level={1}>404</Heading>
      <Heading level={4}>{target || "Page"} not found!</Heading>
      {!target || window.history.length === 1 ? (
        <Button size="large">Home Page</Button>
      ) : (
        <Button size="large" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      )}
    </Flex>
  );
};

export default NotFound;
