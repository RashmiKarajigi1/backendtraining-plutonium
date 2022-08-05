function trim(){
    const a = "    Rashmi          "
    console.log(a.trim())
   }
   
   function changetoLowerCase(){
     const b = "JAVASCRIPT IS A PROGRAMMING LANGUAGE"
     console.log(b.toLocaleLowerCase())
   }
   function changeToUpperCase(){
    const c = "i am a trainee at functionup from plutonium bach"
    console.log(c.toLocaleUpperCase())
   }
   
   
   module.exports.trim = trim
   module.exports.changetoLowerCase = changetoLowerCase
   module.exports.changeToUpperCase = changeToUpperCase