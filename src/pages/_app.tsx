import React, { useState } from "react";

import { elementType, object } from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import "moment/locale/es";
import "@styles/globals.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "@components/theme";
import createEmotionCache from "@components/createEmotionCache";
import { AuthProvider,ProtectRoute } from "@contexts/authcontext/AuthState";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  


  return (
    <CacheProvider value={clientSideEmotionCache}>
      
      <Head>
        <link rel="icon" href="/images/Lifvir-black.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>LIFVIR</title>
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
      
            <Component {...pageProps} />
          
        </QueryClientProvider>
      </ThemeProvider>
     
      
    </CacheProvider>
  );
}

export default App;
App.propTypes = {
  Component: elementType.isRequired,
  emotionCache: object,
  pageProps: object.isRequired,
};