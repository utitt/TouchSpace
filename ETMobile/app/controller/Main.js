Ext.define('ETMobile.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Main'
        ]
    },
    
    launch: function () {
        Ext.Viewport.add(Ext.create('ETMobile.view.Main'));
    }
    
});
