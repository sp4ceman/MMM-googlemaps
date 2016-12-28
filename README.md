# MMM-googlemap
a module for the magic mirror to draw a google map between two locations

## install
copy the /googlemap folder into your modules. if you put it in a subfolder remember to double check the module path in the config section.

## config

 ```
 {
    module: 'googlemap',
    position: 'position',
    config: {
        apikey: 'your_api_key',
	    origin: 'your_origin_here',
	    destination: 'your_destination_here',
    }
},
```
## random
https://github.com/desertblade/iFrame  
credit to this module for showing me how simply you could use an iFrame to load whatever you want.

https://developers.google.com/maps/documentation/embed/  
this is the url for the google maps embed api, which is handy for seeing how to format your addresses and stuff
