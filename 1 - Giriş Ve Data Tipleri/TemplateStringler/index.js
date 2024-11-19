let yaricap=15;
const piSayisi=3.14;

console.log(yaricap,piSayisi);// ikisinin tipi de numberdir.


let daireAlan= piSayisi*yaricap**2;
console.log(daireAlan);

console.log()

const framework1='Angular';
const framework2='React';
const framework3='Vue';


let sonuc= 'Numan Tunçel in bildiği javascript frameworkleri '+framework1+' '+framework2+' '+framework3;
console.log(sonuc);

let sonuc1=`Numan Tunçel in bildiği javascript frameworkleri: ${framework1} ${framework2} ${framework3}`;
console.log(sonuc1);

let html=`
    <h1>${framework1}</h1>
    <h2>${framework2}</h2>
    <h3>${framework3}</h3>
`;
console.log(html);