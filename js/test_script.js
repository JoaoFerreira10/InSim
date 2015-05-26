  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1572910709625788',
      xfbml      : true,
      version    : 'v2.3'
    });


    function userToken(){
             var TextValue = document.getElementById('ze');
      TextValue.value = "zeeeee";
    }


};

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));