import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeService, fetchServices } from '../actions/actionCreators';
import {Link} from "react-router-dom";

function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch])

  const handleRemove = id => {
    dispatch(removeService(id));
  }


  return (
      <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong try again</p>}
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <Link to={`${o.id}`}><button>Edit</button></Link>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
      </>
  );
}

export default ServiceList
