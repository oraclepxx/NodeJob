/**
 * Created by xinpan on 04/30/2015.
 */

//describe("A suite", function () {
//    it("contains spec with an expectation", function () {
//        expect(true).toBe(true);
//    });
//});
//
//describe("A suite is just a function", function () {
//    var a;
//
//    it("and so is a spec", function () {
//        a = true;
//
//        expect(a).toBe(true);
//    });
//});


describe("A suite", function () {

    it("and has a positive case", function () {
        expect(true).toBe(true);
    });

    it("and can have a negative case", function () {
        expect(false).not.toBe(true);
    });
});
