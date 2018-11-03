// footer
function foot() {
	var footSet = new Array();
		footSet[1] = "http://name.mobilist.mobi/in/90757";
		footSet[2] = "http://wapday.topz.mobi/in/90758";
		footSet[3] = "http://adzwap.topz.mobi/in/90761";
		footSet[4] = "http://wap.toplistcreator.eu/in.php?nr=14974";

	document.write('<p style='+'"'+'text-align: left; font-family: verdana; font-size: 11px'+'"'+'>Partners: <a href='+'"'+footSet[1]+'"'+'>name mobiList MOBI</a> &nbsp; <a href='+'"'+footSet[2]+'"'+'>wapDAY TopZ MOBI</a> &nbsp; <a href='+'"'+footSet[3]+'"'+'>ADZwap TopZ MOBI</a> &nbsp; <a href='+'"'+footSet[4]+'"'+'>WAP TopListCreator EU</a></p>');
}

// counter
function disp_count() {
	document.write('<p><iframe src='+'"'+'http://hitch.unaux.com/count.php'+'"'+' width='+'"'+'98'+'"'+' height='+'"'+'37'+'"'+' style='+'"'+'border: none'+'"'+'></iframe></p>');
}

// footer $1
function members(){
	document.write('<p>Hitch &copy; 2018 &nbsp;-&nbsp; For support, send mail to <a href='+'"'+'mailto:redist@gmx.es'+'"'+'>redist@gmx.es</a></p>');
}

// ad top
function adtop() {
	var min = 1;
	var max = 1;
	var get_seed = Math.floor(Math.random() * (max - min + 1)) + min;

	if (get_seed == 1)
		{
			document.write('<p align='+'"'+'center'+'"'+' style='+'"'+'font-family: verdana; font-size: 10px;'+'"'+'>Ad&nbsp;<a href='+'"'+'https://adult.xyz/?id=17792889'+'"'+'><img border='+'"'+'0'+'"'+' src='+'"'+'https://cdn.adult.xyz/images/banners/adult.728x90.2.gif'+'"'+' width='+'"'+'728'+'"'+' height='+'"'+'90'+'"'+' title='+'"'+'Adult.xyz - shorten links and earn money!'+'"'+' /></a><br /><a href='+'"'+'https://adult.xyz/?id=17792889'+'"'+'>Get paid to share your links!</a></p>');
		}
}

// ad left
function adleft() {
	var min = 1;
	var max = 1;
	var get_seed = Math.floor(Math.random() * (max - min + 1)) + min;

	if (get_seed == 1)
		{
			document.write('<p align='+'"'+'left'+'"'+' style='+'"'+'font-family: verdana; font-size: 10px;'+'"'+'>Ad&nbsp;<a href='+'"'+'https://adult.xyz/?id=17792889'+'"'+'><img border='+'"'+'0'+'"'+' src='+'"'+'https://cdn.adult.xyz/images/banners/adult.468x60.5.gif'+'"'+' width='+'"'+'468'+'"'+' height='+'"'+'60'+'"'+' title='+'"'+'Adult.xyz - shorten links and earn money!'+'"'+' /></a><br /><a href='+'"'+'https://adult.xyz/?id=17792889'+'"'+'>Get paid to share your links!</a></p>');
		}
}

// ad bottom
function adbottom() {
	var min = 1;
	var max = 1;
	var get_seed = Math.floor(Math.random() * (max - min + 1)) + min;
	

	if (get_seed == 1)
		{
			document.write('<p align='+'"'+'center'+'"'+' style='+'"'+'font-family: verdana; font-size: 10px;'+'"'+'>Ad&nbsp;<a href='+'"'+'https://adult.xyz/?id=17792889'+'"'+'><img border='+'"'+'0'+'"'+' src='+'"'+'https://cdn.adult.xyz/images/banners/adult.300x250.1.gif'+'"'+' width='+'"'+'300'+'"'+' height='+'"'+'250'+'"'+' title='+'"'+'Adult.xyz - shorten links and earn money!'+'"'+' /></a></p>');
		}
}
