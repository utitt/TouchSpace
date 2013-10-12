Ext.define('ETMobile.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
    	items: [{
    		xtype: 'button',
    		text: 'bar'
    	}]
    },
    
    initialize: function () {
    	this.callParent(arguments);
    	
    	cordova.plugins.barcodeScanner.scan(this.onSuccess, this.onFailure);
    },
    
    onSuccess: function () {
        alert('success');
    },
    
    onFailure: function () {
        alert('fail');
    }
    
});
