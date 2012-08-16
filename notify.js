/*!
  * @preserve Notify - Simple Web Notications implimentation
  * https://github.com/cynicaljoy/notify
  * copyright Darren Cunningham 2012
  * MIT License
  */
(function (name, definition, context) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof context['define'] == 'function' && context['define']['amd']) define(name, definition)
  else context[name] = definition()
})('notify', function () {
  if (!Notification) return;

  var context = this,
  version = '0.1.0',
  testPermissions = function() {
    if(Notification.permissionLevel() === 'default')
    {
      Notification.requestPermission(testPermissions);
    }
    else if (Notification.permissionLevel() === 'granted')
    {
      var n = new Notification(context.title, context.options);
    }
    else if (Notification.permissionLevel() == 'denied')
    {
      return;
    }
  };

  var notify = function (title, options)
  {
    context.title = title;
    context.options = (options === undefined) ? {} : options;

    testPermissions();
  };

  return notify;
}, this);