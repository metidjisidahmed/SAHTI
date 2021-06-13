import { AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumnOutlined } from '@material-ui/icons';
import React, { forwardRef } from 'react'
/* Default SVG TABLE Icon Ref */
export const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumnOutlined {...props} ref={ref} />)
};


/* Default lang for table component */
export const tableLang = {
    body: {
        emptyDataSourceMessage: "Pas d'enregistreent à afficher",
        addTooltip: 'Ajouter',
        deleteTooltip: 'Supprimer',
        editTooltip: 'Editer',
        filterRow: {
            filterTooltip: 'Filtrer'
        },
        editRow: {
            deleteText: 'Voulez-vous supprimer cette ligne?',
            cancelTooltip: 'Annuler',
            saveTooltip: 'Enregistrer'
        }
    },
    grouping: {
        placeholder: "Grouper les données en tirant l'entete  ...",
        groupedBy: 'Grouper par:'
    },
    header: {
        actions: 'Actions'
    },
    pagination: {
        labelDisplayedRows: '{from}-{to} de {count}',
        labelRowsSelect: 'lignes',
        labelRowsPerPage: 'lignes par page:',
        firstAriaLabel: 'Première page',
        firstTooltip: 'Première page',
        previousAriaLabel: 'Page précédente',
        previousTooltip: 'Page précédente',
        nextAriaLabel: 'Page suivante',
        nextTooltip: 'Page suivante',
        lastAriaLabel: 'Dernière page',
        lastTooltip: 'Dernière page'
    },
    toolbar: {
        addRemoveColumns: 'Ajouter ou supprimer des colonnes',
        nRowsSelected: '{0} ligne(s) sélectionée(s)',
        showColumnsTitle: 'Voir les colonnes',
        showColumnsAriaLabel: 'Voir les colonnes',
        exportTitle: 'Exporter',
        exportAriaLabel: 'Exporter',
        exportName: 'Exporter en CSV',
        searchTooltip: 'Chercher',
        searchPlaceholder: 'Chercher'
    }
}





