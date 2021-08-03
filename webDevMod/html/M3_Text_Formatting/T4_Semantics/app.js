
window.onload = function(){
    document.getElementById("html").value = "<!--Navigation Tag Starts Here-->                                                              <nav>                                                                                          <a href=' '>Navigation Item 1</a>                                                                     <a href=' '>Navigation Item 2</a>                                                            <a href=' '>Navigation Item 3</a>                                                         <nav>                                                                                           <!--Header Tag Starts Here-->                                                                     <header>                                                                                       <h1>This is the heading</h1>                                                                  <h4>This is the sub heading</h4>                                                                </header>"
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