import React from 'react';
import "./services.css"
import { FaChevronDown, FaBars, FaSearch, FaRegStar, FaBolt} from 'react-icons/fa';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import {FaUser} from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const Famenu = () => {
    setMenuOpen(!menuOpen);
}
// OnHover menu list desktop-view

        // Menu 1
const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
            setIsHovered(true)
        };

    const handleMouseLeave = () => {
        setIsHovered(false);
      };

        // Menu 2
const [isHovered1, setIsHovered1] = useState(false);
    const handleMouseEnter1 = () => {
        setIsHovered1(true)
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
  };

    // Menu 3
    const [isHovered2, setIsHovered2] = useState(false);
        const handleMouseEnter2 = () => {
            setIsHovered2(true)
        };
        const handleMouseLeave2 = () => {
            setIsHovered2(false);
        }

    // Menu 4
    const [isHovered3, setIsHovered3] = useState(false);
        const handleMouseEnter3 = () => {
            setIsHovered3(true)
        };
        const handleMouseLeave3 = () => {
            setIsHovered3(false);
        }

    // Menu 5
    const [isHovered4, setIsHovered4] = useState(false);
        const handleMouseEnter4 = () => {
            setIsHovered4(true)
        };
        const handleMouseLeave4 = () => {
            setIsHovered4(false);
        }

        const ServiceList = (props) =>{
            const {head, iconn, descp} =props;
            
            return(
                <>
                <div className='service-listdv'>
                    <img height={50} src={iconn} alt="" />
                    <h6>{head}</h6>
                    <p>{descp}</p>
                </div>
                </>
            )
        }

        const QualityServ = (props) =>{
            const {qhead, qimg, qbody, qbutton} =props;

            return(
                <>
                <div className='qual'>
                    <img height={150} src={qimg} alt="" />
                    <div>
                        <h6>{qhead}</h6>
                        <p>{qbody}</p>
                        <button id='qual-btn' type="button">{qbutton}</button>
                    </div>
                </div>
                
                </>
            )
        }

        const TshirtPrint = (props =>{
            const {simg, sbody, sbody2} =props;

            return(
                <>
                <div className='prnt-card'>
                   <a href="/"><img height={300} src={simg} alt="" /></a> 
                    <h6 className='card-text'>{sbody}</h6>
                    <h6 className='card-text2'>{sbody2}</h6>
                </div>
                </>
            )
        })
    
      
   

  return (
    <>
    {/* Nav section */}
    <div className='servicenav-top'>
        <div></div>
        <div><h6>Free shipping on all U.S orders &#36;50+</h6></div>
        <div>&#215;</div>
        
    </div>
    
        <div className='navlinks-itemss'>
        

      
            <div className='mobile-menu'>
                <FaBars id='menu' onClick={Famenu}/>
                {menuOpen && (
                    <div className="menu-items">
                        <Link to ="/">Home</Link>
                        <Link to ="/cart">Cart</Link>
                        <Link to ="/pricing-page">Pricing-page</Link>
                        <Link to ="/services-page">Services-Page</Link>
                        <Link to ="/shop-details">Shop-Details</Link>
                       
                    </div>
                )}
            </div>
            <div
                >
                    
            </div>
            
            <nav>
                {/* Menu 1 */}
                <Link id='act' to="/"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Home <FaChevronDown/>
                    {isHovered &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 2 */}
                <Link to="/shop-details"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Shop <FaChevronDown/>
                    {isHovered1 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 3 */}
                <Link to="/Cart"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Cart <FaChevronDown/>
                    {isHovered2 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>
                {/* Menu 4 */}
                <Link to="/services-page"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Services <FaChevronDown/>
                    {isHovered3 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 5 */}
                <Link to="/pricing-page"
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Pricing<FaChevronDown/>
                    {isHovered4 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>
            </nav>

                <img id='navimg' src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_logo-black.png_tn2q3i.png" height="30px" alt="Teespace logo" />

                <div className='icn-divv'>

                     <div className="search-cont">
                        <a href="/"><FaSearch className="search-icn" /></a>
                        <a href="/"><FaUser className='user-icn'/></a>
                    </div>

                    <div className='nav-icn'>
                        <div>
                            <a id='fastar' href="/"><FaRegStar/></a>
                            <p className='tag'>0</p>
                        </div>
                        <div>
                            <a id='fashop' href="/"><img height={15} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1714061979/shopping-bag-line_x9mmwe.svg" alt="" /></a> 
                            <p className='tag'>0</p>
                        </div>
                
                    </div>
                    <button type="button">Let's Talk</button>
                </div>
           
          

        </div>
        {/* End of nav section */}

        {/* Services */}
        <div className='serv'>
            <h3>Services</h3>
            <p>Home &#8212; Services</p>
        </div>

        <div className='serv-tag'>
            <p><img height={15} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730457/Vector_1_zirjbf.png" alt="" />All the features you need</p>
            <h3>Fast and Quality Service</h3>
        </div>
        <div className='serv-list'> 
            <div>
            <ServiceList iconn= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730456/Link_1_zonlzk.png" 
                        head= "Printing Services"
                        descp= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, similique."/>                
            </div>
            <div>
            <ServiceList iconn= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730456/Link_2_trjaok.png" 
                        head= "Digital Scanning"
                        descp= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, similique."/>                
            </div>
            <div>
            <ServiceList iconn= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730456/Link_3_vz1vo0.png" 
                        head= "Design Services"
                        descp= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, similique."/>                
            </div>
            <div>
            <ServiceList iconn= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730402/Link_4_odktkm.png" 
                        head= "Copying Services"
                        descp= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, similique."/>                
            </div>

        </div>

        {/* Quality Services */}

        <div className='qua-title'>
            <p>Quality Service</p>
            <h3>T-Shirt Printing for Everyone</h3>
        </div>

      <div className='quality-serv'>
        <div>
        <QualityServ qimg= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730402/Link_5_aix7gn.png"
                    qhead= "Graphic Design Services"
                    qbody= "What's more, we do it right! A full administration printing background. Print shirts for yourself and your online business."
                    qbutton= "Create your Own" />
        </div>
        <div>
        <QualityServ qimg= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730402/Link_6_ujcxkg.png"
                    qhead= "Printing Services"
                    qbody= "What's more, we do it right! A full administration printing background. Print shirts for yourself and your online business."
                    qbutton= "Print for yourself" />
        </div>
        <div>
        <QualityServ qimg= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730401/Link_7_wkv008.png"
                    qhead= "POD for online stores"
                    qbody= "What's more, we do it right! A full administration printing background. Print shirts for yourself and your online business."
                    qbutton= "Get Started Now" />
        </div>

      </div>
        {/* Fast and quality service  */}

      <div className='qual-tag'>
        <p><FaBolt id='bolt'/>Fast and Quality Service</p>
        <h3>Print shirts for yourself or your <br /> online business</h3>
        <div className='qual-type'>
            <div>
                <img id='img1' height={400} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730401/div.haru-banner__image_buzcxh.png" alt="" />
                <img id='img2' height={240} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730400/banner-66.jpg_grkeuq.png" alt="" />

            </div>

            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='accd-head'>Graphic Design Services</Accordion.Header>
                        <Accordion.Body className='accd-body'>
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item  eventKey="1">
                    <Accordion.Header className='accd-head'>Printing Services</Accordion.Header>
                        <Accordion.Body className='accd-body'>
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='accd-head'>POD for online stores</Accordion.Header>
                        <Accordion.Body className='accd-body'>
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='accd-head'>Branding and White-Label Printing</Accordion.Header>
                        <Accordion.Body className='accd-body'>
                            To make a T-shirt design, your first need to install specific graphic
                            design software. Once you’ve done that, start your creation and make
                            sure that your final design is at least 220 PPI so it won’t be pixelated
                            when printed…
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>




        </div>
      </div>

            {/* T-shirt printing */}
        
            

            <div className='shrt-print'>
                <div className='shrt-dv'>
                    <h3>T-Shirt Printing made easy.</h3>
                    <p>Let us show you how your product come to life.</p>
                </div>
                <div className='shirt-prnt'>
                    <div>
                        <TshirtPrint simg= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730401/div.haru-banner__image_1_dbphf2.png"
                                sbody2= "Printing Services" />
                    </div>
                    <div>
                        <TshirtPrint simg= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730401/div.haru-banner__image_2_opknyb.png"
                                sbody= "Graphic Design"
                                sbody2= "Services" />
                    </div> 
                    <div>
                        <TshirtPrint simg= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730400/div.haru-banner__image_3_gpzutx.png"
                                sbody= "POD for online" 
                                sbody2= "stores" />
                    </div> 
                    <div>
                        <TshirtPrint simg= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1718730400/div.haru-banner__image_4_klik2u.png"
                                sbody= "Branding & white-"
                                sbody2= "label printing" />
                    </div>  
                </div>
               
            </div>

            {/* Footer section  */}

            <footer>
       <div className='footer-sect'>

        <div className='info-sect'>
            <img height={30} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_logo-black.png_tn2q3i.png" alt="TeeSpace logo" />
            <p>hello@teespace.io</p>
            <h6>+020360383996</h6>
            <p>3665 Paseo Place, Suite 0960 <br />San Diego</p>
        </div>
        <div className='links-sect'>
            <h6>Information</h6>
            <div className='link'>
                <a href="/">About Us</a>
                <a href="/">Our Blog</a>
                <a href="/">Start a Return</a>
                <a href="/">Contact Us</a>
                <a href="/">Shipping FAQ's</a>
                </div>
            
        </div> 
        <div className='links-sect'>
            <h6>Services</h6>
            <div className='link'>
                <a href="/">Printing Services</a>
                <a href="/">Digital Scanning</a>
                <a href="/">Design Services</a>
                <a href="/">Copying Services</a>
                <a href="/">Print on Demand</a>
                </div>
            
        </div> 
        <div className='useful-links'>
            <h6>Useful Links</h6>
            <div className='link'>
                <a href="/">My Account</a>
                <a href="/">Print Provider</a>
                <a href="/">Become a Partner</a>
                <a href="/">Custom Products</a>
                <a href="/">Make your own Shirts</a>
            </div>
            
        </div>
        <div className='questions'>
            <h6>Newsletter</h6>
            <p>Subscribe to our newsletter.</p>
        
        <InputGroup id='frm' className="mb-3">
        <div>
            <Form.Control
                placeholder="Your email address"
                id='subs-input2'
                aria-describedby="basic-addon2"
            /> 
        </div>
        <div>
            <Button id="subs-btn2">
                Subscribe
            </Button> 
        </div>
            
           
        </InputGroup>



        </div>
      
        </div> 
        <div className='foot'>
            <div>
                <p className='footer-p'>&#169;2022 TeeSpace. All rights reserved.</p>
            </div>
            
            <img id='footer-imgg' height={20} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/footer-payment-method.png_abk6xc.png" alt="Supported payment method" />
            <div className='social-links'>
            <a href="/"><FaTwitter/></a>
            <a href="/"><FaFacebook/></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaYoutube/></a>
            </div>
        </div>
        
        
        
    </footer>
    
    </>
    
  )
}

export default Main
