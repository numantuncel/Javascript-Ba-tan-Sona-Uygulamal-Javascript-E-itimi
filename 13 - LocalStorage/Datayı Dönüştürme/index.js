// burada bir obje array var

const variable=[
    {hobby:"swiming",person:"can"},
    {hobby:"playing card",person:"can"},
    {hobby:"take a trip",person:"can"}
]
// array dan jasona çevirme
console.log(JSON.stringify(variable))

localStorage.setItem('todos',JSON.stringify(variable))

const storedData=localStorage.getItem('todos')


//  json dan array a geri çevirme 
console.log(JSON.parse(storedData))

// jason hale getiriyor 

// [{"hobby":"swiming","person":"can"},
// {"hobby":"playing card","person":"can"},
// {"hobby":"take a trip","person":"can"}
// ]