const assert = require('chai').assert;
const IndiaStateCensusData = require('../src/IndianCensusAnalyser');
const obj = new IndiaStateCensusData();
var result=[];
describe('indian census analyser', ()=>{
    it('Given IndianCensusData When loaded then return total count', ()=>{
        const arr = obj.data((error, result)=>{
            if(error){
                console.log(error)
            }else{
                assert.equal(result.length, 29);
                result.splice(0, result.length)
            }    
        })
    });

    it('Given IndianCensusData When sorted population wise then return sored data', ()=>{
        obj.data((err, result)=>{
            const arr2 = obj.sortingPopulation(result);
            assert.equal(arr2[arr2.length-1].Population, 199812341);
            result.splice(0, result.length)
        });
    });

    it('Given IndianCensusData When sorted population wise then return most populated state', ()=>{
        obj.data((err, result)=>{
            const arr2 = obj.sortingPopulation(result);
            assert.equal(arr2[arr2.length-1].State, 'Uttar Pradesh');
            result.splice(0, result.length)
        });
    });
});    
    









