import Controller from '@ember/controller';

export default Controller.extend({

actions: {

		retrieve()
		{
			console.log("called");
			var self = this;

      		name = '';
      

      		$.getJSON('/api/destinations',  function(result){
        		$.each(result, function(i, field){

        		$( ".inner" ).append( "<p><strong>Address line 1:</strong> " + result[i]['address_line_1'] 
              + "</p><p> <strong>Address line 2: </strong>" + result[i]['address_line_2'] +
              "</p><p> <strong>Address line 3: </strong>" + result[i]['address_line_3'] +
              "</p><p> <strong>Postcode: </strong>" + result[i]['postcode'] + 
              "</p><p> <strong>id: </strong>" + result[i]['route_id']+ "</p><br>" );
      			
        	});


    	});


		}

}

});


