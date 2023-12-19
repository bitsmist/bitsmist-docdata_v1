// =============================================================================
//	ButtonTotop Class
// =============================================================================

class ButtonTotop extends BITSMIST.V1.Unit {}

// -----------------------------------------------------------------------------
//  Settings
// -----------------------------------------------------------------------------

ButtonTotop.prototype._getSettings = function()
{

	return {
		"options": {
			"title":							'<i class="fas fa-caret-up"></i>',
		},

		"basic": {
			"options": {
				"autoRefresh":					false,
			}
		},

		"style": {
			"options": {
				"styleRef":						false,
			},
		},

		"event": {
			"events": {
				"this": {
					"handlers": {
						"afterStart":			this.onAfterStart,
					}
				},
				"nav": {
					"selector":					"nav",
					"handlers": {
						"click":				this.nav_onClicked
					}
				}
			}
		},
	};

}

// -----------------------------------------------------------------------------
//  Event handlers
// -----------------------------------------------------------------------------

/**
 * After start event handler.
 *
 * @param	{Object}		sender				Sender.
 * @param	{Object}		e					Event info.
 */
ButtonTotop.prototype.onAfterStart = function(sender, e)
{

	// Get options
	let container = this.get("setting", "options.container");
	let title = this.get("setting", "options.title", "^");
	let wrapperClass = this.get("setting", "options.wrapperClass");
	this._threshold = this.get("setting", "options.threshold", 500);

	// Get container
	//this._container = ( container ? document.querySelector(container) : window );
	switch (container)
	{
	case "window":
		this._container = window;
		break;
	case "parent":
	default:
		let parentNode = ( this.parentNode.host ? this.parentNode.host : this.parentNode );
		this._container = ( container ? BITSMIST.V1.$CORE.Util.scopedSelectorAll(parentNode, container)[0] : parentNode );
		break;
	}
	if (this._container === window)
	{
		this._getScrollTop = () => window.pageYOffset;
	}
	else
	{
		this._getScrollTop = () => this._container.scrollTop;
	}

	/// Init
	this.use("basic.scan", "span").innerHTML = title;
	if (wrapperClass)
	{
		this.use("basic.scan", "div").classList.add(wrapperClass);
	}
	this._container.addEventListener("scroll", this.setStyle.bind(this));

	this.setStyle();

}

// -----------------------------------------------------------------------------
//  Event handlers (Sub elements)
// -----------------------------------------------------------------------------

/**
 * Click event handler.
 *
 * @param	{Object}		sender				Sender.
 * @param	{Object}		e					Event info.
 */
ButtonTotop.prototype.nav_onClicked = function(sender, e)
{

	let duration = this.get("setting", "duration", 100);

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
