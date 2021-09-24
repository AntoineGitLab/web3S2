import React from 'react'
import Display from 'components/Display/Display.jsx'
import Button from 'components/Button/Button'
import useLocalStorage from 'hooks/useLocalStorage'

const App = () => {
 
  const [ counter, setCounter ] = useLocalStorage("counter",0);
  //console.log("counter: "+counter)
   
  const changeCount = (delta) => {
    setCounter(counter+parseInt(delta));
    localStorage.setItem("counter",JSON.stringify(counter+parseInt(delta)));
  };
  
  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={changeCount} delta={+1 }text="plus"/>
      <Button onClick={changeCount} delta={-1} text="minus"/>
      <Button onClick={changeCount} delta={-counter} text="zero"/>
      
      </div>
  )
}

export default App