import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
    return (
    <PlausibleProvider domain="analytics.grug.dev" customDomain="analytics.grug.dev">
        <Component {...pageProps} />
    </PlausibleProvider>
    );
  }
  
  export default MyApp;