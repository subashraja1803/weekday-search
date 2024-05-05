import "./App.css";
import SearchPage from "./pages/SearchPage";
import searchPageStore from "./store/SearchJobsStore";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

function App() {
  const store = configureStore({
    reducer: {
      searchPageStore,
    },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <SearchPage />
      </Provider>
    </div>
  );
}

export default App;
