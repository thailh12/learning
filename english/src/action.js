export function submit(word){
  return {
    type:'FETCH',
    word,
  }
}
export function success(){
  return{
    type:'FETCH_SUCCESS',
  }
}
export function fail(error){
  return {
    type:'FETCH_FAIL',
    error
  }
}
