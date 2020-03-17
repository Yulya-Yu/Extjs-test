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
        clicksToEdit: 2,
        ptype: 'gridfilters',
    }],

    store: {
        type: 'personnel'
    },
    //МЕНЮ СВЕРХУ
    buttons: [{
            text: 'DELETE ALL',
            scale: 'medium',
            align: 'top',
            handler: function() {
                let store = Ext.getStore('store.personnel')
                store.removeAll();
                console.log(Ext.getStore('store.personnel').count())
            }
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
    //added filters here (phone, size)
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
            vtype: 'email',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {

            text: 'Phone',
            dataIndex: 'phone',
            flex: 1,
            filter: {
                type: 'list',
                options: ['555-111-1111', '555-222-2222', '555-333-3333', '555-444-4444']
            },
            inputMask: 111 - 111 - 1111,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Size',
            dataIndex: 'size',
            flex: 1,
            filter: {
                type: 'list',
                options: ['small', 'medium', 'large']
            },
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