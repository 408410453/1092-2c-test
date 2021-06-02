function score(){
    var score = prompt("請輸入分數(需大於90分方可進入):")

    while(true){
        if(score>100 || score<0){
            alert("輸入錯誤,請重新輸入!")
            score = prompt("請輸入密碼:")
        }else if (score >=90){
            alert("優等")
            break;
        }else if (score>=80){
            alert("甲等")
            alert("分數不足!無法加入")
            score = prompt("請輸入密碼:")
        }
        else if (score>=70){
            alert("乙等")
            alert("分數不足!無法加入")
            score = prompt("請輸入密碼:")
        }
        else if (score>=60){
            alert("丙等")
            alert("分數不足!無法加入")
            score = prompt("請輸入密碼:")
        }else{
            alert("不及格")
            alert("分數不足!無法加入")
            score = prompt("請輸入密碼:")
        } 
    }
}

function total() {
    var total = prompt("請輸入一個數字:")
    var sum = 0

    for (var i=0;i<=total;i++){
        sum+=i
    }
    alert("總合為"+sum)
}

function password() {

    do{
        var password = prompt("請輸入1~100:")

        if (password<0 || password>100){
            alert("輸入錯誤! 請重新輸入")
            
        }else if (password>87){
            alert("密碼提示: 0~"+password)
           
        }else if(password<87){
            alert("密碼提示:"+password+"~100")
           
        }
    }while(password != 87)

}


