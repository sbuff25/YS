
window.onload = function(){
    document.getElementById("html").value = "<input type='text' id='firstName' placeHolder='Name'>                                                                <button id='btnSubmit' onClick='retrieveData()';>Submit</button><br><div id='name'></div>"
    document.getElementById("css").value = ""
    document.getElementById("js").value = "function retrieveData(){let name = document.getElementById('firstName').value;                                         console.log(name);                 document.getElementById('name').innerHTML = name};"
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