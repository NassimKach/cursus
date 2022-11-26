import SignUp from "../components/SignUp/SignUp";
import { NavigationProgress } from "@mantine/nprogress";

function SignUpPage() {
  return (
    <>
      <NavigationProgress />
      <SignUp />;
    </>
  );
}

export default SignUpPage;
