var BarHeader = BITSMIST.v1.ClassUtil.newComponent(BITSMIST.v1.Component, {
	"settings": {
		"name": "BarHeader",
		"path": "/components/common",
	},
	"events": {
		"btn-mainmenu": {
			"handlers": {
				"click": "onMainMenu_Click"
			}
		}
	}
}, "bar-header");

BarHeader.prototype.onMainMenu_Click = function(sender, e, ex)
{

	dokus.toggleSidebar();

};
