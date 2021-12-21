import { useRouter } from "next/router";
import Link from "next/link";
import en from "../locales/en";
import tr from "../locales/tr";

const Select = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className="flex justify-between items-center py-3 bg-green"
      >
        <option value={"en"}>English</option>
        <option value={"tr"}>Türkçe</option>
      </select>
    </>
  );
};

export default Select;
