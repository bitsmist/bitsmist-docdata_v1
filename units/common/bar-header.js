class PadLangselector extends BITSMIST.V1.Unit
{

	_getSettings()
	{

		return {
			"event": {
				"events": {
					"btn-mainmenu": {
						"handlers": {
							"click":			"onMainMenu_Click"
						}
					}
				}
			}
		};

	}

	// -------------------------------------------------------------------------

	onMainMenu_Click(sender, e, ex)
	{

		dokus.toggleSidebar();

	}

}
