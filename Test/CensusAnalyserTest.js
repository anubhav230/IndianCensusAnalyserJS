const assert = require('chai').assert;
const csvData = require('../src/IndianCensusAnalyser').csvData;
describe('indian census analyser', function(){
    it('IndianCensusAnalyser should return total count', function(){
        assert.equal(csvData().length, 28);
    });

    it('IndianCensusAnalyser should return most populated state', function(){
        const arr = csvData();
        assert.equal(arr[arr.length-1].State, 'Uttar Pradesh');
    });

    it('IndianCensusAnalyser should return least populated state', function(){
        const arr = csvData();
        assert.equal(arr[0].State, 'Sikkim');
    });
});
