import { useState } from "react";

const Contador3 = () => {
    const [count, setCount] = useState(0);
    const sumar =() => setCount(count+1);
    const restar =() => setCount(count-1);
    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={sumar}> Incrementar  +1</button>  <br />
            <button onClick={restar}> Decrementar  -1</button>

        </div>
    );
};
export default Contador3;