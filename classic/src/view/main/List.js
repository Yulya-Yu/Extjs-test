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
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        }),
        Ext.create('Ext.grid.filters.Filters')
    ],

    // plugins: [{
    //     ptype: 
    //     'cellediting',
    //     clicksToEdit: 2
    // }],

    // plugins: [{
    //     ptype: 'gridfilters'
    // }],

    store: {
        type: 'personnel'
    },
    //МЕНЮ СВЕРХУ
    buttons: [{
            text: 'DELETE ALL',
            scale: 'medium',
            align: 'top',
            // handler: 
        }, {
            text: 'Remove ',
            scale: 'medium',
            handler: function(grid, rowIndex, colIndex) {
                // let store = 'store.personnel';
                grid.getStore().removeAt(rowIndex);
                grid.getStore().sync();
            },
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
                options: ['L', 'M']
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            },
            //добавила цвет клетки
            renderer: function(value, metaData, record, rowIndex) {
                metaData.tdCls = record.get('size') == "" ? "default-color" : record.get('size') == "L" ? "color-l" : "color-m";
                return value;
            }
        }
    ],

    listeners: {
        select: 'onItemSelected',
        deleteRow: 'onDeleteRow'
    }
});