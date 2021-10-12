$(document).ready(function() {
    $.fn.dataTable.ext.classes.sPageButton = 'btn mx-1 btn-outline-dark rounded-3';
    let DTI = $('#data-table-I').DataTable( {
        language: {
            search: '<i class="fas fa-search"></i> ',
            searchPlaceholder: 'Search'
        },
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        }],
        select: {
            style:    'multi',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]],
        responsive: true,
    } );

    $('#MyTableCheckAllButton1').click(function() {
        if (DTI.rows({
            selected: true
        }).count() > 0) {
            DTI.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
            DTI.rows().deselect();
            return;
        }

        DTI.rows().select();
    });

    DTI.on('select deselect', function(e, dt, type) {
        if (type === 'row') {
            if (dt.rows().count() === dt.rows({
                selected: true
            }).count()) {
                // Deselect all items button.
                $('#MyTableCheckAllButton1 i').attr('class', 'far fa-check-square');
                return;
            }

            if (dt.rows({
                selected: true
            }).count() === 0) {
                // Select all items button.
                $('#MyTableCheckAllButton1 i').attr('class', 'far fa-square');
                return;
            }

            // Deselect some items button.
            $('#MyTableCheckAllButton1 i').attr('class', 'far fa-minus-square');
        }
    });


    $.fn.dataTable.ext.classes.sPageButton = 'btn mx-1 btn-outline-dark rounded-3';
    let DTII = $('#data-table-II').DataTable( {
        language: {
            search: '<i class="fas fa-search"></i> ',
            searchPlaceholder: 'Search'
        },
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        }],
        select: {
            style:    'multi', // 'single', 'multi', 'os', 'multi+shift'
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]],
        responsive: true
    } );

    $('#MyTableCheckAllButton2').click(function() {
        if (DTII.rows({
            selected: true
        }).count() > 0) {
            DTII.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
            DTII.rows().deselect();
            return;
        }
        DTII.rows().select();
    });

    DTII.on('select deselect', function(e, dt, type) {
        if (type === 'row') {
            if (dt.rows().count() === dt.rows({
                selected: true
            }).count()) {
                // Deselect all items button.
                $('#MyTableCheckAllButton2 i').attr('class', 'far fa-check-square');
                return;
            }
            if (dt.rows({
                selected: true
            }).count() === 0) {
                // Select all items button.
                $('#MyTableCheckAllButton2 i').attr('class', 'far fa-square');
                return;
            }

            // Deselect some items button.
            $('#MyTableCheckAllButton2 i').attr('class', 'far fa-minus-square');
        }
    });
} );
