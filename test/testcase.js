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
        var start = new Date().getTime();
        //while(new Date().getTime() < start + 300){
            doIt();
        //}
    });

    function doIt(){
        expect(1 + 2).toBe(4);
    }

});

