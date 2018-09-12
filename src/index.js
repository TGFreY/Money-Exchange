// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let rest = currency;
    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    } else if (currency === 0) {
        return {};
    } else {
        let H = Math.floor(rest / 50);
        rest -= H * 50;
        let Q = Math.floor(rest / 25);
        rest -= Q * 25;
        let D = Math.floor(rest / 10);
        rest -= D * 10;
        let N = Math.floor(rest / 5);
        rest -= N * 5;
        let P = Math.floor(rest / 1);
        let obj = {
            "H": H,
            "Q": Q,
            "D": D,
            "N": N,
            "P": P
        };
        let retObj = {};
        for (var key in obj) {

            if (obj[key] > 0) {
                retObj[key] = obj[key];
            }
        }
        return retObj;

    }
}
