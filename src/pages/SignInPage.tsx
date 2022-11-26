import SignIn from "../components/SignIn/SignIn";
import { NavigationProgress } from "@mantine/nprogress";

function SignInPage() {
  return (
    <>
      <NavigationProgress />
      <SignIn />;
    </>
  );
}

export default SignInPage;
