import React from "react";
import Cover from "../components/Homepage/Cover";
import Property from "../components/Homepage/Property";
import { useSelector } from "react-redux";

export default function Homepage() {
  const property = useSelector((state) => state.propertyReducer.all_property);

  return (
    <div>
      <Cover />
      <Property property={property} />
    </div>
  );
}
