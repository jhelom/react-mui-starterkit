import {createTheme} from '@mui/material';
import {jaJP} from '@mui/x-data-grid/locales';
import {blue, pink, red, teal} from '@mui/material/colors';
import '@mui/x-data-grid/themeAugmentation';
import '@mui/x-date-pickers/themeAugmentation';
import type {PickerDayOwnerState} from '@mui/x-date-pickers/PickersDay';


export const theme = createTheme({
    palette: {
        primary: blue,
        secondary: pink,
        divider: '#666',
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid #666',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    backgroundColor: teal[100],
                },
            },
        },
        MuiDataGrid: {
            defaultProps: {
                disableRowSelectionOnClick: true,
                disableColumnFilter: true,
            },
            styleOverrides: {
                root: {
                    border: '1px solid #666',
                    backgroundColor: '#fff',
                },
                columnHeader: {
                    backgroundColor: '#ddd',
                },
                columnSeparator: {
                    color: '#666', // 罫線色と合わせる
                    width: '1px',  // 罫線幅と合わせる
                    right: '-1px', // 罫線と重ねる
                },
                cell: {
                    borderColor: '#666',
                    whiteSpace: 'nowrap',
                    borderRight: '1px solid #666',
                },
                footerContainer: {
                    borderColor: '#666', // セルの罫線色
                },
                row: {
                    '&:last-child .MuiDataGrid-cell': {
                        borderBottom: '1px solid #666'
                    },
                },
            },
        },
        MuiPagination: {
            defaultProps: {
                color: 'primary',
                variant: 'outlined',
                shape: 'rounded',
                siblingCount: 15,
                size: 'large',
            },
            styleOverrides: {
                root: {
                    justifyContent: 'center',
                    display: 'flex',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    color: 'red',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
                size: 'small',
                rows: 5,
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#999',
                },
            },
        },
        MuiSelect: {
            defaultProps: {
                variant: 'outlined',
                size: 'small',
                fullWidth: true,
            },
        },
        MuiFormControl: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiStack: {
            defaultProps: {
                spacing: 2,
                direction: {
                    xs: 'column',
                    sm: 'row',
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            styleOverrides: {
                root: {
                    whiteSpace: 'nowrap',
                    // minWidth: '7rem',
                    borderWidth: '2px',
                },
                outlined: {
                    '&:hover': {
                        backgroundColor: teal[50]
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: teal['100'],
                    },
                },
            },
        },
        MuiDatePicker: {
            defaultProps: {
                slotProps: {
                    textField: {
                        variant: 'outlined',
                        size: 'small',
                    },
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: ({ownerState}: { ownerState: PickerDayOwnerState }) => {
                    const day = ownerState.day?.getDay?.();
                    if (day === 0) {
                        // 日曜
                        return {
                            color: red['A700'],
                            backgroundColor: red[50]
                        };
                    }
                    if (day === 6) {
                        // 土曜
                        return {
                            color: blue['A700'],
                            backgroundColor: blue[50]
                        };
                    }
                    return {};
                },
            },
        },
        MuiTooltip: {
            defaultProps: {
                placement: 'top',
                arrow: true,
            },
            styleOverrides: {
                tooltip: {
                    fontSize: '1rem',
                },
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    fontSize: '1rem',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
        MuiInputLabel: {
            defaultProps: {
                size: 'small',
            },
        },
    },
}, jaJP);
