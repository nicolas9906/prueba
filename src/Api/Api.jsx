import React,{useState,useEffect} from "react";
import Axios from "axios";
import {CountryList, PersonaList} from "./Country"
import './Api.css'

export const Api=()=> {
 

    const [list, setList] = useState([]);
    const[country,setCountry]=useState([]);
    useEffect(() => {
      Axios({
        url: "https://api.nationalize.io/?name=pedro",
      })
        .then((res) => {
          setList(res.data);
          setCountry(res.data.country)
        })
        .catch((error) => {
          console.log(error);
        });
        
    }, []);

    return (
        <>
        <div className="body">
         <div className="wrapper">
          <div className="container">
          <h1>{list.name}</h1>
         </div>
      
            
          </div>
          </div>
          <CountryList country={country} /> 
        </>
    )
}