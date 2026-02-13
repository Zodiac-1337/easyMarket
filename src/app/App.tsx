import { AppRouter } from "./providers";
import { I18nProvider } from "@/app/providers/i18n";

function App() {
  return (
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  );
}

export default App;
