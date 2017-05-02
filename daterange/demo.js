//Developed by Shuvankar Sarkar
$(function()
{
	$('#date-range1').dateRangePicker(
	{
		beforeShowDay: function(t)
		{
			var dateRange = 'May 04 2017,May 09 2017,May 15 2017-May 30 2017,Jun 5 2017-Jun 09 2017'; //Change the configuration here.
			var dateArray = dateRange.split(",");
			var disabledDateArray = [];
			var disabledDateArrayList = [];
			$.each(dateArray, function( index, date ) {
					if(date.search("-")<0) {
						disabledDateArray.push(new Date(date).getTime());
					}
					else {
						disabledDateArrayList.push(date);
					}
      });
			
			var valid = true;

			var theDate = new Date(t.setHours(0,0,0,0));
			if ($.inArray(theDate.getTime(), disabledDateArray) > -1) {
				valid = false;
			}
			$.each(disabledDateArrayList, function( index, date1 ) {
					var dateL = date1.split("-");
					if(theDate >= new Date(dateL[0]) && theDate <= new Date(dateL[1])) {
							valid = false;
					} 
      });
	
			var _class = '';
			var _tooltip = valid ? '' : 'not available';
			return [valid,_class,_tooltip];
		}
	});
});