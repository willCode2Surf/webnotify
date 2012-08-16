Notify - Simple Web Notifications
-----
Notify simplies the process to create a Web Notification.

Example
-------

``` js
notify("Hello, World!", {
  "body": "This is an example message.",
  "tag": "unique_id",
  // Not applicable for Safair
  "iconUrl": "notification.gif",
  "onshow": function() {
    console.log("Notification Displayed");
  },
  "onclick": function () {
    console.log("The user clicked on the notification.");
  },
  "onclose": function() {
    console.log("The user ignored the notification.");
  },
  "onerror": function() {
    console.error("Something went wrong with the notification");
  }
});
```

Browser Support
---------------
Notify supports the following browsers:

  - Chrome 5+
  - Safari 6+

Reference [Can I Use](http://caniuse.com/notifications)

Ender support
-------------
Notify supports [Ender](http://ender.no.de). If you don't have Ender, install it, and don't ever look back.

    $ npm install ender -g

To include Query in a custom build of Ender you can include it as such:

    $ ender build notify[,mod2,mod3,...]

Or add it to an existing Ender installation

    $ ender add notify
