import { useEffect, useState } from "react";

const useDebounce = (inputValue, waitTime = 500) => {
    const [activeTimeout, setActiveTimeout] = useState(null);
    const [activeValue, setActiveValue] = useState(inputValue);

    useEffect(() => {
        clearTimeout(activeTimeout);
        setActiveTimeout(
            setTimeout(() => {
                setActiveValue(inputValue);
            }, waitTime)
        );
    }, [inputValue]);

    return activeValue;
};

export default useDebounce;