import Controller from '@ember/controller';

export default Controller.extend({

actions: {

		retrieve()
		{
			console.log("called");
			var self = this;

      		name = '';
      

                      $.getJSON('/api/routes',  function(result){
            $.each(result, function(i, field){
            $( ".inner" ).append( "<p><strong> Driver name:</strong> " + result[i]['driver'] + "<br>" );
            
          });



    	});


		}

}

});


