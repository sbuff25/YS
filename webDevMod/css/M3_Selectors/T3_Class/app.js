
window.onload = function(){
    document.getElementById("html").value = "<html>                                                                                         <head>                                                                                       <style>                                                                               .class1{color: red;}                                                             .class2{color: green;}                                                                       .class3{color: blue}                                                                   </style>                                                                                       </head>                                                                                  <body>                                                                                         <p class='class1'>Content</p>                                                                  <p class='class2'>Content</p>                                                                   <p class='class3'>Content</p>                                                                  <\/body>                                                                                        </html>"
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