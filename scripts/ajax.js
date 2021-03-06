function loadPage(){
  navigateTo(0);
}

function navigateTo(content_nmr){
  switch(content_nmr){
    case 0:
        linkname='main.html';
        break;
    case 1:
        linkname='canvas.html';
        break;
    case 2:
        linkname='misc.html';
        break;
    case 3:
        linkname='someOtherPage.html';
        break;
    case 4:
        linkname='form.html';
        break;
  }
         
  $.ajax({
    url: linkname,
    datatype:"html",
    method: "GET"
  })
  .done(function(data) {
    $('div.content').html(data);
    afterNavigateTo(linkname);
  });
}

function afterNavigateTo(linkname) {
  tryInitalizeCssFromCookie();
  
  if (linkname == "form.html") {
    loadChatMessages();
  }
}