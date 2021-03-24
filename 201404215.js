module.exports = {
    bubbleSort: function(arr){
        var len = arr.length;
    
        for (var i = 0; i < len ; i++) {
            for(var j = 0 ; j < len - i - 1; j++){
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },

    mismovalor: function(number) {
        return number * number;
    },
    potencia: function(base, exponente){
        var res = 1;
        for(var i = 0; i < exponente; i++){
            res = res * base;
        }
        return res;
    },
    palindromo: function(palabra){
      var invertida = "";
      var x = palabra.length-1;
      while(x>=0){
        invertida += palabra[x];
        x--;
      }
      if(palabra === invertida){
          return true;
      } else {
          return false;
      }
    },
    ContarCaracteres:function(texto){
        return ("la palabra tiene: "+texto.length+" letras");
    }
}