$(document).ready(()=>{
	console.log('hallo');
	$('form').on('submit', submitListener);
});

const submitListener = (event) => {
	event.preventDefault();
	var title = $('#title').val();
	var content = $('#content').val();
	console.log(title + ' und  ' + content);
	
	//sent input to server
	console.log(JSON.stringify(title));
	console.log(JSON.stringify(content));
	$.ajax({
		type: 'POST',
		data: {
			'title': JSON.stringify(title),
			'content': JSON.stringify(content),
		},
		params: title,
        //contentType: 'application/json',
        url: 'http://localhost:5000/blog/',						
        success: function(data) {
        	console.log(data.title);
        	$('#main').append('<article></article>');
        	// $('article').append('<h3>' + data.title +'</h3>');
        	// $('article').append('<div>' + data.content +'</div>');
        	
			//$('#blog-list li:last-child').html(data.item);
			$("form").trigger("reset");
            console.log('success');
            console.log(JSON.stringify(data));
        },
        error: function(xhr, status, errorThrown){
        	console.log(status);
        	console.log('There was a problem! NEW ERROR ' + errorThrown);
        }
   	});

	

};
//nav click on input, request input template
//nav click on list, request list template