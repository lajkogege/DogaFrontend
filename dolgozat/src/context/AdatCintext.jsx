import React, { useContext, useState , useEffect} from 'react'
import MyAxios from '../api/myAxios'
import { createContext } from 'react';
import fetchData from '../api/http';


const AdatContext= createContext(); 
 export const AdatProvider=({children})=>{


    const [tevekenyseg, setTevekenyseg]= useState([]);
    const [tevekenysegerror, setTevekenysegError]= useState(null);

    const getTevekenyseg=async (vegpont, callBack)=>{
        try{
            const {data}= await MyAxios.get(vegpont);
            callBack(data);
            console.log(tevekenyseg)
        }
        catch(error){
            setTevekenysegError(error);
            console.log(tevekenysegerror)
        }
    }


    const postTevekenyseg=async(vegpont,adat)=>{
        try{
            await MyAxios.post(vegpont, adat);
            getTevekenyseg("/api/tevekenysegek", setTevekenyseg);
        }
        catch(error){
            setTevekenysegError(error);
            console.log(tevekenysegerror)
        }
    }

    useEffect(()=>
    fetchData=async()=>{
        try {
                await getTevekenyseg("/api/tevekenysegek", setTevekenyseg)
        
        }
        catch(error){
            setTevekenysegError(error);
            console.log(tevekenysegerror)
        };
        fetchData();
    },[]);

    
    return(
        <AdatProvider.Provider value={{tevekenyseg, getTevekenyseg, postTevekenyseg}}>
            {children}
        </AdatProvider.Provider>
    );


    
}

export function useAdatContext()  {
    return useContext(AdatContext)
}