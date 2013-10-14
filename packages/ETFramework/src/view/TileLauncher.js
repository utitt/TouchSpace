Ext.define('ETFramework.view.TileLauncher', {
    extend: 'Ext.navigation.View',
    requires: [
        'Ext.dataview.DataView',
        'Ext.data.Store',
        'Ext.form.Panel',
        'Ext.form.FieldSet'
    ],
    config: {
        items: [{
            xtype: 'dataview',
            title: '主页',
            inline: true,
            itemTpl: [
                '<div class="x-hasbadge" style="',
                    'width: {[Ext.Viewport.getWindowWidth() / 3]}px;',
                    'height: {[Ext.Viewport.getWindowWidth() / 3]}px;',
                    'background-size: 100% 100%;',
                    'background-image: url(resources/images/scalable/accessories-calculator.svg);',
                '">',
                    '<tpl if="badge">',
                        '<span class="x-badge" style="font-size: 1em;">{badge}</span>',
                    '</tpl>',
                '</div>',
                '<div style="text-align: center;">{name}</div>'
            ].join(''),
            store: {
                fields: ['name'],
                data: [
                    {name: 'aaa'},
                    {name: 'bbb'},
                    {name: 'aaa'},
                    {name: 'bbb'}
                ]
            }
        }]
    },

    initialize: function () {
        this.callParent(arguments);
        var dataview = this.down('dataview');        
        dataview.on('itemtap', this.handleItemTap, this);
    },

    handleItemTap: function (dataview, index, target, record, e, eOpts) {
        this.push({
            title: 'new panel',
            xtype: 'formpanel',
            items: [{
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    label: '123'
                }, {
                    xtype: 'textfield',
                    label: '456'
                }]
            }]
        });
    }

});
