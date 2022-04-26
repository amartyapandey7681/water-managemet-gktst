const T1_MIN = 1;
const T1_MAX = 500;
const T1_PRICE = 2;


const T2_MIN = 501;
const T2_MAX = 1500;
const T2_PRICE = 3;

const T3_MIN = 1501;
const T3_MAX = 3000;
const T3_PRICE = 5;

const T4_MIN = 3001;
const T4_MAX = Number.MAX_SAFE_INTEGER;
const T4_PRICE = 8;


exports.waterLevels = {
    "tier1" : {
        min : T1_MIN,
        max : T1_MAX,
        price : T1_PRICE
    },
    "tier2" : {
        min : T2_MIN,
        max : T2_MAX,
        price : T2_PRICE
    },
    "tier3" : {
        min : T3_MIN,
        max : T3_MAX,
        price : T3_PRICE
    },
    "tier4" : {
        min : T4_MIN,
        max : T4_MAX,
        price : T4_PRICE
    }
}

