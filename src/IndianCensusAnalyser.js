const csv = require('csv-parser')
const fs = require('fs');
var result = [];
function data(){
    return new Promise((resolve, reject)=>{
        fs.createReadStream('IndiaStateCensusData.csv')
        .pipe(csv({}))
        .on('data', (data) => result.push(data))
        .on('end', () => {
            resolve(result);
        });  
    });
};

function comparePopulation(a, b){
    return a.Population - b.Population;
}

data().then(function(result){
    result.sort(comparePopulation);
});

module.exports.csvData=()=>{
    return result;
}