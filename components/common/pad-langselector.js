var PadLangSelector = BITSMIST.v1.ClassUtil.newComponent("PadLangselector", {
	"events": {
		"this": {
			"handlers": {
				"afterAppend": "onAfterAppend"
			}
		},
		"langselector": {
			"handlers": {
				"change": "onSelector_Change"
			}
		}
	}
});

PadLangSelector.prototype.onAfterAppend = function(sender, e, ex)
{

	var path = JSINFO["id"].split(":");
	var lang = ( path[0] === "start" ? "en" : path[0] );

	document.getElementById("langselector").value = lang;

};

PadLangSelector.prototype.onSelector_Change = function(sender, e, ex)
{

	var target = document.getElementById("langselector").value;
	var path = JSINFO["id"].split(":");
	if (path[0] !== "start")
	{
		path[0] = target;
		var id = path.join(":");

		var url = ( window.location.href.indexOf("doku.php") > -1 ? "/doku.php?id=" + id : "/" + id.replaceAll(":", "/" ) )
		window.location.href = url;
	}

};
