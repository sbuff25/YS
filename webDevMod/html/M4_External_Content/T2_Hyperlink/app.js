
window.onload = function(){
    document.getElementById("html").value = "<a href='./page2.html'>Go to page 2 in the same window</a>                                                   <br>                                                                                            <a href='./page2.html' target='_new'>Go to page 2 from a new window</a>"
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