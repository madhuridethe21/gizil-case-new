
export const saveData = (obj) => {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('tableData'));
    let tableData = (dataFromLocalStorage && dataFromLocalStorage.length) ? dataFromLocalStorage : [];
    tableData.push(obj);
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

export const getData = () => {
    return JSON.parse(localStorage.getItem('tableData'));
}

export const updateShapeParams = (newParams, isSingleRender) =>{
    let temp = [];
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('tableData'));
    dataFromLocalStorage.map((obj)=>{
        if(newParams.id == obj.id){
            obj['radius'] = newParams.radius;
            obj['width'] = newParams.width;
            obj['height'] = newParams.height;
            obj['xAxis'] = newParams.xAxis;
            obj['yAxis'] = newParams.yAxis;
            obj['zAxis'] = newParams.zAxis;
            temp.push(obj);
        }
    });
    localStorage.setItem('tableData', JSON.stringify(dataFromLocalStorage));
    return isSingleRender?temp:dataFromLocalStorage;
}
export const shapewiseCustomizeparams = (shape) => {
    const params = {
        'Cylinder': {
            radiusTop: 1,
            radiusBottom: 1,
            height: 1,
            radialSegments: 32,
            heightSegments: 1,
            x_axis: 1,
            y_axis: 1,
            z_axis: 1,

        },
        'Cone': {
            radius: 1,
            height: 1,
            radialSegments: 32,
            heightSegments: 1,
            x_axis: 1,
            y_axis: 1,
            z_axis: 1,
        },
        'Cube': {
            width: 1,
            height: 1,
            depth: 1,
            widthSegments: 1,
            heightSegments: 1,
            depthSegments: 1,
            x_axis: 1,
            y_axis: 1,
            z_axis: 1
        },
        'Sphere': {
            radius: 1,
            widthSegments: 32,
            heightSegments: 16,
            x_axis: 1,
            y_axis: 1,
            z_axis: 1
        }
    }

    return params[shape];
}

export const deleteData = (objToDelete) =>{
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('tableData'));
    dataFromLocalStorage = dataFromLocalStorage.filter(obj => obj.id !== objToDelete.id);
    localStorage.setItem('tableData', JSON.stringify(dataFromLocalStorage));
    return dataFromLocalStorage;
}