//max distance between two characters in a string

const string = "banana is beautiful fruit";
const char = "t";
var dist = 0;
var a=0;
var b=0;
var flag = false;
for(i=0; i<string.length; i++) {
    if(string.charAt(i)==char){
        flag = true;
    for(j=string.length-1; j>i; j--){
        if(string.charAt(j)==char){
              dist = j-i;
              b=j;
              a=i;
             break;
        }
    }
}
if(flag==true)
break;
}

 console.log(b + "-" + a + "=" + dist);
