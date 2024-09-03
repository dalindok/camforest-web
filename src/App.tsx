import { I18nextProvider } from "react-i18next";
import RouteNavigation from "./routes/Route";
import i18n from "./i18n";
function App() {
  return (
    <div className="">
      <I18nextProvider i18n={i18n}>
        <RouteNavigation />
      </I18nextProvider>
    </div>
  );
}

export default App;
