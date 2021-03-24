const assert = require('chai').assert;
const expect = require('chai').expect;
const carne = require('../201404215');


describe('bubbleSort()', function(){
        it('debe realizar metodo de burbuja y retornar arreglo ordenado', function(){
            let result = carne.bubbleSort([5,9,1,12,4,74])
            expect([1,4,5,9,12,74]).to.eql(result);
        });
    });


    describe('mismovalor()', function(){
        it('debe retornar la multiplicacion de un numero por si mismo', function(){
            let result = carne.mismovalor(8)
            assert.equal(result, 64);
        });
    });

    describe('potencia()', function(){
        it('debe realizar la operacion de potencia de los 2 valores ingresados', function(){
            let resultado = carne.potencia(3, 3);
            assert.isAbove(resultado, 25);
        });
    
        it('Debe devolver el valor de la operacion que realizo', function(){
            let resultado = carne.potencia(3, 3);
            assert.typeOf(resultado, 'number');
        });
      });
    
    
      describe('palindromo()', function(){
        it('Debe devolver el resultado si la palabra es un palindromo o no lo es', function(){
            let resultado = carne.palindromo('ana');
            assert(resultado == true);
        });
    
        it('Debe devolver el resultado si la palabra es un palindromo o no lo es', function(){
          let resultado = carne.palindromo('juanito');
          assert(resultado == false);
        });
    });

        describe('ContarCaracteres()', ()=>{
            it('debe de retornar un string con la cantidad de caracteres en una entrada', ()=>{
                let palabra= carne.ContarCaracteres("probando metodo");
                assert.typeOf(palabra, 'string');
            })
        });