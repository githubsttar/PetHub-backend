import axios from 'axios';

import (ADD_PET) from './types';

export const addPet = (pet, history) => dispatch => {
  axios
    .post('/pets', pet)
    .then(res => dispatch({
      type: ADD_PET,
      payload: res.data
    }))
    .then( () => {
      history.push("/pets")
    })
};
