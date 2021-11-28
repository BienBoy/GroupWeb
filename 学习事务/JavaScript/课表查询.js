window.onload=function()
{
	var Mon = document.getElementsByClassName("Mon");
	var Tue = document.getElementsByClassName("Tue");
	var Wed = document.getElementsByClassName("Wed");
	var Thu = document.getElementsByClassName("Thu");
	var Fri = document.getElementsByClassName("Fri");
	var Sat = document.getElementsByClassName("Sat");
	var Sun = document.getElementsByClassName("Sun");
	var weekday=[Mon, Tue, Wed, Thu, Fri, Sat, Sun];
	var td = document.getElementsByTagName("td");
	var term = document.getElementById("term");
	var week = document.getElementById("week");
	var lookup = document.getElementById("lookup");
	var title = document.getElementById("titleTr");
	course();
	lookup.addEventListener("click", course, false);
	function course(){
		for (var i = 0; i<weekday.length; i++)
		{
			for (var j = 0; j<Mon.length; j++)
				weekday[i][j].innerText = "";
		}
		var weekNow = week.value.slice(4)
		weekNow = parseInt(weekNow);
		if (term.value != "2021fall")
		{
			for (var i = 0; i<weekday.length; i++)
			{
				for (var j = 0; j<Mon.length; j++)
					weekday[i][j].innerText = "";
			}
		}
		else if (weekNow<2 || weekNow > 17)
		{
			for (var i = 0; i<weekday.length; i++)
			{
				for (var j = 0; j<Mon.length; j++)
					weekday[i][j].innerText = "";
			}
		}
		else
		{
			Tue[0].innerHTML=Thu[0].innerHTML=Thu[2].innerHTML="工科高等代数<br>（三）304";
			Wed[0].innerHTML=Fri[1].innerHTML=Fri[3].innerHTML="工科数学分析<br>（三）311";
			if (weekNow < 11)
			{
				Wed[4].innerHTML="走进软件<br>（三）204";
				Wed[3].innerHTML="程序设计基础<br>（五）217";
				Fri[2].innerHTML="中国共产党历史<br>（三）213）"
				if (weekNow>2)
					Sun[4].innerHTML="中国共产党基本知识<br>主M302";
			}
			else if (weekNow == 11)
			{
				Wed[4].innerHTML="走进软件<br>（三）204";
				Sun[4].innerHTML="中国共产党基本知识<br>主M302";
			}
			else if(weekNow < 15)
				Wed[4].innerHTML="走进软件<br>（三）204";
		}
		var year = term.value.slice(0,4)
		var left = title.innerText.slice(4);
		title.innerText=year+left.replace(/[\d]+/,weekNow); 
	}
}