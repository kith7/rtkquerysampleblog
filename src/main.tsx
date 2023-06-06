import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/store/store.ts";
import { Provider } from "react-redux";
import "./index.css";
import "./components/fontawesome/css/all.min.css";
import "./components/css/bootstrap.min.css";
import "./components/css/templatemo-xtra-blog.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
