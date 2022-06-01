import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ChakraProvider resetCSS>
          <App />
        </ChakraProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
