// Object.defineProperty(Storage.prototype, p, attributes)

// localStorage和sessionStorage是Storage的两个实例对象 

Storage.prototype.$get = function (key, defaultValue = {}) {
    const value = this[key]; // 有String || undefined
    console.log(value);
    return value ? JSON.parse(value) : defaultValue;
}

Storage.prototype.$set = function (key, value) {
    this[key] = JSON.stringify(value);
}

sessionStorage.$set('AAA', ['sessionStorage', '123']);

localStorage.$set('AAA', ['localStorage', '123']);

localStorage.$get("AAA");

sessionStorage.$get("AAA");

console.log('localStorage', localStorage);

console.log('sessionStorage', sessionStorage);

