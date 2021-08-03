
window.onload = function(){
    document.getElementById("html").value = "<html>                                                                                         <head>                                                                                                                                                                              </head>                                                                                  <body>                                                                                         <p style='color: red'>Content</p>                                                              <p style='color: green'>Content</p>                                                             <p style='color: blue'>Content</p>                                                              <\/body>                                                                                        </html>"
    document.getElementById("css").value = ""
    document.getElementById("js").value = ""
}

function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("code").contentWindow.document;


    

     window.addEventListener('load',(event) =>{
        code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
     })
	
	 document.body.onkeyup = function(){
	    code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
      };
    };

compile();