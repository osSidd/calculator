import { useState, useEffect } from "react"

export default function useFunctions(){

  const [prevVal, setPrevVal] = useState('')
    const [currentVal, setCurrentVal] = useState('')
    const [operator, setOperator] = useState(null)

    //handle input by clicking numbers
    function handleInput(e){
      const id = e.target.id
      setCurrentVal(prev => {
       if(id === '.'){
        return !prev.includes('.') ? prev + id : prev
       }
       return prev + id
      })
    }

    //handle the click of the operators
    function handleClick(e){
      setOperator(e.target.id)

      if(currentVal === ''){
        return
      }

      if(prevVal === ''){
        setPrevVal(currentVal)
        setCurrentVal('')
        return
      }

      if(prevVal !== ''){
        const result = compute(parseFloat(prevVal), parseFloat(currentVal))
        setPrevVal(result.toString())
        setCurrentVal('')
      }         
    }

    //compute function to do the calculation
    function compute(prev, current){
      if(operator){
        switch(operator){
          case '+':
            return prev + current
            break
          case '-':
            return prev - current
            break
          case '*':
            return prev * current
            break
          case '/':
            return prev / current
            break
          default:
            return
        }
      }
      return null
    }

    //clear screen when C and AC are pressed
    function clearScreen(e){
      if(e.target.id === 'AC'){
        setCurrentVal('')
        setPrevVal('')
        setOperator(null)
      }

      if(e.target.id === 'C'){
        setCurrentVal(prev => prev.slice(0, prev.length-1))
      }
    }

    //show result of computation when = is pressed
    function showResult(e){
      if(prevVal === '')
        return
      
      if(currentVal === ''){
        setCurrentVal(prevVal)
        return
      }
      setCurrentVal(compute(parseFloat(prevVal), parseFloat(currentVal)).toString())
      setPrevVal('')
    }

    return {
      prevVal,
      currentVal,
      handleInput,
      handleClick,
      operator,
      clearScreen,
      showResult
    }
}