import { task as cons } from '../constants';

export function getPersons() {

  return (dispatch) => {
  	dispatch({
  		type: cons.LOAD
  	});
  	fetch('http://localhost:3000/tasks')
  		.then(response => {
  			return response.json();
  		})
  		.then(json => {
  			dispatch({
  				type: cons.LOAD_SUCCESS,
  				data: json
  			});
  		})
  		.catch(err => {
  			dispatch({
  				type: cons.LOAD_FAIL,
  				error: err
  			});
  		});
  };
}
