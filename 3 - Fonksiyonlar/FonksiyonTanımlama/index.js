
// bu kullanımda fonksiyon üstte de altta da tanımlanıp çağrılabilir
numan();
numan();
numan();
numan();

function numan() {
  console.log('merhaba numan');
}


// function exprection tanımlama // üstte tanımlanıp altta çağırlmalı
const canboz=function(){
  console.log('can bozdoğan')
}


canboz();