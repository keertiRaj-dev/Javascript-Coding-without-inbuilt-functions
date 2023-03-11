//reverse the words of the string without inbuilt functions


const sentance = "my name is keerti raj";
 var temp = "";
 var array = [];
for(i=0; i<sentance.length; i++) {
    if(sentance.charAt(i) != " " ){
        temp = temp.concat(sentance.charAt(i));
        if(i==sentance.length-1){
        console.log(i)
       array.push(temp);
   }
  
    }
   else if(sentance.charAt(i) == " " ){
       console.log(i)
       array.push(temp);
       temp = "";
   }
   
  
}
console.log(array)
var reverse = "";
for(i=array.length-1; i>=0; i--) {
  reverse =   reverse.concat(array[i]).concat(" ");
  
}
  console.log(reverse)
