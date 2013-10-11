Ext.define('ETFramework.feature.interactive.view.TileLauncher', {
    override: 'ETFramework.view.TileLauncher',
    requires: [
        'ETFramework.feature.interactive.navigation.Bar'
    ],
    
    initialize: function () {
        this.callParent(arguments);
        
        var dataview = this.down('dataview');
        dataview.on('itemtouchstart', ETFramework.uiFeedback);
    }

});
