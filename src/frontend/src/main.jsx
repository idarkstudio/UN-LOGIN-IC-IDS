import "./index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { InternetIdentityProvider } from "ic-use-internet-identity";
import ReactDOM from "react-dom/client";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <InternetIdentityProvider>
      <App />
    </InternetIdentityProvider>
  </QueryClientProvider>
);
