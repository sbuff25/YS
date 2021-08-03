
window.onload = function(){
    document.getElementById("html").value = "<table>                                                                                         <tr>                                                                                        <th>Month</th><th>Average Temp (F)</th><th>Average Temp (C)<th>                                     </tr>                                                                                              <tr>                                                                                         <td>Jan</td>                                                                        <td>32&deg;</td>                                                                                     <td>0&deg;</td>                                                                              </tr>                                                                                             </table>"
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