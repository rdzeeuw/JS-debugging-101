import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import emailjs from "emailjs-com"
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"

export default function contact() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_0l6wgca', e.target, 'user_c5PllhblCmi6zg3PcbKLP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <Layout>
        <Seo title="contact" />
        
        <div className="main-content">
            <h1 className="main-title">Contact</h1>
            <p className="main-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque sapiente? In reprehenderit aspernatur aliquam aperiam exercitationem id non accusantium maiores sequi eveniet provident tempora perferendis perspiciatis consequatur alias, itaque laboriosam corporis assumenda quas dignissimos dolorum tempore placeat? 
            </p>

            <form className="contact-formulier" onSubmit={sendEmail}>
                <input className="input" type="text" name="name" placeholder="Naam" required />
                <input className="input" type="email" name="email" placeholder="Email" required />
                <input className="input" type="text" name="subject" placeholder="Onderwerp" maxlength="30" required />
                <textarea className="input" rows="5" cols="30" name="message" placeholder="Wat is uw vraag?" maxlength="200" required>

                </textarea>
                
                
                <button className="contact-btn" type="submit" name="contact-btn">Verzenden</button>
            </form>

            <div className="social-icons">
                <p >Of reik uit op social media!</p>

                <a href="http://www.linkedin.com"><FaLinkedinIn className="social-icon"/></a>
                <a href="http://www.instagram.com"><FaInstagram className="social-icon"/></a>
                <a href="http://www.twitter.com"> <FaTwitter className="social-icon"/></a>
            </div>

        </div>
        
        
      </Layout>
    )
}