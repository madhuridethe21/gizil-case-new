import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box, TextField, Button, Typography } from "@mui/material";

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
const CustomizeShape = (props) => {
    const [radius, setRadius] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [zAxis, setZAxis] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        let paramsToChange = {
            id: props.shapeToCustomise.id,
            'width': width,
            'radius': radius,
            'height': height,
            'xAxis': xAxis,
            'yAxis': yAxis,
            'zAxis': zAxis
        }

        props.updateParams(paramsToChange);
        props.handleModalClose();
    }
    const handleRadiusChange = (e) => {
        setRadius(e.target.value);
    }
    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }
    const handleWidth = (e) => {
        setWidth(e.target.value);
    }
    const handleXAxisChange = (e) => {
        setXAxis(e.target.value);
    }

    const handleYAxisChange = (e) => {
        setYAxis(e.target.value);
    }
    const handleZAxisChange = (e) => {
        setZAxis(e.target.value);
    }

    let isRadiusRequired = props.shapeToCustomise.shape_type == 'Cone' || props.shapeToCustomise.shape_type == 'Cylinder'
        || props.shapeToCustomise.shape_type == 'Sphere';
    return (
        <Modal
            id={props.shapeToCustomise.id}
            open={props.openCustomiseModal}
            onClose={props.handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Typography className='margin-botton-10px' id="modal-modal-title" variant="h6" component="h2">
                        {props.shapeToCustomise.name}
                    </Typography>
                    <div className='margin-top margin-botton-10px'>
                        {
                            !isRadiusRequired ?
                                <TextField
                                    id="width"
                                    label="Width"
                                    defaultValue=""
                                    onChange={handleWidth}
                                    fullWidth
                                    type="number"
                                />
                                :
                                <TextField
                                    id="radius"
                                    label="Radius"
                                    defaultValue=""
                                    onChange={handleRadiusChange}
                                    fullWidth
                                    type="number"
                                />
                        }
                    </div>
                    <TextField
                        className='margin-botton-10px'
                        id="height"
                        label="Height"
                        defaultValue=""
                        onChange={handleHeightChange}
                        fullWidth
                        type="number"
                    />
                    <TextField
                        className='margin-botton-10px'
                        id="x_axis"
                        label="X axis"
                        defaultValue=""
                        onChange={handleXAxisChange}
                        fullWidth
                        type="number"
                    />
                    <TextField
                        className='margin-botton-10px'
                        id="y_axis"
                        label="Y axis"
                        defaultValue=""
                        onChange={handleYAxisChange}
                        fullWidth
                        type="number"
                    />
                    <TextField
                        className='margin-botton-10px'
                        id="z_axis"
                        label="z axis"
                        defaultValue=""
                        onChange={handleZAxisChange}
                        fullWidth
                        type="number"
                    />
                    <div className='button-div'>
                        <Button className='margin-right-10px' variant="outlined" color="secondary" type="submit">Update</Button>
                        <Button variant="outlined" color="secondary" type="submit" onClick={props.handleModalClose}>Close</Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

export default CustomizeShape;