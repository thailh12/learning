export function login(username, password){
  return{
    type: 'LOGIN',
    username,
    password,
  }
}

export function loginErr(err){
  return{
    type: 'LOGIN_ERROR',
    err,
  }
}

export function loginSuccess(token){
  return{
    type:'LOGIN_SUCCESS',
    token,
  }
}
