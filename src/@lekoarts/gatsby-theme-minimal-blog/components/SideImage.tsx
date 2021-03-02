import React from "react"

type SideImageData = {imgPath, side: string}

const SideImage = (data: SideImageData) => {
    return (
<div>            
    <img src={data.imgPath} alt={data.side}/>
</div>
); 
}

export {SideImage}