alert("Margulan Zhumabek, CS-2110");
var today = new Date();
var year = today.getFullYear();

var weekdays =
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = weekdays[today.getDay()];

var date = today.getDate();

var month = today.getMonth() + 1;

var curr = "(" + today.getHours() +":" + today.getMinutes() + ":" + today.getSeconds() + ")"

alert("Year: " + year +"\n" + "Today is: " + day +"\n"  + "Date: " + date +"\n"  + "Month: " + month +"\n"  + "Current times is: " + curr +"\n");
function freedom(CurrentDate)
{
	var TYear = CurrentDate.getFullYear();
        var TDay = new Date("June, 18, 2023");
        TDay.getFullYear(TYear);
        var DayCount=(TDay-CurrentDate)/(1000*60*60*24);
        DayCount=Math.round(DayCount);
    return(DayCount);
}

var Today 	= new Date();
	var z1 = freedom(Today);
	alert(z1 + " days left until the freedom!");

  function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
