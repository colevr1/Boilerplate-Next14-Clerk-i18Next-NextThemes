import Topbar from "./_components/topbar";
import { useTranslation } from "../../i18n";

type Props = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

export default async function Layout({ children, params: { lng } }: Props) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Topbar lng={lng} />
      <div>{children}</div>
    </>
  );
}
