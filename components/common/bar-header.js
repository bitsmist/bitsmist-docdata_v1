class PadLangselector extends BITSMIST.v1.Component
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
