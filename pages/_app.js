import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
    return (
    <PlausibleProvider domain="daddyimpregnant.com" customDomain="https://analytics.grug.dev" selfHosted="true" enabled="true">
        <Component {...pageProps} />
    </PlausibleProvider>
    );
  }
  
  export default MyApp;