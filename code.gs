function myFunction() {
  //処理遅延対策3秒間待機
  Utilities.sleep(3000);
  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = sheets.getSheetByName('スペース受付');
  //データがある最終行取得
  const Values = sheet.getRange('A:A').getValues();
  const lastRow = Values.filter(String).length;
  //日付操作
  var createDate = new Date();
  var year = createDate.getFullYear();
  var month = createDate.getMonth()+1;
  var day = createDate.getDate();
  var startTime = sheet.getRange(lastRow, 10).getDisplayValue();
  var endTime = sheet.getRange(lastRow, 11).getDisplayValue();
  var startDate = year+"/"+month+"/"+day+" "+startTime;
  var endDate = year+"/"+month+"/"+day+" "+endTime;
  //使用者名・使用スペース取得
  var name = sheet.getRange(lastRow,6).getDisplayValue();
  var area = sheet.getRange(lastRow,8).getValue();
  //使用スペースカレンダーID付与
  var con1Cal = CalendarApp.getCalendarById('npo-aip.or.jp_k462pcbpvc0qevapurbofphar8@group.calendar.google.com');
  var con2Cal = CalendarApp.getCalendarById('npo-aip.or.jp_jmps93202ra49bpvebhkuas6jg@group.calendar.google.com');
  var con3Cal = CalendarApp.getCalendarById('npo-aip.or.jp_gf0dkk7t6pba393v8j3e0tsc44@group.calendar.google.com');
  var con4Cal = CalendarApp.getCalendarById('npo-aip.or.jp_4l4rl9dp9na7a60e1kln8aqg1s@group.calendar.google.com');
  var con5Cal = CalendarApp.getCalendarById('npo-aip.or.jp_oi7njj7tavh0lfplcn6re803as@group.calendar.google.com');
  var con6Cal = CalendarApp.getCalendarById('npo-aip.or.jp_oabp74bnr9rkb1muu4c89p10v0@group.calendar.google.com');
  var undCal = CalendarApp.getCalendarById('npo-aip.or.jp_76cbv2g1v8g90agrjtvaa07v1s@group.calendar.google.com');
  var mtgCal = CalendarApp.getCalendarById('npo-aip.or.jp_3lv9io0j40lkdlevs8gt5965s4@group.calendar.google.com');
  var mksCal = CalendarApp.getCalendarById('npo-aip.or.jp_onfb0jc7rie96l9fdbgb9vsr3s@group.calendar.google.com');
 
  //使用スペースカレンダーID提供
  switch(area){
    case '集中スペース１':
      var calendar = con1Cal;
      var areaName = '1. ';
      break;
     
    case '集中スペース２':
      var calendar = con2Cal;
      var areaName = '2. ';
      break;
     
    case '集中スペース３':
      var calendar = con3Cal;
      var areaName = '3. ';
      break;
     
    case '集中スペース４':
      var calendar = con4Cal;
      var areaName = '4. ';
      break;
     
    case '集中スペース５':
      var calendar = con5Cal;
      var areaName = '5. ';
      break;
     
    case '集中スペース６':
      var calendar = con6Cal;
      var areaName = '6. ';
      break;
     
    case 'underスペース':
      var calendar = undCal;
      var areaName = 'Und. ';
      break;
     
    case 'ミーティングスペース':
      var calendar = mtgCal;
      var areaName = 'Mtg. ';
      break;
     
    case "MAKERSスペース":
      var calendar = mksCal;
      var areaName = 'Mks. ';
      break;
     
    default:
      break;
  }
 
  //カレンダー自動登録
  calendar.createEvent(areaName+name+"様", new Date(startDate), new Date(endDate));
}
