import React, { useState, useEffect, useCallback} from 'react';
import _ from 'lodash';
import AutocompleteApi from "../../DataAccessObjects/AutocompleteApi";
import useInput from "./useInput";


export type AutocompleteResultData = {
    name: string,
    score: number
}

type UseAutocompleteHook = {
    value: string,
    setValue: Function,
    results: Array<AutocompleteResultData>
}


function useAutocomplete(initialResults: Array<AutocompleteResultData> = []): UseAutocompleteHook {
    const { value, setValue } = useInput();
    const [ results, setResults ] = useState(initialResults);
    const getAutocompleteResults = useCallback(() => {
        function getResults() {
            AutocompleteApi.getResults(value)
            .then(res => {
                if (res.success) {
                    setResults(res.data.values);
                }
            });
        }

        if (value) {
            getResults();
        }
    }, [value]);

    const debouncedGetAutocompleteResults = _.debounce(getAutocompleteResults, 400); // so we don't overload api

    useEffect(() => {
        if (value) {
            debouncedGetAutocompleteResults();
        }
    }, [value]);

    return {
        value,
        setValue,
        results
    };
}

export default useAutocomplete;