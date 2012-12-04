/*
  AKB48名簿
  akb48.js
  2012/12/13
 */

/*
  ごめん年齢や出身地まで知りません
  name:名前
  age:年齢
  home:出身
*/

var akb48 = [
  {"name":"伊豆田 莉奈","age":"","home":""},
  {"name":"入山 杏奈","age":"","home":""},
  {"name":"岩田 華怜","age":"","home":""},
  {"name":"大島 涼花","age":"","home":""},
  {"name":"河西 智美","age":"","home":""},
  {"name":"川栄 李奈","age":"","home":""},
  {"name":"菊地 あやか","age":"","home":""},
  {"name":"小谷 里歩","age":"","home":""},
  {"name":"小林 茉里奈","age":"","home":""},
  {"name":"佐藤 すみれ","age":"","home":""},
  {"name":"佐藤 夏希","age":"","home":""},
  {"name":"篠田 麻里子","age":"","home":""},
  {"name":"高橋 朱里","age":"","home":""},
  {"name":"高橋 みなみ","age":"","home":""},
  {"name":"田野 優花","age":"","home":""},
  {"name":"中塚 智実","age":"","home":""},
  {"name":"仲俣 汐里","age":"","home":""},
  {"name":"仁藤 萌乃","age":"","home":""},
  {"name":"松井 咲子","age":"","home":""},
  {"name":"森川 彩香","age":"","home":""},
  {"name":"横山 由依","age":"","home":""},
  {"name":"渡辺 麻友","age":"","home":""},
  {"name":"秋元 才加","age":"","home":""},
  {"name":"阿部 マリア","age":"","home":""},
  {"name":"板野 友美","age":"","home":""},
  {"name":"内田 眞由美","age":"","home":""},
  {"name":"大島 優子","age":"","home":""},
  {"name":"北原 里英","age":"","home":""},
  {"name":"倉持 明日香","age":"","home":""},
  {"name":"小林 香菜","age":"","home":""},
  {"name":"佐藤 亜美菜","age":"","home":""},
  {"name":"島田 晴香","age":"","home":""},
  {"name":"鈴木 紫帆里","age":"","home":""},
  {"name":"近野 莉菜","age":"","home":""},
  {"name":"永尾 まりや","age":"","home":""},
  {"name":"中田 ちさと","age":"","home":""},
  {"name":"仲谷 明香","age":"","home":""},
  {"name":"藤田 奈那","age":"","home":""},
  {"name":"前田 亜美","age":"","home":""},
  {"name":"増田 有華","age":"","home":""},
  {"name":"松井 珠理奈","age":"","home":""},
  {"name":"松原 夏海","age":"","home":""},
  {"name":"光宗 薫","age":"","home":""},
  {"name":"宮崎 美穂","age":"","home":""},
  {"name":"武藤 十夢","age":"","home":""},
  {"name":"石田 安奈","age":"","home":""},
  {"name":"石田 晴香","age":"","home":""},
  {"name":"市川 美織","age":"","home":""},
  {"name":"岩佐 美咲","age":"","home":""},
  {"name":"梅田 彩佳","age":"","home":""},
  {"name":"大場 美奈","age":"","home":""},
  {"name":"大家 志津香","age":"","home":""},
  {"name":"柏木 由紀","age":"","home":""},
  {"name":"片山 陽加","age":"","home":""},
  {"name":"加藤 玲奈","age":"","home":""},
  {"name":"小嶋 菜月","age":"","home":""},
  {"name":"小嶋 陽菜","age":"","home":""},
  {"name":"小森 美果","age":"","home":""},
  {"name":"島崎 遥香","age":"","home":""},
  {"name":"竹内 美宥","age":"","home":""},
  {"name":"田名部 生来","age":"","home":""},
  {"name":"中村 麻里子","age":"","home":""},
  {"name":"名取 稚菜","age":"","home":""},
  {"name":"野中 美郷","age":"","home":""},
  {"name":"藤江 れいな","age":"","home":""},
  {"name":"峯岸 みなみ","age":"","home":""},
  {"name":"山内 鈴蘭","age":"","home":""},
  {"name":"渡辺 美優紀","age":"","home":""}
];

var Num;
document.write("<p>メンバーは「"+akb48.length+"」名います</p>");
while("99" != Num){
  Num = prompt("何番の詳細を見ますか？（99と打つと一覧を表示して終了します）");
  if(Num == "99"){
    for(i=0;i<akb48.length;i++){
      document.write("名前："+akb48[i].name+"<br />");
      document.write("年齢："+akb48[i].age+"<br />");
      document.write("出身："+akb48[i].home+"<br /><br />");
    };
  }else{
    document.write("名前："+akb48[Num].name+"<br />");
    document.write("年齢："+akb48[Num].age+"<br />");
    document.write("出身："+akb48[Num].home+"<br /><br />");
  };
}