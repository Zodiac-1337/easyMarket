import { Suspense } from "react";
import { Route, Routes } from "react-router";

import { routerConfig } from "@/app/providers/router/routerConfig.tsx";

import { PageLoader } from "@/widgets/PageLoader";

export const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<PageLoader />}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
