const assert = require('chai').assert;
const csvData = require('../src/IndianCensusAnalyser').csvData;

describe('indian census analyser', function(){
    it('IndianCensusAnalyser should return total count', ()=>{
        assert.equal(csvData().length, 28);
    });

    it('IndianCensusAnalyser should return most populated state', ()=>{
        const arr = csvData();
        assert.equal(arr[arr.length-1].State, 'Uttar Pradesh');
    });

    it('IndianCensusAnalyser should return most DensityPerSqKm state', ()=>{
        const arr2 = csvData().sort(function(a, b){
            return a.DensityPerSqKm - b.DensityPerSqKm;
        });
        assert.equal(arr2[arr2.length-1].State, 'Bihar');
    });

    it('IndianCensusAnalyser should return most DensityPerSqKm state', ()=>{
        const arr = csvData().sort(function(a, b){
            return a.DensityPerSqKm - b.DensityPerSqKm;
        });
        assert.equal(arr[arr.length-1].State, 'Bihar');
    });
});
