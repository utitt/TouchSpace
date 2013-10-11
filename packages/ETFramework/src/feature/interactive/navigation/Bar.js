Ext.define('ETFramework.feature.interactive.navigation.Bar', {
    override: 'Ext.navigation.Bar',

    updateBackButton: function (newBackButton, oldBackButton) {
        this.callParent(arguments);
        
        if (newBackButton) {
            newBackButton.element.on('touchstart', ETFramework.uiFeedback);
        }
    }

});
