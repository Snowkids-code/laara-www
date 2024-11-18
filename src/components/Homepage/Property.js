import React from "react";
import PropertyCard from "./PropertyCard";

export default function Property({ property }) {
  return (
    <div className="property-container">
      <div className="property-wrapper">
        <div className="property-header">
          <h3>Explore Our Hot Deals</h3>
        </div>
        {property && (
          <div className="property-body">
            {property.data?.map((value, i) => (
              <div key={i}>
                <PropertyCard details={value} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
