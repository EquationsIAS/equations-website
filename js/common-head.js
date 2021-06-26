(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MV4GXHV');


/*
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-168690400-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-168690400-1');
</script>

*/


(function(d, m){
    var kommunicateSettings = {"appId":"35a308422564e4cf1cab3613837582837","popupWidget":true,"automaticChatOpenOnNavigation":true,
  
      "preLeadCollection": [{
        "field": "Name", // Name of the field you want to add
        "required": true, // Set 'true' to make it a mandatory field
        "placeholder": "Enter your name" // add whatever text you want to show in the placeholder
      },
      {
          "field": "Phone",
          "type": "number",
          "required": true,
          "element": "input", // Optional field (Possible values: textarea or input) 
          "placeholder": "Enter your phone number"
      }
    ]
  };
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});