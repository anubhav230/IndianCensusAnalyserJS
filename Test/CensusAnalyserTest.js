const assert = require('chai').assert;
const IndiaStateCensusData = require('../src/IndianCensusAnalyser');
const obj = new IndiaStateCensusData();
//var result=[];
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
            const population = obj.mostPopulationData(result);
            assert.equal(population, 199812341);
            result.splice(0, result.length)
        });
    });

    it('Given IndianCensusData When sorted population wise then return most populated state', ()=>{
        obj.data((err, result)=>{   
            const state = obj.mostPopulatedState(result);
            assert.equal(state, 'Uttar Pradesh');
            result.splice(0, result.length)
        });
    });

    it('Given IndianCensusData When sorted population wise then return least populated state', ()=>{
        obj.data((err, result)=>{   
            const state = obj.leastPopulatedState(result);
            assert.equal(state, 'Sikkim');
            result.splice(0, result.length)
        });
    });

    it('Given IndianCensusData When sorted AreaInSqKm wise then return most AreaInSqKm', ()=>{
        obj.data((err, result)=>{   
            const AreaInSqKm = obj.mostAreaInSqKm(result);
            assert.equal(AreaInSqKm, 342239);
            result.splice(0, result.length)
        });
    });

    it('Given IndianCensusData When sorted AreaInSqKm wise then return most AreaInSqKm state', ()=>{
        obj.data((err, result)=>{   
            const state = obj.mostAreaInSqKmState(result);
            assert.equal(state, 'Rajasthan');
            result.splice(0, result.length)
        });
    });

    it('Given IndianCensusData When sorted AreaInSqKm wise then return least AreaInSqKm state', ()=>{
        obj.data((err, result)=>{   
            const state = obj.leastAreaInSqKmState(result);
            assert.equal(state, 'Goa');
            result.splice(0, result.length)
        });
    });

    it('Given IndianCensusData When sorted DensityPerSqKm wise then return highest DensityPerSqKm', ()=>{
        obj.data((err, result)=>{   
            const DensityPerSqKm = obj.highestDensityPerSqKm(result);
            assert.equal(DensityPerSqKm, 1102);
            result.splice(0, result.length)
        });
    });
});    
    









