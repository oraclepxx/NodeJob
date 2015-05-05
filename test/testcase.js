/**
 * Created by xinpan on 04/30/2015.
 */

describe("A suite", function () {

    it("contains specs with an expectation", function () {
        expect(true).toBe(true);
    });

    it("and so is a specs", function () {
        var a = true;
        expect(a).toBe(true);
    });

    it("and has a positive case", function () {
        expect(true).toBe(true);
    });

    it("and can have a negative case", function () {
        expect(false).not.toBe(true);
    });

    it("test number", function () {
        console.log("start")
        var start = new Date().getSeconds();
        while (new Date().getSeconds() < start + 60) {
        }
        expect(1 + 2).toBe(3);
    });

});

