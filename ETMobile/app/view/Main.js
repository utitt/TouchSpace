Ext.define('ETMobile.view.Main', {
    extend: 'Ext.Map',
    xtype: 'main',
    config: {
        geo: Ext.create('Ext.util.Geolocation', {
            autoUpdate: true,
            allowHighAccuracy: true
        }),
        useCurrentLocation: true
    }
});
