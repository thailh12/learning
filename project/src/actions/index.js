import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../constants';

export function loginRequire(username, password){
  return{
    type: LOGIN_REQUEST,
    username,
    password,
  };
}
export function loginSuccess(){
  return{
    type: LOGIN_SUCCESS,
  };
}

export function loginFail(error){
  return{
    type: LOGIN_FAIL,
    error,
  };
}
