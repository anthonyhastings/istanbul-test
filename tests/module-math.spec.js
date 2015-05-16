'use strict';

describe('Math Module', function() {

    it('should successfully add numbers together', function() {
        var calculation = App.Maths.add(1, 3);
        expect(calculation).to.equal(4);
    });

    it('should convert strings to numbers', function() {
        var calculation = App.Maths.add('2', '1');
        expect(calculation).to.equal(3);
    });

});