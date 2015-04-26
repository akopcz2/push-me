function push_api() {
  if (!Notification) {
    alert('Hello World!'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();

  var notification = new Notification('', {
    icon: 'http://www.digitallofts.com/lofty.png',
    body: "Say hello! hello@digitallofts.com",
  });

  notification.onclick = function () {
    window.open("http://www.digitallofts.com");      
  };
}

$('.wrap').mousemove(function(e) {
    var x = (e.pageX * -1 / 16), y = (e.pageY * -1 / 16);
    $(this).css('background-position', x + 'px ' + y + 'px');
});
