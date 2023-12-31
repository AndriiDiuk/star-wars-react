import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import ThemProvider from "./context/ThemeProvider";
import ChooseSide from "./components/HomePage/ChooseSide/ChooseSide";
import store from "./store/store";
import App from "./containers/App";

import "./styles/null.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemProvider>
				<App />
			</ThemProvider>
		</Provider>
	</React.StrictMode>
);
