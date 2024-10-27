import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box, TextField, Button, Select, MenuItem, InputLabel, Typography } from "@mui/material";
import { saveData } from '../utils/utils';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const CreateModal = (props) => {

    const shapes = [
        {
            id: 1,
            shape: 'Cube'
        }, {
            id: 2,
            shape: 'Sphere'
        }, {
            id: 3,
            shape: 'Cylinder'
        }, {
            id: 4,
            shape: 'Cone'
        },
    ]
    const [shape, setShape] = useState('');
    const [shapeName, setShapeName] = useState('');

    const handleShapeTypeChange = (event) => {
        setShape(event.target.value);
    };
    const handleNameChange = (event) => {
        setShapeName(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        let addedShape = {
            id: Math.floor(Math.random() * 20),
            name: shapeName,
            shape_type: shape,
        };
        await saveData(addedShape);
        props.onCancelCreate();
    }
    const handleClose = () => { };
    return (<Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
        <Box sx={style}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create Shape
                </Typography>
                <div style={{ marginTop: " 10px" }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        defaultValue=""
                        onChange={handleNameChange}
                        fullWidth
                    />
                </div>
                <div style={{ marginTop: " 10px" }}>
                    <InputLabel id="demo-simple-select-label">Shape</InputLabel>
                    <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select a Shape"
                        onChange={handleShapeTypeChange}
                        sx={{ width: '100%' }}
                    >
                        {
                            shapes.map((obj) => {
                                return <MenuItem value={obj.shape}>{obj.shape}</MenuItem>
                            })
                        }
                    </Select>
                </div>
                <div className='margin-top-10px button-div'>
                    <Button className='margin-right-10px' variant="outlined" color="secondary" type="submit">Create</Button>
                    <Button variant="outlined" onClick={props.onCancelCreate} className='margin-left-10px'>Cancel</Button>
                </div>
            </form>
        </Box>
    </Modal>);
}

export default CreateModal;