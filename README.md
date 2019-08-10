Until the 3rd test this was the code
describe("calculator", function(){
    describe("Addition Test", function() {
        it("should return 42", function(){
            expect(addition(20,22)).toBe(42);
        });
        it("should return 26",function() {
            expect(addition(19,7)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
           
            expect(addition("Hichthhikers ","a guy")).toBe("Error!");
        });
    });
});

Until everything changed this was the calc.js code:

function addition(numOne,numTwo){
    if(typeof(numOne)== "number" && typeof(numTwo)== "number"){
    return numOne+numTwo;
   } else{
    alert("Error!");
   }
}

and in calcSpec
describe("calculator", function(){
    describe("Addition Test", function() {
        it("should return 42", function(){
            expect(addition(20,22)).toBe(42);
        });
        it("should return 26",function() {
            expect(addition(19,7)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
           spyOn(window,"alert");
           addition("Hitchhikers", "Guide")
           expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});