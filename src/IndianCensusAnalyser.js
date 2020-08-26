const csv = require('csv-parser')
const fs = require('fs');
const { resolve } = require('path');
var result = [];
var result2 = [];
class IndiaStateCensusData{
    constructor(){
    }

    data(callback) {
        fs.createReadStream('IndiaStateCensusData.csv')
        .pipe(csv({}))
        .on('data', (data) => result.push(data))
        .on('end', () => {
            return callback(null, result)
        });
    };

    sortingPopulation(arr){
        let temp;
        for(let i=0; i < arr.length-1; i++){
            for(let j=0; j < arr.length-1; j++){
                if(parseInt(arr[j].Population) > parseInt(arr[j+1].Population)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }

    mostPopulationData(arr){
        const result = this.sortingPopulation(arr);
        return result[result.length-1].Population
    }

    mostPopulatedState(arr){
        const result = this.sortingPopulation(arr);
        return result[result.length-1].State
    }

    leastPopulatedState(arr){
        const result = this.sortingPopulation(arr);
        return result[0].State
    }

    sortingAreaInSqKm(arr){
        let temp;
        for(let i=0; i < arr.length-1; i++){
            for(let j=0; j < arr.length-1; j++){
                if(parseInt(arr[j].AreaInSqKm) > parseInt(arr[j+1].AreaInSqKm)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }

    mostAreaInSqKm(arr){
        const result = this.sortingAreaInSqKm(arr);
        return result[result.length-1].AreaInSqKm;
    }

    mostAreaInSqKmState(arr){
        const result = this.sortingAreaInSqKm(arr);
        return result[result.length-1].State;
    }

    leastAreaInSqKmState(arr){
        const result = this.sortingAreaInSqKm(arr);
        return result[0].State;
    }

    sortingDensity(arr){
        let temp;
        for(let i=0; i < arr.length-1; i++){
            for(let j=0; j < arr.length-1; j++){
                if(parseInt(arr[j].DensityPerSqKm) > parseInt(arr[j+1].DensityPerSqKm)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }

    highestDensityPerSqKm(arr){
        const result = this.sortingDensity(arr);
        return result[result.length-1].DensityPerSqKm;
    }

    lowestDensityPerSqKm(arr){
        const result = this.sortingDensity(arr);
        return result[0].DensityPerSqKm;
    }

    highestDensityPerSqKmState(arr){
        const result = this.sortingDensity(arr);
        return result[result.length-1].State;
    }

    lowestDensityPerSqKmState(arr){
        const result = this.sortingDensity(arr);
        return result[0].State;
    }
}

module.exports = IndiaStateCensusData;