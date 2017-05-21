//Developed by Shuvankar Sarkar
$(function()
{
	$('#date-range1').dateRangePicker(
	{
		beforeShowDay: function(t)
		{
			//Change the configuration here.
			//var dateRange = 'May 04 2017,May 09 2017,May 15 2017-May 30 2017,Jun 5 2017-Jun 09 2017';
			//Get the data from html page of input-date id.
			var dateRange = $('#input-date').text();
			var dateArray = dateRange.split(",");	//Split the data separated by coma and store in array.
			var disabledDateArray = [];
			var disabledDateArrayList = [];
			
			//Find if the element of the array is a single date or date range.
			$.each(dateArray, function( index, date ) {
					//If hyphen(-) is not there in the data that means it is a single date. Store it in disabledDateArray
					if(date.search("-")<0) {
						disabledDateArray.push(new Date(date).getTime());
					}
					//If hyphen(-) is there in the data that means it is date range. Store it in disabledDateArrayList
					else {
						disabledDateArrayList.push(date);
					}
			});
			
			var valid = true;

			var theDate = new Date(t.setHours(0,0,0,0));
			//If the date is in disabledDateArray then the disable the date.
			if ($.inArray(theDate.getTime(), disabledDateArray) > -1) {
				valid = false;
			}
			//Loop for every date range data list.
			$.each(disabledDateArrayList, function( index, date1 ) {
					var dateL = date1.split("-");
					//If the date is in between date range then disable the date.
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