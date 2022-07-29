import React,{useState} from 'react'
import'./Pics.css'

export default function Pics() {
    return (
        <>
<div className="style_pic">
<div className="whatyoucandonate">
<b>What you can Donate</b>
</div>

       <div className="Picsi">
            <div className="Pic">
                <div className="uppercont" id='c1'>
                    <div className="image-cont" id='c1'>
                      <img src={require("./gloves.jfif")} alt="" height="300px" width="200px"/>
                    </div>
                </div>
                <div className="lower-cont" id='c1'>
                   Gloves
                </div>
            </div>
            <div className="Pic">
                <div className="uppercont" id='c2'>
                    <div className="image-cont" id='c2'>
                    <img src={require("./tablet.jfif")} alt="" height="300px" width="200px"/>
                    </div>
                </div>
                <div className="lower-cont" id='c2'>
                   Tablets
                   </div>
            </div>
            <div className="Pic">
                <div className="uppercont" id='c3'>
                    <div className="image-cont" id='c3'>
                    <img src={require("./syringes copy.jpg")} alt="" height="300px" width="200px"/>
                    </div>
                </div>
                <div className="lower-cont" id='c3'>
                   Syringes
                   </div>
            </div>
            <div className="Pic">
                <div className="uppercont" id='c4'>
                    <div className="image-cont" id='c4'>
                    <img src={require("./stretcher.jfif")} alt="" height="300px" width="200px"/>
                    </div>
                </div>
                <div className="lower-cont" id='c4'>
                   Stretcher
                   </div>
            </div>
            </div>
            </div>
        </>
    )
}
