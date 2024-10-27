import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
const ShapeTable = (props) => {
  const paginationModel = { page: 0, pageSize: 5 };
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'shape_type', headerName: 'Shape Type', width: 300 },
    {
      field: 'Actions',
      headerName: 'Action',
      type: 'number',
      width: 300,
      renderCell: (params) => {
        const onClickRender = (e) => {
          e.stopPropagation(); 
          props.handleRenderClick(params.row);
        };

        const onClickDelete = (e) => {
          e.stopPropagation();
          props.handleDeleteClick(params.row);
        }

        return (<><Button title='Delete the shape' variant="outlined" onClick={onClickDelete}>Delete</Button> <Button title='Customise the shape' variant="outlined" onClick={onClickRender}>Render</Button></>);
      }
    }
  ];


  return (
    <div className='center2'>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={props.data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}
export default ShapeTable;