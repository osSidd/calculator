import { useState, useEffect } from "react"

import useCalculator from "./useCalculator"

export default function useFunctions(){
    const calculator = useCalculator()

    const [numbers ,setNumbers] = useState({
        nums: [0],
        val : 0,
        displayVal: 0
    })

    const [operator, setOperator] = useState(null)
    const [total, setTotal] = useState(0)

    function handleInput(e){
        const id = e.target.id
        setNumbers(prev => ({
            ...prev,
            val: parseInt(prev.val + id),
            displayVal: parseInt(prev.val + id),
        }))
    }

    function handleClick(e){
        setOperator(e.target.dataset.opType)
        setNumbers(prev => ({
          ...prev,
          nums: [total, parseInt(prev.val)],
          val: 0,
        }))
      }

      useEffect(() => {
        if(operator){
          setTotal(calculator[operator](numbers.nums))
          setNumbers(prev => ({
            ...prev,
            displayVal: total
          }))
        }
      }, [numbers.nums, total])

      return {
        numbers,
        handleInput,
        handleClick,
      }
}