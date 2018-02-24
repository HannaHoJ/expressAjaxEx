$(document).ready(()=>{
	console.log('hallo');
	$('form').on('submit', submitListener);
};

const submitListener = (event) => {
	event.preventDefault();
	var data.content = $('#input-id').val();
	console.log(data.content);
	
	//sent input to server
	// $.ajax({
	// 	type: 'POST',
	// 	data: JSON.stringify(data.content),
	// 	params: JSON.stringify(data.content),

 //        contentType: 'application/json',
 //        url: 'http://localhost:5000/endpoint',						
 //        success: function(data) {
 //            console.log('success');
 //            console.log(JSON.stringify(data));
 //        });
	$('#todo-list').append('<li></li>');
	$('#todo-list li').html(data.content);

};
//nav click on input, request input template
//nav click on list, request list template