import { Suspense } from "react";
import { AppRouter } from "./providers/RouterProvider/RouterProvider";
import { Spin } from "antd";

export default function App() {
  return (
    <Suspense fallback={<Spin />}>
      <main>
        <AppRouter />
      </main>
    </Suspense>
  );
}
