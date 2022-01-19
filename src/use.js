import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setdata ] =  useState(null)
    const [error, seterror] = useState(null)
    const [ispending, setpending] =useState(true);
    
    useEffect(() =>{
        const abortC = new AbortController();
        setTimeout( ()=>{ fetch(url, {signal: abortC.signal})
              .then(res => {
                  if(!res.ok){
                      throw Error('couldnt fetch the data');
                  }
                  return res.json()
              })
              .then(data => {
                  seterror(null)
                  setdata(data)
                  setpending(false)
              }).catch((err) => {
                  if (err.name ==='AborrtError'){
                      console.log('aborted')
                  } else{
                  setpending(false)
                  seterror(err.message) }
              })
          },1000)
          return () => abortC.abort();

      }, [url]) 
      return {data, ispending, error}
}

export default useFetch;