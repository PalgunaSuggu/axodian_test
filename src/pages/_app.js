import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import ReactGA from "react-ga4";
import { useEffect, useState } from 'react';

const GA_TRACKING_ID = "G-VD04WS1MZE";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState(null);

  useEffect(() => {
    setQueryParams(router.query);
  }, [router.query]);

  useEffect(() => {
    if (queryParams && typeof window !== "undefined") {
      const { utm_source, utm_medium, utm_campaign, fbclid } = queryParams;
      const setSessionStorage = (key, value, defaultValue = "Website") => {
        window.sessionStorage.setItem(key, value || defaultValue);
      };

      setSessionStorage("from", utm_source);
      setSessionStorage("medium", utm_medium);
      setSessionStorage("campaign", utm_campaign);
      if (fbclid) setSessionStorage("fbclid", fbclid);
    }
  }, [queryParams]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.initialize(GA_TRACKING_ID);
      const handleRouteChange = (url) => {
        ReactGA.send({ hitType: "pageview", page: url });
      };

      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
