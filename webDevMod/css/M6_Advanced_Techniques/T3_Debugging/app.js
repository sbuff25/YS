
window.onload = function(){
    document.getElementById("html").value = "<html>                                                                                         <head>                                                                                                                                                                                                                                                                                        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'>                                                                                                                                                                                             </head>                                                                                  <body>                                                                                       <div class='container-fluid'>                                                                                  <h1>Content is using Bootstraps framework</h1>                                                                                             </div>                                                                                                                                                                                                                                                                  <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js'></script>                                                                                           <\/body>                                                                                        </html>"
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