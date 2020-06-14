// f22e5ca70cd7c5ce7cf915d0fab4d8ee

let getApi=(link)=>{

  return fetch(link)
    .then(result=>result.json())
    .then(result=>{return result})

}

export {getApi};
