describe('pizza', function(){
    var pizza;
    beforeEach(function(){
        pizza = new Pizza();
    });
    it("pizza should exists", function() {

        expect(pizza).toBeDefined();
    });

    it('should allow for 3 sizes: small, medium, large', function(){
        pizza.setSize('small');
        expect(pizza.size).toBe('small');
    });
})