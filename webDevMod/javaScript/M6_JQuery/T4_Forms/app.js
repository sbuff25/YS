
window.onload = function(){
    document.getElementById("html").value = "<html>                                                              <head><script src='https://code.jquery.com/jquery-1.12.4.js'></script>                                                              </head>                                                                    <body><input type='text' id='name' placeholder='Name'> <button>Submit</button>                                                                  </body>                                                                                   </html>"
    document.getElementById("css").value = ""
    document.getElementById("js").value = "$(document).ready(function(){                             $('button').click(function(){                                                                 var name = $('#name').val();                                                                      console.log(name);}                                                                    )});                                                                                          "
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