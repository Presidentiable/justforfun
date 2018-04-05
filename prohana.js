


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");


    var a = document.getElementById("fname").value;
	var b = document.getElementById("sname").value;


	if(a=="Hana" && b=="Joshua"){
		document.getElementById("myPopup").innerHTML = "Love Team for all season!";
	}

	else if(a=="Joshua" && b=="Hana"){
		document.getElementById("myPopup").innerHTML = "SWEET!";
	}


	else if(a=="JOSHUA" && b=="HANA"){
		document.getElementById("myPopup").innerHTML = "peg-ebeg!!!";
	}


	else if(a=="HANA" && b=="JOSHUA"){
		document.getElementById("myPopup").innerHTML = "destiny talaga";
	}

	else if(a=="HANA" && b=="JOSH"){
		document.getElementById("myPopup").innerHTML = "destiny nga naman";
	}

	else if(a=="JOSHUA" && b=="HANAMIE"){
		document.getElementById("myPopup").innerHTML = "May forever nga! <3";
	}


	else if(a=="HANAMIE" && b=="JOSHUA"){
		document.getElementById("myPopup").innerHTML = "May forever nga! <3";
	}

	else if(a=="JOSH" && b=="HANA"){
		document.getElementById("myPopup").innerHTML = "May forever! <3";
	}

	else if(a=="Joshua" && b=="Hanamie"){
		document.getElementById("myPopup").innerHTML = "oooooooy lab lab";
	}

	else if(a=="Hanamie" && b=="Joshua"){
		document.getElementById("myPopup").innerHTML = "matatag to :)";
	}

	else if(a=="Josh" && b=="Hana"){
		document.getElementById("myPopup").innerHTML = "KUNG WALANG DAYAAN, FOREVER YAN!";
	}

	else if(a=="Hana" && b=="Josh"){
		document.getElementById("myPopup").innerHTML = "pakatotoo lang kayo, Greatest Love Story to!";
	}

	else if(a=="" || b==""){
		document.getElementById("myPopup").innerHTML = "lagyan mo naman ng pangalan :|";
	}


	else if(a=="Sanje" && b=="Jemaima"){
		document.getElementById("myPopup").innerHTML = "muling ibalik :)";
	}

	else if(a=="sanje" && b=="jemaima"){
		document.getElementById("myPopup").innerHTML = "muling ibalik :)";
	}

	else if(a=="Jemaima" && b=="Sanje"){
		document.getElementById("myPopup").innerHTML = "muling ibalik :)";
	}

	else if(a=="jemaima" && b=="sanje"){
		document.getElementById("myPopup").innerHTML = "muling ibalik :)";
	}

	else if(a=="Gesille" || b=="gesille" || a=="gesille" || b=="Gesille"){
		document.getElementById("myPopup").innerHTML = "sille, aral ka mabuti ha --Mama and Papa";
	}

	else{
		var myShows = ['mag-aral muna kayo','isang linggong pag-ibig','pwede, pero maraming kokontra','magkakasakitan lang kayo', 'Trip ka lang niya', 'Panakip butas ka lang nya', 'Hindi ka niya mahal, nilandi ka lang', 
		'4 weeks lang itatagal niyo', 'dayaan to', 'tapat si babae, cheater si lalaki', 'tapat si lalaki, cheater si babae'];

		var show = myShows[Math.floor(Math.random() * myShows.length)];

		document.getElementById("myPopup").innerHTML = show;}

}


