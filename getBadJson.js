function getBadJson(a){$.ajax({url:a,dataType:"JSONP",complete:function(a){for(var c,d,b=a.responseText;b.length&&d;){console.log("loop"),d=!1;try{c=parseJSON(b)}catch(a){d=!0}if(!d)break}b=b.replace("<!DOCTYPE html>",""),b=b.replace("<html>",""),b=b.replace("<head>",""),b=b.replace("</body>",""),b=b.replace("</html>",""),b=b.replace("jsonCallback(",""),b=b.replace(");","");var e=jQuery.parseJSON(b);console.log(e)}})}