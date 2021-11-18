import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
    return (
    <PlausibleProvider domain="daddyimpregnant.com" customDomain="analytics.grug.dev" selfHosted="true">
        <Component {...pageProps} />
    </PlausibleProvider>
    );
  }
  
  export default MyApp;