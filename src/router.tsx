import { QueryClient } from "@tanstack/react-query";
import { createRouter, createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { CareGoLoader } from "./components/Loader";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    history: createHashHistory(),
    context: { queryClient },
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: () => <CareGoLoader text="Preparing your dashboard…" />,
    defaultPendingMs: 200,
  });

  return router;
};
