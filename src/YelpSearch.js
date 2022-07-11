import React from 'react';
import { useEffect, useState } from 'react';
import { getYelp } from './services/fetch-utils';
import YelpList from './YelpList';


export default function YelpSearch() {
  const [business, setBusiness] = useState([]);
  const [businessQuery, setBusinessQuery] = useState('Portland');

  useEffect(() => {
    fetchAndStoreBusiness();

  }, []); // eslint-disable-line

  async function fetchAndStoreBusiness() {
    const data = await getYelp(businessQuery);
    
    setBusiness(data.businesses);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetchAndStoreBusiness();
    setBusinessQuery('');
  }

  return (
    <div className='button'>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setBusinessQuery(e.target.value)} />
        <button>search</button>
      </form>
      <YelpList yelp={business}/>
    </div>
  );

}
