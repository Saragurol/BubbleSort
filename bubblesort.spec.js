describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with a single item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
      });
      it('handles an array with a multiple items', function(){
        expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
        expect( bubbleSort([7,9,11,1,8]) ).toEqual( [1,7,8,9,11] );
      });

  });
