import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('../../container/dashboard'));
const DemoTwo = lazy(() => import('../../container/dashboard/DemoTwo'));
const DemoThree = lazy(() => import('../../container/dashboard/DemoThree'));
const DemoFour = lazy(() => import('../../container/dashboard/DemoFour'));
const DemoSix = lazy(() => import('../../container/dashboard/DemoSix'));
const DemoSeven = lazy(() => import('../../container/dashboard/DemoSeven'));
const DemoEight = lazy(() => import('../../container/dashboard/DemoEight'));
const DemoNine = lazy(() => import('../../container/dashboard/DemoNine'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="demo-2" element={<DemoTwo />} />
      <Route path="demo-3" element={<DemoThree />} />
      <Route path="demo-4" element={<DemoFour />} />
      <Route path="demo-6" element={<DemoSix />} />
      <Route path="demo-7" element={<DemoSeven />} />
      <Route path="demo-8" element={<DemoEight />} />
      <Route path="demo-9" element={<DemoNine />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
