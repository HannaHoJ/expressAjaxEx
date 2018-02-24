$(document).ready(()=>{
	console.log('hallo');
	$('form').on('submit', submitListener);
});

const submitListener = (event) => {
	event.preventDefault();
	var data = $('#input-id').val();
	console.log(data);
	
	//sent input to server
	console.log(JSON.stringify(data));
	$.ajax({
		type: 'POST',
		data: data,
		params: data,
        //contentType: 'application/json',
        url: 'http://localhost:5000/' + data,						
        success: function(data) {
        	$('#todo-list').append('<li></li>');
        	console.log(data);
			$('#todo-list li:last-child').html(data.item);
			$("form").trigger("reset");
            console.log('success');
            console.log(JSON.stringify(data));
        },
        error: function(xhr, status, errorThrown){
        	console.log('There was a problem! NEW ERROR ' + errorThrown);
        }
   	});

	

};
//nav click on input, request input template
//nav click on list, request list template