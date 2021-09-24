import { useState }from 'react'

const useLocalStorage = (key, initialValue) => {
    
    if(JSON.parse(localStorage.getItem(key))==null){
        console.log('not found');
        localStorage.setItem(key,JSON.stringify(initialValue));
    }else{
        console.log('found');
        console.log(JSON.parse(localStorage.getItem(key)));
    }
    
    
    
    return useState(JSON.parse(localStorage.getItem(key)));
}


export default useLocalStorage;