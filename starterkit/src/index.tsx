import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";

import { App } from "@/app";
import { ErrorBoundary, StoreProvider } from "@/app/providers";
import { CustomGlobalStyles } from "@/app/styles";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ConfigProvider
            theme={{
              algorithm: theme.defaultAlgorithm, 
              token: {
                colorPrimary: "#1677ff", // основной цвет (можешь заменить)
              },
            }}
          >
            <CustomGlobalStyles />
            <App />
          </ConfigProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
