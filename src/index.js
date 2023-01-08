import { createRoot } from "react-dom/client";
import store from "./store/store";
import App from "./App";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
