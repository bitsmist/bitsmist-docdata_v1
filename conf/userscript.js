//navigateToStartPage();

function navigateToStartPage()
{

	if (window.location.pathname == "/" || ( window.location.pathname == "/doku.php" && window.location.search == ""))
	{
		var lang = navigator.language || navigator.userLanguage || "en";
		if (lang)
		{
			var id = lang.substring(0, 2) + ":start";
			var url = ( window.location.href.indexOf("doku.php") > -1 ? "/doku.php?id=" + id : "/" + id.replaceAll(":", "/" ) );
			window.location.href = url;
		}
	}

}
