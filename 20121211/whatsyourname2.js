/*
  What's Your Name
  whatsyourname2.js
  2012/12/11
 */

var myname = "鈴木";
var yourname = "";

while(myname != yourname){
  if(yourname != ""){
    document.write("名前が違うよ<br />");
  }
  yourname = prompt("あなたのお名前はなんですか？");
}
document.write("こんにちは、" + yourname +"さん");

