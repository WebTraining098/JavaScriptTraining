/*
  数当てゲーム
  kazuate.js
  2012/12/12
 */

var PcNum = Math.floor(Math.random()*100)+1;  // コンピュータ側の数値生成（1〜100）
var MyNum;
while(PcNum != MyNum){
  MyNum = prompt("値はいくつですか？");
  if(MyNum > PcNum){
    document.write("大きすぎる<br />");
  }else if(MyNum < PcNum){
    document.write("小さいっす<br />");
  }
}

document.write("ぴったり<br />");

/*
  20121203  とりあえず動けばいいってくらいのコードなので、また時間のある時にでも書き加える
            昨夜頭痛で眠れなかったので、今日は厳しい...
*/