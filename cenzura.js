var cenzurisaneReci = ["glup", "los", "lenj"];
var dodatneCenzurisaneReci = [];

function censor(inStr) {
    for (idx in cenzurisaneReci) {
        inStr = inStr.replace(cenzurisaneReci[idx], "****");
    }

    for (idx in dodatneCenzurisaneReci) {
        inStr = inStr.replace(dodatneCenzurisaneReci[idx], "****");
    }

    return inStr;
}

function dodajCenzurisaneReci(rec) {
    dodatneCenzurisaneReci.push(rec);
}

function prikaziCenzurisaneReci() {
    return cenzurisaneReci.concat(dodatneCenzurisaneReci);
}

exports.censor = censor;
exports.dodajCenzurisaneReci = dodajCenzurisaneReci;
exports.prikaziCenzurisaneReci = prikaziCenzurisaneReci;

