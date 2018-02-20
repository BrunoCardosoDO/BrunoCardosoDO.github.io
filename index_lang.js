function setLang(){
	switch (location.hash.substr(1)){
		case "l=1":
			document.getElementById("pt-BR").style.display='none';
			break;
		case "l=2":
			document.getElementById("en-US").style.display='none';
			break;
		default:
			document.getElementById("pt-BR").style.display='none';
			break;
	}
}
