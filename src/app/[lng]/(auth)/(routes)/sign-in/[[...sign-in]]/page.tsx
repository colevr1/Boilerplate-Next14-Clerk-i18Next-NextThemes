import SignInComponent from "../../../_components/sign-in";

type Props = {
  params: {
    lng: string;
  };
}

export default function LoginPage({ params: { lng } }:Props) {
  return <SignInComponent/>;
}