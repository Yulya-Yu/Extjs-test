Ext.define('new_test.store.Personnel', {
    extend: 'Ext.data.Store',
    // model: 'new_test.view.main.MainModel',
    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone', 'size'
    ],

    data: {
        items: [
            { name: 'Член команды №1', email: "test@gmail.com", phone: "555-111-1111", size: "L" },
            { name: 'Член команды №2', email: "test@gmail.com", phone: "555-222-2222", size: "M" },
            { name: 'Член команды №3', email: "test@gmail.com", phone: "555-333-3333", size: "L" },
            { name: 'Член команды №4', email: "test@gmail.com", phone: "555-444-4444", size: "" }
        ],

        // dockedItems: [{
        //     xtype: 'pagingtoolbar',
        //     dock: 'bottom',
        //     displayInfo: true,
        //     beforePageText: 'Page',
        //     afterPageText: 'of {0}',
        //     displayMsg: 'Displaying {0} - {1} of {2}'
        // }],
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});