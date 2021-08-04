
window.onload = function(){
    document.getElementById("html").value = ""
    document.getElementById("css").value = ""
    document.getElementById("js").value = "/*Multi Line Comment*/                                                                                                                                   \//Single line Comment                                     "
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