import Controller from '@ember/controller';

export default Controller.extend({

actions: {

		retrieve()
		{
			console.log("called");
			var self = this;

      		name = '';
      

      		$.getJSON('/api/items',  function(result){
        		$.each(result, function(i, field){

        		$( ".inner" ).append( "<p><strong> Name:</strong> " + result[i]['item_name'] + "</p><p> <strong>Description: </strong>" + result[i]['item_description'] + "</p><br>" );
      			
        	});


    	});


		}

}

});


