const csv = require('csv-parser')
const fs = require('fs')
var result = [];

fs.createReadStream('IndiaStateCensusData.csv')
//.pipe(csv({}))
.on('data', (data) => result.push(data))
.on('end', () => {
    console.log(result.length);
});

exports.a=()=>{
    return result.length;
}