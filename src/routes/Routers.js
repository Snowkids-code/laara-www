import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import SingleProperty from "../pages/SingleProperty";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/property/:id" element={<SingleProperty />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
