import { ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";
const jotaiProvider = async ({ children }: { children: ReactNode }) => {
  return <JotaiProvider>{children}</JotaiProvider>;
};

export default jotaiProvider;
