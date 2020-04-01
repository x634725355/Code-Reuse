
const BASE_URL = '';

const CONTENT_TYPE_MAP = {
    json: 'appliation/json',
    form: 'application/x-www-form-urlencoded'
}

class API {
    static parseQueryString(params, mark = false) {
        // return (mark ? '?' : "") + Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        // 下面的方式是URLSearchParms方式
        return (mark ? '?' : '') + new URLSearchParams(params).toString();
    }

    static _request(url, params, urlParams, method = 'GET', type = 'json', credentials = 'omit') {
        const args = urlParams ? API.parseQueryString(urlParams, true) : "";

        return fetch(BASE_URL + url + args, {
            method, body: params, credentials,
            headers: { ...CONTENT_TYPE_MAP[type] ? ({ 'Content-Type': CONTENT_TYPE_MAP[type] }) : {} }
        })
    }

    static async get(url, urlParams) {
        return (await API._request(url, undefined, urlParams, undefined, null)).json();
    }

    static async post(url, params, urlParams) {
        return (await API._request(url, JSON.stringify(params), urlParams, 'POST')).json();
    }

    static async put(url, params, urlParams, credentials = 'include') {
        return (await API._request(url, JSON.stringify(params), urlParams, 'PUT', credentials)).json();
    }
}