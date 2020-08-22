const assert = require('chai').assert;
const csvData = require('../src/IndianCensusAnalyser').csvData;
describe('indian census analyser', function(){
    it('IndianCensusAnalyser should return total count', function(){
        assert.equal(csvData(), 28);
    }); 
});