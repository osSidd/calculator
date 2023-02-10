import useFunctions from "../hooks/useFunctions"
import './calculatorStyles.css'
import Button from "./button"

export default function Calculator(){

    const {
        prevVal,
        currentVal,
        handleClick, 
        handleInput, 
        operator, 
        clearScreen,
        showResult
    } = useFunctions()
    console.log(prevVal, currentVal)

    return (
        <div className="calculator-container">
            <div className="display">
                <div className="prev-display">{prevVal}{prevVal && operator}</div>
                <div className="current-display">{currentVal}</div>
            </div>
            
            <div className="btn-container">
                <Button classname="all-clear nums" id="AC" handler={clearScreen}/>
                <Button classname="clear nums" id="C" handler={clearScreen}/>
                {[1,2,3].map(btn => {
                    return <Button id={btn} key={btn} classname="nums" handler={handleInput}/>
                })}
                <Button id="+" classname="nums" handler={handleClick}/>
                
                {[4,5,6].map(btn => {
                    return <Button id={btn} key={btn} classname="nums" handler={handleInput}/>
                })}
                <Button id="-" classname="nums" handler={handleClick}/>

                {[7,8,9].map(btn => {
                    return <Button id={btn} key={btn} classname="nums" handler={handleInput}/>
                })}
                <Button id="*" classname="nums" handler={handleClick}/>

                <Button id={0} classname="nums" handler={handleInput}/>
                <Button id="." classname="nums" handler={handleInput}/>
                <Button id="=" classname="nums" handler={showResult}/> 
                <Button id="/" classname="nums" handler={handleClick}/>
            </div>
        </div>
    )
}