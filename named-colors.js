const plugin=required('tailwindcss/plugin');
// const nameColors=[
   
// "pearl",
// "alabaster",
// "snow",
// "ivory",
// "cream",
// "egg shell",
// "cotton",
// "chiffon",
// "salt",
// "lace",
// "babypink",
// 'linen',
// "bone",
// 'daisy',
// "powder",
// "frost",
// "porcelain",
// "parchment",
// "nce",
// "beige",
// "macaroon",
// "hazel wood",
// "granola"

// ]
module.exports=plugin.withOptions(()=>{
return function({addUtilities}){
    addUtilities({
        '.bg-coral':{background:'coral'}
    })
}
})