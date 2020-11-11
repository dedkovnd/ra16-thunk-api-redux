import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, editService } from '../actions/actionCreators';
import {useHistory} from 'react-router-dom'

function ServiceAdd(props) {
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=> {
    editService(dispatch, props.match.params.id)
  }, [dispatch,props.match.params.id])

  console.log(props.match.params.id)
  console.log(item)
  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };


  const handleSubmit = evt => {
    evt.preventDefault();

  }

  const handleCancel =()=> {
    history.push("/")
  }

  return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong try again</p>}
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='button' onClick={handleCancel}>Cancel</button>
      <button type='submit'>Save</button>
    </form>
      </>
  );
}

export default ServiceAdd;
