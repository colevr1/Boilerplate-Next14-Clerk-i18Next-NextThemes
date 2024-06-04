import SignUpComponent from "../../../_components/sign-up";

type Props = {
  params: {
    lng: string;
  };
}

export default function LoginPage({ params: { lng } }:Props) {
  return <SignUpComponent/>;
}
