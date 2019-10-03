function myFunction(e){
  var itemResponses = e.response.getItemResponses();
  var message = '';
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var question = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();
   
    if(question=="名前"){
      var cTitle=answer;
    }else if(question=="利用日"){
      var cDate=answer.replace(/-/g,'/');
      var cEDate=cDate;
    }else if(question=="開始時間"){
      var cDate=cDate + " " + answer;
    }else if(question=="終了時間"){
      var cEDate=cEDate + " " + answer;
    }
  }
  var objCalendar = CalendarApp.getCalendarById('toyotakah0@gmail.com');
  var objEvent = objCalendar.createEvent(cTitle,new Date(cDate),new Date(cEDate),{description:message}).setGuestsCanSeeGuests(false); 
}