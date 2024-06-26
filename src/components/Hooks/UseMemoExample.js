import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    const myExpensiveFunction = () => {
        console.log('the expensive function is running')
        let sum = 0;
        for (let i = 0; i <= count; i++)
            sum += i;
        return sum;
    }
    const calcValue = useMemo(() => myExpensiveFunction(), [count])
 return (
        <div>
            <div>the count is {count}  and the name is {name} the calculated value is {calcValue}</div>
            <button onClick={() => setCount(count + 1)}>click here</button>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

        </div>
    )
}

export default UseMemoExample