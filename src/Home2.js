import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons"
import "./AUApp.css"

function Home2() {
  return (
    <div className='section'>
       
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>“I pronounce after all there is no pleasure like perusing!”- Jane Austen, Pride, and Prejudice.</h3>
					
				<h2>Dear readers,</h2>
          <p>
We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self – Help, Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College and School content references books proposed by various foundations as schedule the nation over. Other than this, we likewise offer an expansive gathering of E-Books at reasonable valuing.
</p>
				</div>
				
					<a style={{padding:"25px",fontSize:"2em"}}href="https://facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
					<a style={{padding:"25px",fontSize:"2em"}}href="https://instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
					<a style={{padding:"25px",fontSize:"2em"}}href="https://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
			
			</div>
			<div class="image-section">
				<img src="images/img2.png" alt="about us"/>
			</div>
		</div>
	</div>
    
  )
}

export default Home2


