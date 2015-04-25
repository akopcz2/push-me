
Push Notifications API

Push notifications on the web are here!

With a few simple lines of code, (found in push.js) , push notifications are browser capable.

```javascript
function shunno_push_api() {
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
```

Enjoy!

