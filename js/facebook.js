  window.fbAsyncInit = function() {
    FB.init({
      appId      : '613383915465690',
      xfbml      : true,
      version    : 'v2.3'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE

  // Place following code after FB.init call.

function onLogin(response) {
  if (response.status == 'connected') {
    FB.api('/me?fields=first_name', function(data) {     
      var TextValue = document.getElementById('firstname');
      TextValue.value=data.first_name;
      // var nome = document.createTextNode(data.first_name);     // Create a text node
      // TextValue.appendChild(nome);
    });

    FB.api('/me?fields=last_name', function(data) {     
      var TextValue2 = document.getElementById('lastName');
      TextValue2.value=data.last_name;
  //     var sobrenome = document.createTextNode(data.last_name);     // Create a text node
  // TextValue2.appendChild(sobrenome);
    });

    FB.api('/me?fields=name', function(data) {     
      var TextValue = document.getElementById('fullname');
      TextValue.value=data.name;
      // var nome = document.createTextNode(data.first_name);     // Create a text node
      // TextValue.appendChild(nome);
    });


  

   FB.api('/me?fields=id', function(data) {     
      document.getElementById('foto').src="http://graph.facebook.com/"+data.id+"/picture?type=normal";
    });
  }

};




  FB.getLoginStatus(function(response) {
    // Check login status on load, and if the user is
    // already logged in, go directly to the welcome message.
    if (response.status == 'connected') {
      alert("facebook connected");
      console.log("facebook connected");
      onLogin(response);

    }// else {
      // Otherwise, show Login dialog first.
     /* FB.login(function(response) {
        onLogin(response);
      } {scope: 'birthday'});
    }*/
  });

    };


  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));