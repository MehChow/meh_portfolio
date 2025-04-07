import SignInForm from "./sign-in-form";
import CardWrapper from "./shared/card-wrapper";
import Separator from "./shared/separator";
import SocialLogin from "./shared/social-login";

export function SignInCard() {
  return (
    <CardWrapper title="Sign In" gradient="signin-card">
      <SignInForm />
      <Separator />
      <SocialLogin />
    </CardWrapper>
  );
}

export default SignInCard;
