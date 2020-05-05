import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../components/Layout";
import Main from "../components/Main"
import SideMenu from "../components/SideMenu"

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export default function Index() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? "?author=" + query.author : ""}`,
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";

  return (
    <Layout
      title="Famical - 家族で共有しよう"
      family={["ぱぱち", "ままち", "ゆうせい", "しゅんよう", "さお"]}>
      <div className="wrapper">
        <SideMenu />
        <Main />
      </div>
      <style jsx>
        {`
        .wrapper::after {
          content: '';
          display: block;
          clear: both;
        }
        .wrapper {
          width: 970px;
          margin: 30px auto 40px;
        }
        `}
      </style>
    </Layout>
  );
}
