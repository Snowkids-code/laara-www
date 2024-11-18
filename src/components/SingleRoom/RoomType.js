import React, { useState } from "react";

export default function RoomType({ details }) {
  const [count, setCount] = useState(1);

  const handleCounterClick = (operation) => {
    if (operation === "minus") {
      if (count > 1) {
        setCount(count - 1);
      }
    } else {
      if (count < 2) {
        setCount(count + 1);
      }
    }
  };

  return (
    <div className="room-type-container">
      <div className="room-type-img-wrapper">
        <img alt="room" src={details.roomTypes.roomTypeImages[0].images.url} />
      </div>
      <div className="amenties-wrapper">
        <p>{details.roomTypes.name}</p>
      </div>
      <div className="price-counter-wrapper">
        <p>${details.roomTypes.pricings[0].price}/ per night</p>
        <div className="counter-wrapper">
          <img
            alt="minus"
            src="/icons/minus.svg"
            onClick={() => handleCounterClick("minus")}
          />
          <p>{count}</p>
          <img
            alt="add"
            src="/icons/plus.svg"
            onClick={() => handleCounterClick("plus")}
          />
        </div>
      </div>
    </div>
  );
}
