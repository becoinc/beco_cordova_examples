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

        //Decrease the refresh interval so we get more responsive results
        BecoCordovaPlugin.setRefreshInterval(4);

        //Request the location permissions (used only on android)
        cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.ACCESS_COARSE_LOCATION,function(){},function(){});

        //Register event functions before we start scanning
        //We will use the onReceiveLocationData event and check if the
        //placeName is "Kitchen" to detect if we are in a Kitchen or not
        BecoCordovaPlugin.onReceiveLocationData(function(data){
            if (data == null){
                $("#answer").text("Not Sure!");
                $("#app").removeClass("yes").removeClass("no");
                $("#answer").removeClass("huge");
            } else {
                if (data.place.placeName == "Kitchen"){
                    $("#answer").text("Yes!");
                    $("#app").removeClass("no").addClass("yes");
                    $("#answer").addClass("huge");
                } else {
                    $("#answer").text("No!");
                    $("#app").removeClass("yes").addClass("no");
                    $("#answer").addClass("huge");
                }
            }
        });

        //Register handset and then start scanning if that is successful
        BecoCordovaPlugin.registerHandset(null,null,null,null, function(){ BecoCordovaPlugin.startScan(); },null);
    }
};

app.initialize();

////////////////////////////////////////////////
// End of File
////////////////////////////////////////////////
