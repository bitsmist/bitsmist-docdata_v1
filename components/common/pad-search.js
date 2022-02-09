var PadSearch = BITSMIST.v1.ClassUtil.newComponent(BITSMIST.v1.Component, {
	"settings": {
		"name": "BarSearch",
		"path": "/components/common",
	},
	"events": {
		"this": {
			"handlers": {
				"afterAppend": "onAfterAppend"
			}
		},
	}
}, "pad-search");

PadSearch.prototype.onAfterAppend = function(sender, e, ex)
{

	var word = "";
	var query = location.search.substring(1);
	query.split("&").forEach(function(item) {
		if (item.substring(0, 2) == "q=")
		{
			word = item.substring(2);
		}
	});
	this.querySelector("#qsearch__in").value = word;

};
