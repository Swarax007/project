import React, {useState} from 'react';
import '../../App.css';
import styled from 'styled-components';
import './Home.css'
import Pics from '../Pics';
import Card from '../Card';
import Headline from '../Headline';
import Routesdata from '../../Routesdata';
import { Footer } from '../Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Home(props) {

  return (
    <>


    <Headline/>
    <Pics/>
    <Routesdata/>
    <Card/>
    <Footer/>


       






        
        </>

       
  );   
}
