import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPropertyById } from "../../reducers/property.reducer";

export default function PropertyCard({ details }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingleProperty = (id) => {
    dispatch(getPropertyById({ id: id }));
    navigate(`/property/${id}`);
  };
  return (
    <div
      className="property-card-container"
      onClick={() => handleSingleProperty(details.id)}
    >
      <div className="property-card-image">
        <img
          alt="property"
          src={details.propertyImages[0].images.url}
          className="property-cover-img"
        />
      </div>
      <div className="property-card-body">
        <h3>{details.name}</h3>
        <div className="location-wrapper">
          <img alt="location" src="/icons/location.svg" />
          <p>
            {details.address.county}, {details.address.country}
          </p>
        </div>
      </div>
    </div>
  );
}
