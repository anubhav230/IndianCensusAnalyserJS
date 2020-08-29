const assert = require('chai').assert;
const IndiaStateCensusData = require('../src/IndianCensusAnalyser');
const filePath = 'IndiaStateCensusData.csv';
const filePath2 = 'duplicate.csv';
//const obj = new IndiaStateCensusData();

describe('indian census analyser', ()=>{
    const obj = new IndiaStateCensusData();
    var arr = [];
    before(function(callback){    
        obj.data(filePath, (error, result)=>{
            if(error){
            console.log(error);
            }else{
                callback()
                arr =  result;
                //console.log(arr.length)
            }
        });
    });  

    it('Given IndianCensusData When loaded should return total count', ()=>{
        assert.equal(arr.length, 29);
    });
   
    it('Given IndianCensusData When loaded wrong file should return false', ()=>{
        obj.data(filePath2, (error, result)=>{
            if(error){
                console.log(error);
            }else{
            assert.isFalse(result);
            }    
        })
    });

    it('Given IndianCensusData When loaded should get headers', ()=>{
        obj.data(filePath, (result)=>{
            let csvHeader = [ 'State', 'Population', 'AreaInSqKm', 'DensityPerSqKm' ]
            header = obj.getHeaders(arr);
            assert.equal(header, csvHeader); 
        })
    });

    it('Given IndianCensusData When loaded wrong file should not be equal', ()=>{
        obj.data(filePath2, (result)=>{
            let csvHeader = [ 'State', 'Population', 'AreaInSqKm', 'DensityPerSqKm' ]
            header = obj.getHeaders(result);
            assert.notEqual(header, csvHeader); 
        })
    });


    it('Given IndianCensusData When sorted population wise should return sored data', ()=>{
        var type = 'Population'
        var base = 'Population'
        const population = obj.maxResult(arr, type, base);
        assert.equal(population, 199812341);
    });

    it('Given IndianCensusData When returning wrong data should not equal to real answer', ()=>{
        obj.data(filePath2, (result)=>{
            var type = 'Population'
            var base = 'Population'
            const population = obj.maxResult(result, type, base);
            assert.notEqual(population, 199812341);
        }); 
    });

    it('Given IndianCensusData When sorted population wise should return most populated state', ()=>{
        var type = 'Population'
        var base = 'State'   
        const state = obj.maxResult(arr, type, base);
        assert.equal(state, 'Uttar Pradesh');
    });

    it('Given IndianCensusData When returning wrong data should not equal to real state', ()=>{
        obj.data(filePath2, (result)=>{
            var type = 'Population'
            var base = 'State'   
            const state = obj.maxResult(result, type, base);
            assert.notEqual(state, 'Uttar Pradesh');
        });
    });

    it('GivenIndianCensusData When sorted population wise should return least populated state', ()=>{ 
        var type = 'Population'
        var base = 'State'  
        const state = obj.minResult(arr, type, base);
        assert.equal(state, 'Sikkim');
    });

    it('Given IndianCensusData When sorted AreaInSqKm wise should return most AreaInSqKm', ()=>{
        var type = 'AreaInSqKm'
        var base = 'AreaInSqKm'  
        const AreaInSqKm = obj.maxResult(arr, type, base);
        assert.equal(AreaInSqKm, 342239);
    });

    it('Given IndianCensusData When sorted AreaInSqKm wise should return least AreaInSqKm', ()=>{
        var type = 'AreaInSqKm'
        var base = 'AreaInSqKm'  
        const AreaInSqKm = obj.minResult(arr, type, base);
        assert.equal(AreaInSqKm, 3702);
    });

    it('Given IndianCensusData When sorted AreaInSqKm wise should return most AreaInSqKm state', ()=>{ 
        var type = 'AreaInSqKm'
        var base = 'State'  
        const state = obj.maxResult(arr, type, base);
        assert.equal(state, 'Rajasthan');
    });

    it('Given IndianCensusData When sorted AreaInSqKm wise should return least AreaInSqKm state', ()=>{ 
        var type = 'AreaInSqKm'
        var base = 'State'  
        const state = obj.minResult(arr, type, base);
        assert.equal(state, 'Goa');
    });

    it('Given IndianCensusData When sorted DensityPerSqKm wise should return highest DensityPerSqKm', ()=>{
        var type = 'DensityPerSqKm'
        var base = 'DensityPerSqKm'   
        const DensityPerSqKm = obj.maxResult(arr, type, base);
        assert.equal(DensityPerSqKm, 1102);
    });

    it('Given IndianCensusData When sorted DensityPerSqKm wise should return lowest DensityPerSqKm', ()=>{
        var type = 'DensityPerSqKm'
        var base = 'DensityPerSqKm'  
        const DensityPerSqKm = obj.minResult(arr, type, base);
        assert.equal(DensityPerSqKm, 50);
    });

    // it('Given CensusData When sorted DensityPerSqKm wise should return highest DensityPerSqKm state', ()=>{ 
    //     var type = 'DensityPerSqKm'
    //     var base = 'State'   
    //     const state = obj.maxResult(arr, type, base);
    //     assert.equal(state, 'Bihar');
    // });

    it('Given CensusData When sorted DensityPerSqKm wise should return lowest DensityPerSqKm state', ()=>{
        var type = 'DensityPerSqKm'
        var base = 'State'    
        const state = obj.minResult(arr, type, base);
        assert.equal(state, 'Arunachal Pradesh');
    });
});   