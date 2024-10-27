import { useState } from 'react';
import Button from "@mui/material/Button";
import CreateModal from './CreateModal';
import ShapeTable from './ShapeTable';
import CanvasContainer from './CanvasContainer';
import { getData, deleteData } from '../utils/utils';

const InfoTable = () => {
  const [open, setOpen] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [isSingleRender, setIsSingleRender] = useState(false);
  let dataFromStorage = getData();
  const [data, setData] = useState((dataFromStorage && dataFromStorage.length) ? dataFromStorage : []);

  const onCancelCreate = () => {
    setOpen(false);
    setData(getData());
  }

  const handleCreate = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  const handleRenderClick = (dataOBj) => {
    setShowCanvas(true);
    if (dataOBj) {
      setData([dataOBj]);
      setIsSingleRender(true);
    }
  }
  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowCanvas(false);
    setData(getData());
  }

  const handleDeleteClick = (dataOBj) => {
    setData(deleteData(dataOBj));
  }
  return (
    <div className='center1'>
      <CreateModal open={open} onCancelCreate={onCancelCreate} />
      {
        showCanvas ?
          <>
            <div className='button-div'>
              <Button variant="outlined" onClick={handleCloseClick}>CLOSE</Button>
            </div>
            <CanvasContainer data={data} isSingleRender={isSingleRender}/>
          </>
          :
          <>
            <div className='button-div'>
              <Button className='margin-right-10px' variant="outlined" color="secondary" type="submit" onClick={handleCreate} title={'Add a shape'}>Create</Button>
              <Button variant="outlined" onClick={() => { handleRenderClick() }} disabled={!data.length} title={'See added shapes'}>Render</Button>
            </div>
            <ShapeTable data={data} handleRenderClick={handleRenderClick} handleDeleteClick={handleDeleteClick} />
          </>
      }
    </div>
  );
}

export default InfoTable;