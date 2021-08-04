
window.onload = function(){
    document.getElementById("html").value = ""
    document.getElementById("css").value = ""
    document.getElementById("js").value = "var fruits = ['apples','oranges','pears'];                                        var specificFruit = fruits[0];                                    /*This will return a specific item form the array*/                                          console.log('The specific fruit is '+ specificFruit);                                                     /*This will return the entire contents of the array*/                                                          for(var i = 0; i < 3; i++){console.log(fruits[i])}"
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