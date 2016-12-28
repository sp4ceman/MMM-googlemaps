Module.register("googlemap",{
    // Default module config.
    defaults: {
	apikey: 'your_api_key',
	origin: 'your_origin_here',
	destination: 'your_origin_here',
	baseurl: 'https://www.google.com/maps/embed/v1/directions?key=',
	style: 'border:0;-webkit-filter: grayscale(100%);filter: grayscale(100%);',
	},

    getDom: function() {
	var fullyBuiltURL = this.config.baseurl + this.config.apikey + '&origin=' + this.config.origin + '&destination=' + this.config.destination;
  		var iframe = document.createElement("IFRAME");
		iframe.style = this.config.style;
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  fullyBuiltURL;
		return iframe;
	}
});