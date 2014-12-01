cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.sqlite/www/SQLitePlugin.js",
        "id": "com.phonegap.plugins.sqlite.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/de.phonostar.softkeyboard/www/softkeyboard.js",
        "id": "de.phonostar.softkeyboard.SoftKeyboard",
        "clobbers": [
            "SoftKeyboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.OrientationLock/www/orientationLock.js",
        "id": "com.phonegap.plugins.OrientationLock.OrientationLock",
        "clobbers": [
            "OrientationLock"
        ]
    },
    {
        "file": "plugins/at.modalog.cordova.plugin.cache/www/Cache.js",
        "id": "at.modalog.cordova.plugin.cache.Cache",
        "clobbers": [
            "cache"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.sqlite": "1.0.0",
    "org.apache.cordova.device": "0.2.4",
    "org.apache.cordova.console": "0.2.4",
    "de.phonostar.softkeyboard": "0.1",
    "org.apache.cordova.network-information": "0.2.7",
    "org.apache.cordova.dialogs": "0.2.6",
    "com.phonegap.plugins.OrientationLock": "0.1",
    "at.modalog.cordova.plugin.cache": "1.0.0"
}
// BOTTOM OF METADATA
});