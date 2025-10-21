import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../../routes/routes";
import { Spin } from "antd";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Spin />}>
      <div>
        <Routes>
          {Object.values(routeConfig).map((data) => {
            const { element, path } = data;
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </div>
    </Suspense>
  );
};
