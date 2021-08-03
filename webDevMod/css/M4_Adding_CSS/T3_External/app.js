
window.onload = function(){
    document.getElementById("html").value = "<html>                                                                                         <head>                                                                                               <!--CSS is being imported in from the middle window-->                                                                                        <!--link rel='stylesheet' href='style.css'-->                                                                                       </head>                                                                                  <body>                                                                                         <p>Content<p>                                                                         <p>Content</p>                                                                        <p>Content</p>                                                                                 <\/body>                                                                                        </html>"
    document.getElementById("css").value = "p{color: red}"
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