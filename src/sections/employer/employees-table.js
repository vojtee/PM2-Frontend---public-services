import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Box, Button,
  Card, Checkbox, Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import NextLink from 'next/link';
const employerZoom = (employer) => {
  console.log(employer.name);
};
export const EmployeesTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const [newItem, setNewItem] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
  });
  const handleAddItem = () => {
    const updatedItems = [...props.items, newItem];
    props.onUpdateItems(updatedItems);
    setNewItem({
      name: '',
      email: '',
      phone: '',
      department: '',
    });
  };

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Department
                </TableCell>
                <TableCell>
                  {
                    /*whitespace*/
                  }
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((employer,index) => {
                let editableMode = false

                return (
                  <TableRow
                    id={"thisRow"+index}
                    key={employer + index}
                  >
                    <TableCell id={"detail"+index}>
                      <a href={'PM2-Frontend---employee/employee-detail/JPnGCEj5sgTfC4xTde6VmKzIR1Y2'}>
                      details
                      </a>
                    </TableCell>
                    <TableCell id={"name"+index} contentEditable={editableMode}>
                      {employer.name}
                    </TableCell>
                    <TableCell id={"email"+index} contentEditable={editableMode}>
                      {employer.email}
                    </TableCell>
                    <TableCell id={"phone"+index} contentEditable={editableMode}>
                      {employer.phone}
                    </TableCell>
                    <TableCell id={"department"+index} contentEditable={editableMode}>
                      {employer.department}
                    </TableCell>
                    <TableCell>
                      <Button id={"editButton"+index} onClick={()=>{
                        editableMode = !editableMode;
                        document.getElementById("name"+index).contentEditable=editableMode;
                        document.getElementById("email"+index).contentEditable=editableMode;
                        document.getElementById("phone"+index).contentEditable=editableMode;
                        document.getElementById("department"+index).contentEditable=editableMode;
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
          <Button
            onClick={handleAddItem}
          >
            + add employer
          </Button>
        </Box>
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

EmployeesTable.propTypes = {
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
