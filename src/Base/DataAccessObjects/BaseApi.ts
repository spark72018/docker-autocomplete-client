const BASE_URL = "/api";

interface Settings {
    method: string,
    body?: string,
    headers?: any
}

class BaseApi {
    static fetch({ url, method = "GET", body }: { url: string; method?: string, body?: object}): Promise<object> {
        const settings: Settings = {
            method,
        }

        if (body) {
            settings.body = JSON.stringify(body);
            settings.headers["Content-Type"] = "application/json";
        }

        return fetch(`${BASE_URL}${url}`, settings)
            .then(res => res.json());
    }
}

export default BaseApi;