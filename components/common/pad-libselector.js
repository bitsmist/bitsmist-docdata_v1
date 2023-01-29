var PadLibSelector = BITSMIST.v1.ClassUtil.newComponent("PadLibselector", {
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
			"rootNode":				".fa-bars",
			"handlers": {
				"click":			"onMenu_Click"
			}
		}
	}
});

PadLibSelector.prototype.onAfterTransform = function(sender, e, ex)
{

	var path = JSINFO["id"].split(":");
	var target = ( path[0] === "start" ? "bitsmist_frameworks" : path[1] );

	document.getElementById("libselector").value = target;
	this.__setTitle();

};

PadLibSelector.prototype.onMenu_Click = function(sender, e, ex)
{

	var select = this.querySelector("pad-libselector select");
	select.style.display = "block";
	select.size = select.options.length;
	select.focus();

};

PadLibSelector.prototype.onSelector_Change = function(sender, e, ex)
{

	var target = document.getElementById("libselector").value;
	var path = JSINFO["id"].split(":");
	var lang = ( path[0] === "start" ? "en" : path[0] );;
	var id = lang + ":" + target + ":docs:start";

	var url = ( window.location.href.indexOf("doku.php") > -1 ? "/doku.php?id=" + id : "/" + id.replace(/:/g, "/" ) )
	window.location.href = url;

};

PadLibSelector.prototype.onSelector_KeyUp = function(sender, e, ex)
{

	if (e.keyCode === 27)
	{
		this.onSelector_Blur(this);
	}

};

PadLibSelector.prototype.onSelector_Blur = function(sender, e, ex)
{

	var select = this.querySelector("pad-libselector select");
	select.style.display = "none";

}

PadLibSelector.prototype.__setTitle = function()
{

	var path = JSINFO["id"].split(":");

	// Title
	var title = document.querySelector("pad-libselector #title span");
	switch (path[1])
	{
	case "bitsmistjs_core":
		title.innerText = "BitsmistJS Core";
		break;
	case "bitsmistjs_router":
		title.innerText = "BitsmistJS Router";
		break;
	case "bitsmistjs_extras":
		title.innerText = "BitsmistJS Extras";
		break;
	case "bitsmist_server":
		title.innerText = "BitsmistServer Core";
		break;
	default:
		title.innerText = "Bitsmist Frameworks";
		break;
	}

	// Link
	var link = document.querySelector("pad-libselector #title");
	var id = path[0] + ":" + path[1] + ":docs:start";
	var url = ( window.location.href.indexOf("doku.php") > -1 ? "/doku.php?id=" + id : "/" + id.replaceAll(":", "/" ) );
	link.href = url;

}
