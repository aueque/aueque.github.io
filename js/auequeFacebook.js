      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1446327355664409',
          xfbml      : true,
          version    : 'v2.3'
        });

        FB.getLoginStatus(function(response){
          getUserFeed();
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));


    function getUserFeed(){
        FB.api(
        "/271380496376837/feed",
        function (response) {
          if (response && !response.error) {
            console.log(response);
          } else {
            console.log("error");
          }
        }
      );  
    }