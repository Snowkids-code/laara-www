import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route />
      </Route>
    </Routes>
  );
}
