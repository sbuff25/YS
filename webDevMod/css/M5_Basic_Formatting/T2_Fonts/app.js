
window.onload = function(){
    document.getElementById("html").value = "<html>                                                                                         <head>                                                                                       <style>                                                                                                                          </style>                                                                                                      </head>                                                                                  <body>                                                                                         <p class='arial'>Content<p>                                                                     <p class='verdana'>Content</p>                                                                 <p class='georgia'>Content</p>                                                                   <\/body>                                                                                        </html>"
    document.getElementById("css").value = ".arial{ font-family: Arial, sans-serif}                                                                                      .verdana{font-family: Verdana, sans-serif}                                                       .georgia{font-family: Georgia, serif}"
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