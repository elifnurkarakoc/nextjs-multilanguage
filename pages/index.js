import Head from "next/head";
import { useRouter } from "next/router";
import Select from "../components/Select";
import en from "../locales/en";
import tr from "../locales/tr";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  return (
    <div className="bg-gradient-to-r font-mono from-blue-400 to-blue-400 items-center justify-center p-6 min-h-screen ">
      <div className=" flex flex-col justify-center text-white w-full  mx-auto max-w-3xl ">
        <div className="flex flex-row w-full space-x-8 justify-between">
          <Head>
            <title>NextJS Multi-Language App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="flex justify-between items-center py-3 text-xl font-bold ">
            NextJS Multi-Language App
          </h1>
          <Select />
        </div>
        <div className="mt-10">
          <h1 className="mt-10 text-xl">{t.title}</h1>
          <button className="mt-10 bg-green-500 p-2 rounded place-items-center">{t.buttonText}</button>
        </div>
        <div className="mt-10 ">
          <h1 className="mt-10 text-xl ">{t.subTitle}</h1>

          <div className="mt-10 ">{t.content}</div>
          <button className="bg-green-500 p-2 rounded mt-10">
            {t.docButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
