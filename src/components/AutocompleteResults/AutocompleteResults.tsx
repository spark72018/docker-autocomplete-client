import React from 'react';
import { AutocompleteResultData } from "../../Base/Hooks/useAutocomplete";

import "./AutocompleteResults.scss";

type AutocompleteResultsProps = {
    results: Array<AutocompleteResultData>
}

type AutocompleteResultProps = {
    result: AutocompleteResultData
}

const className = "AutocompleteResults";
const autocompleteResultListClassName = `${className}__list`;
const autocompleteResultListItemClassName = `${autocompleteResultListClassName}__item`;

function AutocompleteResults({ results }: AutocompleteResultsProps) {
    return (
        <div className={`${className}__container`}>
            <ul className={autocompleteResultListClassName}>
                {results.map((result, idx) =>
                    (<AutocompleteResult key={`result${idx}`} result={result}/>)
                )}
            </ul>
        </div>
    );
}

function AutocompleteResult({ result }: AutocompleteResultProps) {
    return (
        <li className={`${autocompleteResultListItemClassName}`}>
            <span className={`${autocompleteResultListItemClassName}__text`}>{result.name}</span>
        </li>
    );
}

export default AutocompleteResults;