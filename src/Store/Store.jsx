import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { createContext } from "react";

export let NewsContext = createContext(0);

export default function NewsContextProvider(props){
    
    const [pizza, setPizza] = useState([])
    const [pasta, setPasta] = useState([])
    const [corns, setCorn] = useState([])
    const [cakes, setCakes] = useState([])

  async function getNewApi(callback , category){
    let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${category}`);
    callback(data.recipes.slice(0,10));
  }

  useEffect(() => {
    getNewApi(setPizza,'pizza');
    getNewApi(setPasta,'pasta');
    getNewApi(setCorn,'corn');
    getNewApi(setCakes,'cake');
  }, [])

    return <NewsContext.Provider value={{pizza , pasta , corns , cakes}}>
        {props.children}
    </NewsContext.Provider>

}
