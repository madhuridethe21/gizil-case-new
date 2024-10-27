import { Canvas } from '@react-three/fiber';
import Box from './Box';
import CircleShape from './CircleShape';
import Sphere from './Sphere';
import ConeShape from './ConeShape';
import CustomizeShape from './CustomizeShape';
import { useState } from 'react';
import { updateShapeParams } from '../utils/utils';

const CanvasContainer = (props) => {
    const [openCustomiseModal, setOpenCustomiseModal] = useState(false);
    const [shapeToCustomise, setShapeToCustomise] = useState({});
    const [data, setData] = useState(props.data);
    const handleCustomisation = (shape) => {
        setShapeToCustomise(shape);
        setOpenCustomiseModal(true);
    }

    const handleModalClose = () => {
        setOpenCustomiseModal(false);
    }

    const updateParams = (params) =>{
        setData(updateShapeParams(params, props.isSingleRender));
    }
    const renderShape = (shape) => {
        switch (shape.shape_type) {
            case "Cube":
                return (
                    <div class="card" onClick={() => handleCustomisation(shape)}>
                        <Canvas>
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                                decay={0}
                                intensity={Math.PI}
                                castShadow
                                shadow-mapSize={1024}
                            />
                            <directionalLight position={[0, 0, 3]} />
                            <Box shape={shape}/>
                        </Canvas >
                    </div>
                );

            case "Sphere":
                return (
                    <div class="card" onClick={() => handleCustomisation(shape)}>
                        <Canvas>
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                                decay={0}
                                intensity={Math.PI}
                            />
                            <directionalLight position={[0, 0, 3]} />

                            <Sphere shape={shape} />
                        </Canvas> </div>
                );
            case "Cylinder":
                return (
                    <div class="card" onClick={() => handleCustomisation(shape)}>
                        <Canvas>
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                                decay={0}
                                intensity={Math.PI}
                            />
                            <directionalLight position={[0, 0, 3]} />
                            <CircleShape shape={shape}/>
                        </Canvas> </div>
                );
            case "Cone":
                return (
                    <div class="card" onClick={() => handleCustomisation(shape)}>
                        <Canvas>
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                                decay={0}
                                intensity={Math.PI}
                            />
                            <directionalLight position={[0, 0, 3]} />
                            <ConeShape shape={shape}/>
                        </Canvas>
                    </div>
                );

            default:
                return null;
        }
    }
    return (<>
        <div class="cards">
            {data.map((obj) => {
                return renderShape(obj);
            })
            }
        </div>
        {
            Object.keys(shapeToCustomise).length ?
                <CustomizeShape openCustomiseModal={openCustomiseModal}
                    shapeToCustomise={shapeToCustomise}
                    handleModalClose={handleModalClose}
                    updateParams={updateParams}
                />
                :
                null
        }

    </>
    )
}

export default CanvasContainer;