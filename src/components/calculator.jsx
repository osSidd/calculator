import useFunctions from "../hooks/useFunctions"

export default function Calculator(){

    const {numbers, handleClick, handleInput} = useFunctions()

    return (
        <div>
            <div>
                <input type="text" readOnly style={{outline: 'none', cursor:'none'}} id="input" value = {numbers.displayVal}/>
            </div>
            <div>
                <div>
                    {[1,2,3,4,5,6,7,8,9,0].map(item => {
                        return (
                            <div key={item} id={item} style={{background:'lightgray', width:'fit-content', padding:'1rem', margin:'5px' }} onClick={handleInput}>   
                                {item}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button data-op-type="add" onClick={handleClick}>Add</button>
                    <button data-op-type="subtract" onClick={handleClick}>Subtract</button>
                    <button data-op-type="multiply" onClick={handleClick}>Multiply</button>
                    <button data-op-type="divide" onClick={handleClick}>Divide</button>
                </div>
            </div>
        </div>
    )
}