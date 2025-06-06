
import Button from './button';
const Counter=({count,onIncrement,onDecrement,onReset}) =>{
    return(
        <div>
            <h2> Count: {count}</h2>
            <Button label="+" onClick={onIncrement}/>
            <Button label="-" onClick={onDecrement}/>
            <Button label="Reset" onClick={onReset}/>
        </div>
    );
};
export default Counter;