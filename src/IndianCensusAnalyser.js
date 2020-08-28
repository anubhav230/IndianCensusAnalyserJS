const csv = require('csv-parser')
const fs = require('fs');
const { resolve } = require('path');
const { error } = require('console');
var result = [];
var result2 = [];
class IndiaStateCensusData{
    constructor(){
    }
    data(filePath, callback) {
            fs.createReadStream(filePath)
            .pipe(csv({}))
            .on('data', (data) => result.push(data))
            .on('end', () => {
                return callback(null, result)
            });
    };

    swop(arr,j){
        let temp;
        temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
    }

    sortingData(arr, type){
        for(let i=0; i < arr.length-1; i++){
            for(let j=0; j < arr.length-1; j++){
                if(type == 'Population')
                if(parseInt(arr[j].Population) > parseInt(arr[j+1].Population))
                this.swop(arr, j);
                if(type == 'AreaInSqKm')
                if(parseInt(arr[j].AreaInSqKm) > parseInt(arr[j+1].AreaInSqKm))
                this.swop(arr, j);
                if(type == 'DensityPerSqKm')
                if(parseInt(arr[j].DensityPerSqKm) > parseInt(arr[j+1].DensityPerSqKm))
                this.swop(arr, j);
             }
        }
        return arr;
    }

    maxResult(arr, type, base){
        const result = this.sortingData(arr, type);
        if(base == 'Population')
        return result[result.length-1].Population
        if(base == 'AreaInSqKm')
        return result[result.length-1].AreaInSqKm;
        if(base == 'DensityPerSqKm')
        return result[result.length-1].DensityPerSqKm;
        if(base == 'State')
        return result[result.length-1].State
    }

    minResult(arr, type, base){
        const result = this.sortingData(arr, type, base);
        if(base == 'Population')
        return result[0].Population
        if(base == 'AreaInSqKm')
        return result[0].AreaInSqKm;
        if(base == 'State')
        return result[0].State
        if(base == 'DensityPerSqKm')
        return result[0].DensityPerSqKm;
    }
 }

module.exports = IndiaStateCensusData;