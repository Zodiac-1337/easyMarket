import { I18nProvider } from "@/app/providers/i18n";

import { AppRouter } from "./providers";

function App() {
  return (
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  );
}

export default App;
