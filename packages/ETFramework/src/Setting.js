Ext.define('ETFramework.Setting', {
    extend: 'Ext.data.Store',
    singleton: true,
    config: {
        proxy: 'localstorage',
        fields: ['key', 'value']
    },

    get: function (key) {
        //return this.get(key);
    },
    
    set: function (key, value) {
        //
    }
    
});
