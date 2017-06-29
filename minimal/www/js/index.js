////////////////////////////////////////////////
// Beco, Inc
////////////////////////////////////////////////
// Beco Cordova Example
////////////////////////////////////////////////

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },
    onDeviceReady: function() {

        //Set the user credentials
        var username = "<INSERT SDK USERNAME HERE>";
        var password = "<INSERT SDK PASSWORD HERE>";
        var hostname = "api.beco.io";
        BecoCordovaPlugin.setCredentials(hostname,username,password);

        //Request the location permissions (used only on android)
        cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.ACCESS_COARSE_LOCATION,function(){},function(){});

        //Register event functions before we start scanning
        BecoCordovaPlugin.onReceiveLocationData(function(data){
            $("#location").text(data == null ? "Searching..." : "Seems like you're in the "+data.place.placeName+"!");
        });

        //Register handset and then start scanning if that is successful
        BecoCordovaPlugin.registerHandset(null,null,null,null, function(){ BecoCordovaPlugin.startScan(); },null);
    }
};

app.initialize();

////////////////////////////////////////////////
// End of File
////////////////////////////////////////////////
