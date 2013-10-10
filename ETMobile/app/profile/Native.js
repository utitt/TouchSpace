Ext.define('ETMobile.profile.Native', {
    extend: 'Ext.app.Profile',
    
    isActive: function () {
        if (Ext.device) {
            return true;
        } else {
            return false;
        }
    },
    
    launch: function () {
        Ext.create('Ext.util.DelayedTask', this.hideSplashscreen).delay(200);
    },
    
    hideSplashscreen: function () {
        Ext.device.Splashscreen.hide();
    }

});
