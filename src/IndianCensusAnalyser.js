const csv = require('csv-parser')
const fs = require('fs');
const { resolve } = require('path');
var result = [];
class IndiaStateCensusData{
    constructor(){
    }
    data(callback){
            fs.createReadStream('IndiaStateCensusData.csv')
            .pipe(csv({}))
            .on('data', (data) => result.push(data))
            .on('end', () => {
                return callback(null, result)
            });
    };

    sortingPopulation(arr){
        let temp;
        for(let i=0; i < 28; i++){
            for(let j=0; j < 28; j++){
                if(parseInt(arr[j].Population) > parseInt(arr[j+1].Population)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }

    sortingAreaInSqKm(arr){
        let temp;
        for(let i=0; i < 29; i++){
            for(let j=0; j < 29; j++){
                if(parseInt(arr[j].DensityPerSqKm) > parseInt(arr[j+1].DensityPerSqKm)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }
}

module.exports = IndiaStateCensusData;