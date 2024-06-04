import { useTranslation } from "../../../i18n";

type Props = {
  params: {
    lng: string;
  };
};

// Apply the interface to the function component
export default async function Home({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, "translation");
  return (
    <main>
      <p>{t("homeTitle")}</p>{" "}
    </main>
  );
}
