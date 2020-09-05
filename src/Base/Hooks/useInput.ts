import React, { useState } from 'react';

type UseInputHook = {
    value: string,
    setValue: Function
}

function useInput(initialValue: string = ""): UseInputHook {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue
    };
}

export default useInput;