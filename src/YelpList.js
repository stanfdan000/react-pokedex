import React from 'react';

export default function YelpList({ yelp }) {
  return (
    <div className='list'>
      {
        yelp.map((business, i) => <div key={business.name + i}>
          <p>{business.name}</p>
            
        </div>)
      }
    </div>
  );
}