class PadLangselector extends BITSMIST.V1.Unit
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
				}
			}
		}

	}

	// -------------------------------------------------------------------------

	onAfterTransform(sender, e, ex)
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

	}

}
