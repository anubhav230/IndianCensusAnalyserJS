const assert = require('chai').assert;
const a = require('../app').a;
describe('indian census analyser', function(){
    it('app should return total count', function(){
        assert.equal(a(), 28);
    }); 
});