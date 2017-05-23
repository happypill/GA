//930 May 22 Morning Excercise
//Write a function that takes a negative or positive integer ,which represents the number of minuites before(-) 
//or after (+) Sunday midnight , and returns the current day of the week 
//and the current time in 24hr format('hh:mm') as a string
//
//dayAndTIme(0) should return 'Sunday 00:00'
//dayAndTIme(45) should return ' Sunday 00:45'
//dayAndTime(759) should return ' Sunday 12;39'
//dayAndTime(1236) should return ' Sunday 20:36'
//dayAndTIme(1447) should return ' Monday '00:07'
//dayAndTIme(18876) should return 'Saturday 02:36'
//dayAndTIme(7832_ should return ' Friday 10:32)
//dayAndTime(259180) should return ' THursday 23:40'
//dayAndTIme(-349000) should return 'TUesday 15:20'
//10080


function dayAndTime(t){
//Create 24 Hr Format
// Create Days
//Set Date Anjd TIme to midnight
//Set Minutes
	
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	var d = new Date(2017,5,22,24); //Setting Date
	function addZero(i) { // this will be used to create the 24 hour time format - it adds an extra zero eg 0 hour or midnight becomes 00 
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
	d.setMinutes(t);
	var daysOfWeek =days(d.getDay());
	var hh = days.addZero(d.getHours());
	var mm = days.addZero((d.getMinutes());


	return daysOfWeek + " " + hh + ":" + mm;


}
dayAndTime(0);