/*
  数当てゲーム
  kazuate.js
  2012/12/12
 */

var foo = Math.floor(Math.random()*100)+1;  // コンピュータ側の数値生成（1〜100）

while(myname != yourname){
  if(yourname != ""){

    document.write("名前が違うよ<br />");
  }
  yourname = prompt("あなたのお名前はなんですか？");
}
document.write("こんにちは、" + yourname +"さん");

/*
  20121203  とりあえず動けばいいってくらいのコードなので、また時間のある時にでも書き加える
            昨夜頭痛で眠れなかったので、今日は厳しい...
*/