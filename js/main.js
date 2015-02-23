

$("#do-button").click(function (){
	getNewUrl();
});

$('#input-url').keypress(function (e) {

 $("#copy-suck").hide();
 
 var key = e.which;
 if(key == 13)  // the enter key code
  {
  	 e.preventDefault();
      getNewUrl();
  }
});



function getNewUrl(){
	
	var receivedUrl = $('#input-url').val();
	
	$('#input-url').val("");
	

	$.post('back/set.php',{ inputurl: receivedUrl},function (data) {
	
		if(data!="f"){
			$("#suck-div").fadeIn();
			clickToCopy();
			var outUrl = "http://sparks.masud.pw/#"+data;
			$("#output-url").val(outUrl);

		}
		else{
			$("#fail-div").show();
		}

	});


}

function clickToCopy(){
	$("#copy-button").zclip({
                path: 'js/ZeroClipboard.swf',
                copy: function(){return $('#output-url').val();},
                afterCopy: function() {
                    // console.log('copied');
                    $("#copy-suck").show();
                }
            });
}