// Define a function to handle the URL parameter
function handleUrlParam() {
    // Get the launch parameters
//    var launchParams = JSON.parse(PalmSystem.launchParams);
//    if (launchParams && launchParams.url) {
////        // redirect to the URL
//        var delayInMilliseconds = 1000; //1 second
//
//        setTimeout(function() {
//            window.location.replace("");
//        }, delayInMilliseconds);
////    }
//	var appControl = tizen.application.getCurrentApplication().getRequestedAppControl();
//	   if (appControl) {
//	       var deepLinkUrl = appControl.uri;
//	       var url = new URL(deepLinkUrl);
//	       var params = url.searchParams;
//
//	       // Extract and process the URL parameters
//	       var url = params.get("metadata");
////	       var param2 = params.get("param2");
//	       window.location.replace(deepLinkUrl);
//	       console.log(deepLinkUrl);
////	        Perform actions based on the URL parameters
//	       if (param1 === "value1" && param2 === "value2") {
//	           // Open the specific functionality within your Tizen app
//	           openSpecificFunctionality();
//	       }
//	   }
//	   
////	 var deepLinkUrl = tizen.app.getCurrentApplication().getRequestedAppControl().data[0].value;
//	  setTimeout(function() {
//        window.location.replace(deepLinkUrl);
//        console.log(deepLinkUrl);
//    }, 1000);
//	 const element = document.getElementById("p12");
//	 element.innerHTML = "shiwt";
//	var appControl = event.detail;
//	   if (appControl) {
//	       var metaTag = appControl.metadata;
//
//	       // Extract and process the URL from the metaTag
//	       var url = new URL(metaTag);
//	      
//	       window.location.replace(url);
//	       // Perform actions based on the URL
//	       
//	   }
	var app = tizen.application.getCurrentApplication();

	var watchId = app.addEventListener({appId: 'a234567890.FirstApp', name: 'first_app_event_1'},
	                                   function(event, data) {
	    /* Data from first app must be received here */
	    console.log('Data: ' + JSON.stringify(data));
	});
}

// Call the handleUrlParam function when the app is launched
document.addEventListener("appcontrol", handleUrlParam);
//document.addEventListener('appcontrol', function() {
//    handleUrlParam();
//}, false);