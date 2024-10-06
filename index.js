const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let Boxone = document.getElementById("boxone")
console.log(Boxone)
let Boxtwo = document.getElementById("boxtwo")
console.log(Boxtwo)

function Password(){
    // Password.innertext= Boxone+ "Hi"
     let Password = Generatepassword()
     let Passwords = Generatepasswords()
    Boxone.innerText=Password
    Boxtwo.innerText = Passwords
    
}
function Generatepassword(){
    let firstpassword = ""
    for(let i =0; i<15; i++) {
        let randomnumber =Math.floor(Math.random() * characters.length)
        console.log(randomnumber)
        firstpassword +=characters[randomnumber]
         console.log(firstpassword)

    }
    return firstpassword
}

function Generatepasswords(){
    let firstpassword = ""
    for(let i =0; i<15; i++) {
        let randomnumber =Math.floor(Math.random() * characters.length)
        console.log(randomnumber)
        firstpassword +=characters[randomnumber]
         console.log(firstpassword)

    }
    return firstpassword
}