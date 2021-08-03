
window.onload = function(){
    document.getElementById("html").value = "<html>                                                                                         <head>                                                                                       <style>                                                                                         </style>                                                                                            </head>                                                                                  <body>                                                                                         <p class='name'>Content<p>                                                                       <p class='rgb'>Content</p>                                                                      <p class='hex'>Content</p>                                                                   <\/body>                                                                                           </html>"
    document.getElementById("css").value = ".name{ color: red}                                                                         .rgb{color: rgb(0,255,0)}                                                                                          .hex{color: #0000FF}"
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