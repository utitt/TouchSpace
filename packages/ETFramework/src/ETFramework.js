Ext.define('ETFramework', {
    singleton: true,
    
    uiFeedback: function () {
        if (Ext.device) {
            Ext.device.Notification.vibrate(8);
        }
    },
    
    loadMapAPI: function () {
        if (!(window.google || {}).maps) {
            Ext.Loader.loadScriptFile('http://maps.googleapis.com/maps/api/js?sensor=true&callback=ETFramework.initializeMapAPI', this.onAPISuccess, this.onAPIFailure, this, false);
        }
    },
    
    onAPISuccess: function () {
        ETApp.app.fireEvent('apisuccess');
    },
    
    onAPIFailure: function () {
        ETApp.app.fireEvent('apifailure');
    },
    
    initializeMapAPI: function () {
        ETApp.app.fireEvent('mapready');
    }

});
