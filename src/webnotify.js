!function (name, definition) {
  if (typeof define == 'function') define(definition)
  else if (typeof module != 'undefined' && module.exports) module.exports['webnotify'] = definition()
  else this[name] = definition()
}('webnotify', function () {
  if (!window.Notification) return;

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

  function webnotify(title, options)
  {
    context.title = title;
    context.options = (options === undefined) ? {} : options;

    testPermissions();
  };

  return webnotify;
});
