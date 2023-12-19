class PadLibselector extends BITSMIST.V1.Unit
{

	_getSettings()
	{

		return {
			"style": {
				"options": {
					"hasStyle":					false,
				}
			},

			"event": {
				"events": {
					"this": {
						"handlers": {
							"afterTransform":	"onAfterTransform"
						}
					},
					"libselector": {
						"handlers": {
							"change":			"onSelector_Change",
							"blur":				"onSelector_Blur",
							"keyup":			"onSelector_KeyUp"
						}
					},
					"menu": {
						"selector":				".fa-bars",
						"handlers": {
							"click":			"onMenu_Click"
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
		var target = ( path[0] === "start" ? "bitsmist-framework" : path[1] );

		document.getElementById("libselector").value = target;
		this.__setTitle();

	}

	// -------------------------------------------------------------------------

	onMenu_Click(sender, e, ex)
	{

		var select = this.querySelector("pad-libselector select");
		select.style.display = "block";
		select.size = select.options.length;
		select.focus();

	}

	// -------------------------------------------------------------------------

	onSelector_Change(sender, e, ex)
	{

		var target = document.getElementById("libselector").value;
		var path = JSINFO["id"].split(":");
		var lang = ( path[0] === "start" ? "en" : path[0] );;
		var id = lang + ":" + target + ":start";

		var url = ( window.location.href.indexOf("doku.php") > -1 ? "/doku.php?id=" + id : "/" + id.replace(/:/g, "/" ) )
		window.location.href = url;

	}

	// -------------------------------------------------------------------------

	onSelector_KeyUp(sender, e, ex)
	{

		if (e.keyCode === 27)
		{
			this.onSelector_Blur(this);
		}

	}

	// -------------------------------------------------------------------------

	onSelector_Blur(sender, e, ex)
	{

		var select = this.querySelector("pad-libselector select");
		select.style.display = "none";

	}

	// -------------------------------------------------------------------------

	__setTitle()
	{

		var path = JSINFO["id"].split(":");

		// Title
		var title = document.querySelector("pad-libselector #title span");
		switch (path[1])
		{
		case "bitsmist-js-core":
			title.innerText = "BitsmistJS Core";
			break;
		case "bitsmist-js-extras":
			title.innerText = "BitsmistJS Extras";
			break;
		case "bitsmist-server-core":
			title.innerText = "BitsmistServer Core";
			break;
		default:
			title.innerText = "Bitsmist Frameworks";
			break;
		}

		// Link
		var link = document.querySelector("pad-libselector #title");
		var id = path[0] + ":" + path[1] + ":start";
		var url = ( window.location.href.indexOf("doku.php") > -1 ? "/doku.php?id=" + id : "/" + id.replaceAll(":", "/" ) );
		link.href = url;

	}

}
