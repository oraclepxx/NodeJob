/**
 * Created by xinpan on 04/30/2015.
 */

describe("A suite", function () {

    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });

    it("and so is a spec", function () {
        var a = true;

        expect(a).toBe(true);
    });

    it("and has a positive case", function () {
        expect(true).toBe(true);
    });

    it("and can have a negative case", function () {
        expect(false).not.toBe(true);
    });

    it("test number", function(){
        expect(1 + 2).toBe(3);
    });

});

