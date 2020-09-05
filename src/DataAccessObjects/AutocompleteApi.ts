import BaseApi from "../Base/DataAccessObjects/BaseApi";

const AUTOCOMPLETE_URL = "/states/autocomplete";

class AutocompleteApi {
    static getResults(input: string): Promise<any> {
        return BaseApi.fetch({
            url: `${AUTOCOMPLETE_URL}/?text=${input}`
        });
    }
}

export default AutocompleteApi;