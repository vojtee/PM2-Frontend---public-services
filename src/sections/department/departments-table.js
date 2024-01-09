import PropTypes from 'prop-types';
import {
  Box, Button,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import NextLink from 'next/link';
import React, { useState } from 'react';

export const DepartmentsTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

    const [newItem, setNewItem] = useState({
        id: '',
        department: '',
        address: {
            city: '',
            country: '',
            state: '',
            street: ''
        },
        description: '',
        phone: ''
    });
    const handleAddItem = () => {
        const updatedItems = [...props.items, newItem];
        setNewItem({
            id: 'novyId', // Můžete generovat unikátní ID
            department: 'Nové oddělení',
            address: {
                city: 'Mesto',
                country: 'Country',
                state: 'State',
                street: 'Ulice'
            },
            description: 'Svoz elektro odpadu.',
            phone: '123-456-7890'
        });
        props.onUpdateItems(updatedItems);
    };

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Department
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  {
                    /*whitespace*/
                  }
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((department,index) => {
                let editableMode = false

                return (
                  <TableRow
                    id={"thisRow"+index}
                    key={department+index}
                  >
                    <TableCell id={"detail"+index}>
                        <a href={'PM2-Frontend---employee/department-detail/LBM9Uk3wVjKC5xCGiMoY'}>
                      details
                        </a>
                    </TableCell>
                    <TableCell id={"department"+index}>
                      {department.department}
                    </TableCell>
                    <TableCell id={"description"+index}>
                      {department.description}
                    </TableCell>
                    <TableCell id={"address"+index}>
                      {department.address.country},{department.address.city}, {department.address.street}
                    </TableCell>
                    <TableCell id={"phone"+index}>
                      {department.phone}
                    </TableCell>
                    <TableCell>
                      <Button id={"editButton"+index} onClick={()=>{
                        editableMode = !editableMode;
                        document.getElementById("department"+index).contentEditable=editableMode;
                        document.getElementById("description"+index).contentEditable=editableMode;
                        document.getElementById("address"+index).contentEditable=editableMode;
                        document.getElementById("phone"+index).contentEditable=editableMode;
                        document.getElementById("editButton"+index).textContent=editableMode?"save":"edit";
                      }}>
                        edit
                      </Button>
                      <Button
                        onClick={()=>{
                          document.getElementById("thisRow"+index).remove();
                          items.splice(index,1);
                        }}
                      >delete</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <Button
          onClick={handleAddItem}
        >
          + add departments
        </Button>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

DepartmentsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onUpdateItems: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
