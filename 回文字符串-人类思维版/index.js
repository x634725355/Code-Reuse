const str = 'leveleve noon TNT';

function getEqualString(str) {
    if (str.length < 2) return '短了';

    const arr = [];

    for (let lp = 0, rp = str.length - 1; lp < str.length - 1; rp--) {
        if (str[lp] === str[rp]) {
            const splited = str.slice(lp, rp + 1);
            const left = splited.slice(0, Math.ceil(splited.length / 2));
            const right = splited.slice(Math.floor(splited.length / 2));

            const rightb = right.split('').reverse().join("");

            if (left === rightb) {
                arr.push(splited);
                lp++;
                rp = str.length;
            }
        }

        if (rp <= lp + 1) {
            lp++;
            rp = str.length;
        }
    }

    return arr.toString();
}

const res = getEqualString(str);
console.log(res);