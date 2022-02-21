(() => {
  //ex02
  console.log("ほしりゅうと");

  //ex03
  let lastName = "星";
  let firstName = "竜斗";
  console.log(lastName);
  console.log(firstName);

  //ex04
  let age = 1;
  if(age < 20){
    console.log("未成年です")
  } else {
    console.log("成人です")
  }


  //ex04-2
  if(0 <= age && age <= 4){
    console.log("幼年期");
  } else if(5 <= age && age <= 14){
    console.log("少年期");
  } else if (15 <= age && age <= 24){
    console.log("青年期");
  }

  //ex05
  let num = 0;
  for(let i = 0; i <= 10; i++) {
    let num2 = num + i;
    num = num2;
  }
  console.log(num);

  //ex05-2
  for(let i=1; i<=9; i++){
    let arr1 = [];
    for(let j=1; j<=9; j++){
      var result = ('  '+(i*j)).slice(-2);
      arr1.push(result);
    }
    console.log(arr1.join(" "));
  }

  //ex06
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let num3 = 0;
  for(let i = 0; i <= 9; i++) {
    let num4 = num3 + arr2[i];
    num3 = num4;
  }
  console.log(num3 + " for文");

  let num5 = 0;
  for(const n of arr2){
    num5 += n;
  }
  console.log(num5 + " for-of");

  //ex6-2
  let mozi = "";
  let ex06_2 = arr2.filter((i) => {
    return i % 2 != 0
  })
  for(const n of ex06_2){
    mozi += " " + n;
  }
  console.log(mozi);

  for (let number of arr2) {
    if (number % 2 === 1) {
      console.log(number);
    }
  }


  //07
  let con = {nihon: "toukyo", suriranka: "surija", tai: "kurunte-pu"};
  console.log(con["nihon"]);
  console.log(con["tai"]);
  con["tai"] = "kuru";
  console.log(con["tai"]);


})();

