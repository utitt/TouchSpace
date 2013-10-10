Ext.define('ETFramework.patch.util.Geolocation', {
    override: 'Ext.util.Geolocation',
    
    updateAutoUpdate: function (newAutoUpdate, oldAutoUpdate) {
        var provider = this.getProvider();
        
        if (oldAutoUpdate && provider) {
            provider.clearWatch(me.watchOperationId);
            this.watchOperationId = null;
        }

        if (newAutoUpdate) {
            if (!provider) {
                this.fireEvent('locationerror', this, false, false, true, null);
                return;
            }

            try {
                this.updateWatchOperation();
            } catch (e) {
                this.fireEvent('locationerror', this, false, false, true, e.message);
            }
        }
    },
    
    // @private
    updateWatchOperation: function() {
        var provider = this.getProvider();
        
        // Use cutting edge tech!!!
        if (this.watchOperationId) {
            provider.clearWatch(this.watchOperationId);
        }
        
        this.watchOperationId = provider.watchPosition(
            Ext.bind(this.fireUpdate, this),
            Ext.bind(this.fireError, this),
            this.parseOptions()
        );
    }

});
