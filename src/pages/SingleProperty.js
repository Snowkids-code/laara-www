import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RoomType from "../components/SingleRoom/RoomType";
import { getPropertyById } from "../reducers/property.reducer";

export default function SingleProperty() {
  const dispatch = useDispatch();
  const property = useSelector((state) => state.propertyReducer.property.data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPropertyById({ id: id }));
  }, []);

  return (
    <div className="single-property-container">
      <div className="single-property-cover">
        <img alt="cover" src="/images/destination.jpg" />
      </div>
      {property && (
        <div className="single-property-body">
          <div className="single-property-body-wrapper">
            <div className="single-property-left-wrapper">
              <div className="single-property-header">
                <div>
                  <h3>{property?.name}</h3>
                  <div className="location-wrapper">
                    <img alt="location-marker" src="/icons/location.svg" />
                    <p>
                      {property.address.county}, {property.address.country}
                    </p>
                  </div>
                </div>
                <div className="single-property-ratings">
                  <p>
                    {property.propertyRatings == null
                      ? 0
                      : property.propertyRatings}
                    /5
                  </p>
                  <p>({property.reviews.length} Reviews)</p>
                </div>
              </div>
              <div className="single-property-img-wrapper">
                <div className="cover-img-wrapper">
                  <img
                    alt="cover"
                    src={property?.propertyImages[0].images.url}
                  />
                </div>
                <div
                  className="single-property-img-slider"
                  style={{
                    gridTemplateColumns: `repeat(${property.propertyImages.length}, 1fr)`,
                  }}
                >
                  {property.propertyImages?.map((value, i) => (
                    <img alt="pic" src={value.images.url} />
                  ))}
                </div>
              </div>
              <div className="property-description">
                <h3>Overview</h3>
                <p>{property.description}</p>
                <p>We offer the folloing features:</p>
                <ul>
                  {property.accessibilityFeatures.map((value, i) => (
                    <li>{value.features.feature}</li>
                  ))}
                </ul>
              </div>
              <div className="room-type-wrapper">
                <h3>Select your Room</h3>
                {property.rooms.map((value, i) => (
                  <RoomType details={value} />
                ))}
              </div>
            </div>
            <div className="single-property-right-wrapper">
              <div className="property-features-wrapper">
                <h3>Price</h3>
                <p>
                  From ${property?.rooms[0].roomTypes.pricings[0].price}/per
                  person
                </p>
                <h3>Our Policies</h3>
                <ul>
                  {property.propertyPolicies?.map((value, i) => (
                    <li>{value.policies.description}</li>
                  ))}
                </ul>
              </div>
              <div className="host-details-wrapper">
                <h3>Host Details</h3>
                <div className="host">
                  <img alt="profile" src="/icons/profile.svg" />
                  <div>
                    <p>
                      Name: {property.host.firstName} {property.host.lastName}
                    </p>
                    <p>Location: </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
