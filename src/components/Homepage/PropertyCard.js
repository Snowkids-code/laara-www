import React from 'react'

export default function PropertyCard({details}) {
  return (
    <div className='property-card-container'>
      <div className='property-card-image'>
        <img alt='property' src={details.propertyImages[0].images.url}/>
      </div>
      <div className='property-card-body'>
        <h3>{details.name}</h3>
        <div className='location-wrapper'>
          <img alt='location' src='/icons/location.svg'/>
          <p>{details.address.county}, {details.address.country}</p>
        </div>
      </div>
    </div>
  )
}
