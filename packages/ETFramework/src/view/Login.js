Ext.define('ETFramework.view.Login', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],
    config: {
        scrollable: null,
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                autoComplete: false,
                name: 'username',
                label: '用户名',
                placeHolder: 'Please input you acount name'
            }, {
                xtype: 'passwordfield',
                name: 'password',
                label: '密码',
                placeHolder: 'Your password here'
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'button',
                action: 'signin',
                text: '登录'
            }]
        }]
    },
    
    initialize: function () {
        this.callParent(arguments);
        this.down('button[action=signin]').on('tap', this.doSignIn, this);
        this.down('textfield[name=username]').on('action', this.next, this);
        this.down('textfield[name=password]').on('action', this.last, this);
    },
    
    next: function () {
        this.down('passwordfield').select();
    },
    
    last: function () {
        this.doSignIn();
    },
    
    doSignIn: function () {
        alert('sign');
        this.submit();
    }
    
});
