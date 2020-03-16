/**
 * This view is an example list of people.
 */
Ext.define('new_test.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'new_test.store.Personnel'
    ],

    title: 'Тестовое задание №1',

    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2
    }],

    store: {
        type: 'personnel'
    },
    //МЕНЮ СВЕРХУ
    buttons: [{
            text: 'DELETE ALL',
            scale: 'medium',
            align: 'top',
            handler: function() {}
        }, {
            text: 'Remove ',
            scale: 'medium',
            handler: function() {}
        },
        {
            text: 'ADD',
            scale: 'medium',
            handler: function() {
                panel.add({

                })
            }
        },
        {
            text: 'SUBMIT',
            scale: 'medium',
            handler: function() {}
        },
        {
            text: 'CANCEL',
            scale: 'medium',
            handler: function() {}
        },
        {
            text: 'REFRESH',
            scale: 'medium',
            handler: function() {}
        },
        {
            text: 'Read Only',
            scale: 'medium',
            handler: function() {}
        },
        {
            text: 'OPTIONS',
            scale: 'medium',
            handler: function() {}
        }
    ],
    columns: [{
            text: 'Name',
            dataIndex: 'name',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Size',
            dataIndex: 'size',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});