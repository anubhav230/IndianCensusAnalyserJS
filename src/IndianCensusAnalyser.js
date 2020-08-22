const csv = require('csv-parser')
const fs = require('fs')
var result = [];
function data(callback){
fs.createReadStream('IndiaStateCensusData.csv')
.pipe(csv({}))
.on('data', (data) => result.push(data))
.on('end', () => {
    callback (result);
});
}
const user = data(user => {
    //console.log(result.length)
});
exports.csvData=()=>{
    return result.length;
}

result.sort(function(a, b){
    if(a.Population < b.Population)return -1;
    if(a.Population > b.Population)return 1;
    return 0;
});
