import { useState } from "react";

const useCount = (initialState) => {
    const [count, setCount] = useState(initialState);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSub = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(initialState);
    }

    return {count,handleAdd, handleSub, handleReset}
}

export default useCount;