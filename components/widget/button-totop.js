// =============================================================================
//	ButtonTotop
// =============================================================================

var ButtonTotop = BITSMIST.v1.ClassUtil.newComponent("ButtonTotop", {
	// Events
	"events": {
		"this": {
			"handlers": {
				"afterStart":		"onAfterStart",
			}
		},
		"nav": {
			"rootNode":				"nav",
			"handlers": {
				"click":			"nav_onClicked"
			}
		}
	},

});

// -----------------------------------------------------------------------------

/**
 * After open event handler.
 *
 * @param	{Object}		sender				Sender.
 * @param	{Object}		e					Event info.
 * @param	{Object}		e					Extra info.
 */
ButtonTotop.prototype.onAfterStart = function(sender, e, ex)
{

	// Get options
	// let container = this._settings.get("settings.container");
	// let title = this._settings.get("settings.title", "^");
	// let wrapperClass = this._settings.get("settings.wrapperClass");
	this._threshold = this._settings.get("settings.threshold", 500);

	// Get container
	this._container = window;
	this._getScrollTop = () => window.pageYOffset;
	/*
	this._container = ( container ? document.querySelector(container) : window );
	if (this._container == window)
	{
		this._getScrollTop = () => window.pageYOffset;
	}
	else
	{
		this._getScrollTop = () => this._container.scrollTop;
	}
	*/

	/// Init
	/*
	this.querySelector("span").innerHTML = title;
	if (wrapperClass)
	{
		this.querySelector("div").classList.add(wrapperClass);
	}
	*/
	this._container.addEventListener("scroll", this.setStyle.bind(this));

	this.setStyle();

}

// -----------------------------------------------------------------------------
//  Event handlers (Sub components)
// -----------------------------------------------------------------------------

/**
 * Click event handler.
 *
 * @param	{Object}		sender				Sender.
 * @param	{Object}		e					Event info.
 */
ButtonTotop.prototype.nav_onClicked = function(sender, e)
{

	let duration = this._settings.get("duration", 100);

	this.__scrollTo({"duration":duration});

}

// -----------------------------------------------------------------------------
//  Methods
// -----------------------------------------------------------------------------

/**
 * Set style depending on the scroll position.
 */
ButtonTotop.prototype.setStyle = function()
{

	if (this._getScrollTop() > this._threshold)
	{
		this.classList.remove("nonactive");
		this.classList.add("active");
	}
	else
	{
		this.classList.remove("active");
		this.classList.add("nonactive");
	}

}

// -----------------------------------------------------------------------------
//  Privates
// -----------------------------------------------------------------------------

/**
 * Scroll to the anchor/position with animation.
 *
 * @param	{Object}		options				Options.
 */
ButtonTotop.prototype.__scrollTo = function(options)
{

	let position = (options["position"] ? options["position"] : 0);
	let duration = (options && "duration" in options ? options["duration"] : 0);

	this._container.scrollTo({"top":position, "behavior":"smooth"});

}
