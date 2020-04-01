export function queryString(data) {
    return '?' + Object.keys(data).map(i => `${i}=${data[i]}`).join('&');
}
export function myQueryString(data) {
    let str = '?';
    for (const key in data) {
        str += `${key}=${data[key]}&`;
    }
    return str.substr(0, b.length-1);
}