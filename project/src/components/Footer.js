import React from 'react'
import './Footer.css'
import facebooklogo from './pages/logos/facebook.png';
import twitterlogo from './pages/logos/twitter.png';
import maillogo from './pages/logos/mail.png';
import appstorelogo from './pages/logos/app-store.png';
import bloodlogo from './pages/logos/blood-donation.png';
import instalogo from './pages/logos/instagram.png';
import mastercardlogo from './pages/logos/master-card.png';
import paynimologo from './pages/logos/paynimo-logo.jpg';
import qrcodelogo from './pages/logos/qrcode.png';
import playstorelogo from './pages/logos/play-store.png';
import upilogo from './pages/logos/upi.png';
import visalogo from './pages/logos/visa.png';
import {MdLocationPin} from "react-icons/md";
import {FiPhoneCall} from "react-icons/fi";
import {MdEmail} from 'react-icons/md';
import {GiRotaryPhone} from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="app__footer">
            <div className='app__footer_padding'>
            <div className='app__footer-title'>
                <h2>GET IN TOUCH</h2>
                <p>The primary purpose of your site's About Us page is to provide information about your business and what it can deliver, so it should include the basics, such as who your company serves</p>
            </div>
            <div className='app__footer-section'>
                <div className='app__footer-section-left'>
                    <h2>Contact Us</h2>
                  <div className='app__footer-section-info'>
                      <p><MdLocationPin/><div id='space'> VIIT, Pune<br/>India</div></p>
                      <p><FiPhoneCall/><a href="tel:+91-6897899889"> +91-6897899889</a></p>
                      <p><MdEmail/><a href="mailto:abc@example.com"> abc@example.com</a></p>
                      <p><GiRotaryPhone/><a href="tel:+91-6897899889"> +91-6897899889</a></p>
                  </div>
                  <div className='app__footer-section-logo'>
                      <p><img src={facebooklogo} alt='facebook'/></p>
                      <p><img src={maillogo} alt='mail'/></p>
                      <p><img src={instalogo} alt='insta'/></p>
                      <p><img src={twitterlogo} alt='twitter'/></p>
                      <p><img src={appstorelogo} alt='appstore'/></p>
                      <p><img src={playstorelogo} alt='playstore'/></p>
                </div>
                </div>
            <div className='app__footer-section-links'>
                <h2>Links</h2>
                <div className='app__footer-section-links-info'>
               <Link to='/'><p>Home</p></Link> 
              
               <Link to='/About-us'><p>About Us</p></Link> 
               
                <Link to='/register'><p>Register</p></Link> 
                
               <Link to='/login'><p>Login</p></Link> 
                </div>
            </div>
            <div className='app__footer-section-map'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5316069591554!2d73.88323981475119!3d18.459564175855245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf47d15ce33%3A0x8098faf1b47cc4ba!2sVishwakarma%20Institute%20of%20Information%20Technology%2C%20Survey%20No.%202%2F3%2F4%2C%20VIM%20Private%20Rd%2C%20Kapil%20Nagar%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048%2C%20India!5e0!3m2!1sen!2snl!4v1642082662316!5m2!1sen!2snl" allowfullscreen="" loading="lazy"></iframe>
            </div>
            </div>
            <div className='app__footer-companies'>
            <p><img src={bloodlogo} alt='Blood-donation'/></p>
            <p><img src={qrcodelogo} alt='QR-scan'/></p>
            <p><img src={upilogo} alt='UPI'/></p>
            <p><img src={visalogo} alt='Visa'/></p>
            <p><img src={mastercardlogo} alt='master-card'/></p>
            <p><img src={paynimologo} alt='paynimo'/></p>
            </div>
             
             <div className='app__footer-copyrights'>
                 <p>All Rights Reserved and Copyrights</p>
                 <p>Created By VIIT Students</p>
             </div>
        </div>
        </div>
    )
}