const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);

function hithere(array) {
    string = _.last(array) + " and " + _.head(array)
    return string
}

module.exports = hithere;