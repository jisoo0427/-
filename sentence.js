function showSentence(cnt){
  const num = Object.keys(con).length;
  var val = Math.round(Math.random() * num);
  var s= $(".sentence").text(con[val].sentence);
  s.html(s.html().replace(/\n/g, '<br/>'));
  $(".book").text(con[val].title);

  if(cnt == 2){
    localStorage.setItem("first", val);
  }
  else{
    localStorage.setItem("second", val);
  }
}

function count(){
  var cnt = localStorage.getItem("totalCnt");
  if (cnt != 0){
    if(cnt == 2) {
      $(".showBtn").css({'background-image': 'url(img/ink1.png)'});
    }
    else $(".showBtn").css({'background-image': 'url(img/ink0.png)'});
    showSentence(cnt);
    cnt--;
    localStorage.setItem("totalCnt", cnt);
  }
  else{
    alert("문장은 하루에 두 개까지만 볼 수 있어요");
  }
};

function showPage(page){
  var val = localStorage.getItem(page);
  if(val == -1){
    alert("'문장보기'로 오늘의 문장을 본 후, 이용해 주세요:)")
    return;
  }
  var s = $(".sentence").text(con[val].sentence);
  s.html(s.html().replace(/\n/g, '<br/>'));
  $(".book").text(con[val].title);
}

$(function(){
  var today = new Date();
  var day = today.getDate();

  if(localStorage.getItem("date") == null || localStorage.getItem("date") != day){
    localStorage.setItem("date", day);
    localStorage.setItem("totalCnt", 2);
    localStorage.setItem("first", -1);
    localStorage.setItem("second", -1);
  }

  else if (localStorage.getItem("totalCnt")==1){
    $(".showBtn").css({'background-image': 'url(img/ink1.png)'});
  }
else{
  $(".showBtn").css({'background-image': 'url(img/ink0.png)'});
}

  $(".showBtn").click(function(){
    count();
  })
  $(".page").click(function(){
    showPage($(this).attr('id'));
  })
});
