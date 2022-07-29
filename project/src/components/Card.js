import React,{ useState } from 'react'
import './Card.css'

function Card() {

    const [nam,setName] = useState('Dr.Ranjit');
    const [job,setJob] = useState('MD Appolo Hospitals,Pune');
    const [about,setAbout] = useState('This website is fantastic for helping needy people and its going to set a benchmark. Social workers have worked hard and studied for years to become competent professionals who work to empower individuals and communities.');

    const [nam1,setName1] = useState('Dr.Rajesh');
    const [job1,setJob1] = useState('Neurosergeon');
    const [about1,setAbout1] = useState('Todays youths are doing commendable job by doing such ethical work. Its are duty to support the needy people and give them a fair chance to uplift their lifestyle. Empathetic mind leads to Successfull Mind.');

    const [nam2,setName2] = useState('Mr.Rakesh');
    const [job2,setJob2] = useState('Founder at Aastha');
    const [about2,setAbout2] = useState('These are the people that have worked for you, these are the people who have served you all their careers so you send them out to live in the rain,Truly enlightened managers or owners would try to solve problems for the labour force.');

    return (
        <>
        <div className="App">
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src={require("./pic.jpg")} alt="" height="100px" width="100px" />
                </div>
            </div> 
            <div className='lower-container'>
                <h3> { nam }</h3>
                <h4> { job }</h4>
                <p> {about} </p>
            </div> 
        </div>
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src={require("./pic.jpg")} alt="" height="100px" width="100px" />
                </div>
            </div> 
            <div className='lower-container'>
                <h3> { nam1 }</h3>
                <h4> { job1 }</h4>
                <p> {about1} </p>
            </div> 
        </div>
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                <img src={require("./pic.jpg")} alt="" height="100px" width="100px" />
                    
                </div>
            </div> 
            <div className='lower-container'>
                <h3> { nam2 }</h3>
                <h4> { job2 }</h4>
                <p> {about2} </p>
            </div> 
        </div>
        </div>
        </>
    )
}

export default Card