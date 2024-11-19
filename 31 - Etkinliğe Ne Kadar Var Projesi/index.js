
//  bu günün zamanından seçtiğimiz tarihdeki etkinliğe ne kadar var 


$(document).ready(function () {
 
 
  let chooseDate = "";
  let currentDateValue = new Date().getTime();
  let currentTimeInterval;

  let LocalStrogeTime;
  // Bugünün tarihini al
  var today = new Date();

  // Bugünden bir sonraki günü hesapla
  today.setDate(today.getDate() + 1);

  var $datePicker = $("#datePicker").datetimepicker({
    format: "d-m-Y", // Tarih formatı (Yıl-ay-gün)
    timepicker: false, // Sadece tarih seçimi için saat seçici devre dışı
    minDate: new Date,
    i18n: {
      tr: {
        // Türkçe çeviriler
        months: [
          "Ocak",
          "Şubat",
          "Mart",
          "Nisan",
          "Mayıs",
          "Haziran",
          "Temmuz",
          "Ağustos",
          "Eylül",
          "Ekim",
          "Kasım",
          "Aralık",
        ],
        dayOfWeek: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
      },
    },
    lang: "tr", // Dil ayarını Türkçe olarak belirle
  });

  $("#remainingForm").submit(function (e) {
    e.preventDefault();
    chooseDate = $("input[name='date']").val();
    LocalStrogeTime = {
      date:chooseDate,
    }
    localStorage.setItem('time',JSON.stringify(LocalStrogeTime))

    if (chooseDate == "") {
      alert("Lütfen tarih seçin");
    } else {
      var formattedDate = moment(chooseDate, "DD-MM-YYYY").format("YYYY-MM-DD");
      // Ardından, .getTime() metodu ile bu tarihi milisaniye cinsinden bir zaman damgasına çeviriyoruz
      currentDateValue = new Date(formattedDate).getTime();
      console.log(currentDateValue);
      updateDom();
    }
  });

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  function updateDom() {

    currentTimeInterval = setInterval(() => {
      const now = new Date().getTime();
      const betweenDate = currentDateValue - now;
      const days = Math.floor(betweenDate / day);
      const hours = Math.floor((betweenDate % day) / hour);
      const minutes = Math.floor((betweenDate % hour) / minute);
      const seconds = Math.floor((betweenDate % minute) / second);
  
     
      
      if (betweenDate<0) {
        $(".complete").show();
        $("#timeDiv").hide();
        $(".remainingDiv").hide();
        clearInterval(currentTimeInterval);
      }
      else {
        $(".remainingDiv").hide();
        $(".timeDiv").show();
    
        const timeSpan = document.querySelectorAll("span");
    
        $(timeSpan[0]).text(days);
        $(timeSpan[1]).text(hours);
        $(timeSpan[2]).text(minutes);
        $(timeSpan[3]).text(seconds);
      }

     
    },1000)
  }

  $(".reset-bottom").click(function (e) { 
    e.preventDefault();
     clearInterval(currentTimeInterval);
     $(".timeDiv").hide();
     $(".remainingDiv").show();
  });
  $("#complate-button").click(function (e) { 
    e.preventDefault();
    $(".remainingDiv").show();
    $(".complete").hide();
  });
  function refreshTime() {
   
    if (localStorage.getItem('time'))
      LocalStrogeTime = JSON.parse(localStorage.getItem('time'))
      $(".remainingDiv").hide();
    chooseDate = LocalStrogeTime.date;
    
    currentDateValue = moment(chooseDate, "DD-MM-YYYY").toDate().getTime();
    console.log(currentDateValue)
      updateDom()
    {
    

  }
}

  refreshTime();
});
