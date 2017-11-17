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
        	
      			console.log(result);
        	});


    	});


		}

}

});


