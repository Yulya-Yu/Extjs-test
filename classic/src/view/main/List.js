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