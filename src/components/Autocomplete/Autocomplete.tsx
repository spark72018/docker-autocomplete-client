import React from 'react';
import AutocompleteResults from "../AutocompleteResults/AutocompleteResults";
import useAutocomplete from "../../Base/Hooks/useAutocomplete";

import "./Autocomplete.scss";

const className = "Autocomplete";

function Autocomplete() {
    const { value, setValue, results } = useAutocomplete();
    const handleInputChange = (e: { target: { value: string; }; }) => {
        setValue(e.target.value);
    };

    return (
        <div className={className}>
            <input
                className={`${className}__input`}
                value={value}
                onChange={handleInputChange}
            />
            <AutocompleteResults results={results} />
        </div>
    );
}

export default Autocomplete;