      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1446327355664409',
          xfbml      : true,
          version    : 'v2.3'
        });

        //Determines the current user's login status
        FB.getLoginStatus(function(response){
        	//User has approved our application
        	if(response.status == 'connected'){
        		var uid = response.authResponse.userID;
    			var accessToken = response.authResponse.accessToken;
        		getUserFeed();		
        	} else if(response.status == 'not_authorized'){
        		//Ask the user to approve the application
        		authenticateFacebookUser();
        	} else {
        		//Ask the user to login to facebook
        		authenticateFacebookUser()
        	}
        });
      };

      //Grabs the Facebook javascript code
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

    // If a user is not authenticated and we wish to get the facebook feed we must call this function so the user 
    // can approve our application
	function authenticateFacebookUser(){
		FB.login(function(response) {
	   		if (response.authResponse) {
	     		console.log('Welcome!  Fetching your information.... ');
	     		FB.api('/me', function(response) {
	       			console.log('Good to see you, ' + response.name + '.');
	     		});
	   		} else {
	     		console.log('User cancelled login or did not fully authorize.');
	   		}
 		});
    }

    //Retrieves the feed for facebook.com/aueuque
	function getUserFeed(){
        FB.api(
        "/271380496376837/feed",
        function (response) {
          if (response && !response.error) {
            console.log(response);
          } else {
            console.log(response);
          }
        }
      );  
    }