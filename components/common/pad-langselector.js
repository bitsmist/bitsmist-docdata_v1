class PadLangselector extends BITSMIST.v1.Component
{

	_getSettings()
	{

		return {
			"event": {
				"events": {
					"this": {
						"handlers": {
							"afterTransform":	"onAfterTransform"
						}
					},
					"langselector": {
						"handlers": {
							"change":			"onSelector_Change"
						}
					}
				}
			}
		};

	}

	// -------------------------------------------------------------------------

	onAfterTransform(sender, e, ex)
	{

		var path = JSINFO["id"].split(":");
		var lang = ( path[0] === "start" ? "en" : path[0] );

		document.getElementById("langselector").value = lang;

	}

	// -------------------------------------------------------------------------

	onSelector_Change(sender, e, ex)
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

	}

}
