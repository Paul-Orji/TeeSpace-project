import React from 'react'
import './pricing.css'
import { FaChevronRight, FaFlag, FaCheck, FaDotCircle} from 'react-icons/fa'
import Pricing from '../HomePage/pricing/Pricing'
import Footer from '../HomePage/footer/Footer'
// import { useState } from 'react';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';






const PricingMain = () => {
    // const [checked, setChecked] = useState(false);
    // const [radioValue, setRadioValue] = useState('1');
  
    // const radios = [
    //   { name: 'Active', value: '1' },
    //   { name: 'Radio', value: '2' },
    //   { name: 'Radio', value: '3' },
    // ];


  return (
   <>
        <div className='pric'>
            <h3>Pricing Plans</h3>
            <p>Home &#8212; Pricing Plans</p>
        </div>

        <div className='choose-pln'>
            <div className='div1'>
                <p className='p-hd'><FaFlag className='faflag'/> Choose a Plan</p>
                <h3>Simple pricing for <br /> everyone</h3>
                <p className='p1'>T-shirt Printing for Everyone. Get a head start <br />
                    with free design templates you can <br />
                    customize in a few clicks.
                </p>
                <a id='div1-link' href="/">Learn More <FaChevronRight/></a>
            </div>
            <img id='circle' height={300} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1719909421/div.haru-decor__circle_g0vsl6.png" alt="" />
            <img id='circle1' height={150} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1719909421/div.haru-decor__circle_g0vsl6.png" alt="" />

            <div className='div2'>
                
                <div className='div2-a'>
                   <h6>What's inside</h6> 
                   <p><FaCheck className='facheck'/>Full access to all features</p>
                   <p><FaCheck className='facheck'/>Mix and match colors, sizes, and designs</p>
                   <p><FaCheck className='facheck'/>Fast and free standard shipping</p>
                   <p><FaCheck className='facheck'/>Customer happiness guarantee</p>
                   <p><FaCheck className='facheck'/>Use on unlimited projects</p>
                   <p><FaCheck className='facheck'/>No credit card required</p>
                   <p><FaCheck className='facheck'/>Friendly support</p>
                   <button id='div2a-btn' type="button">Get Started</button>
                </div>
                <div className='div2-b'>
                    <p className='access'>Access to update</p>
                    <p className='access2'>Updates comes to the email</p>
                    <div className='btn-dv'>
                    {/* <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup> */}
    
  

                        <button className='btn-1' type="button">3 months</button>
                        <button className='btn-2' type="button">Forever</button>
                    </div>
                    <p className='access1'>Lifetime license</p>
                    <p className='access2'>Lorem ipsum dolor sit amet.</p>
                    <div className='btn-dv'>
                        <button className='btn-1' type="button">Personal</button>
                        <button className='btn-2' type="button">Corperate</button>
                    </div>
                    <div className='p-slash'>
                        <h3>$68</h3>
                        <p>$88</p>
                    </div>
                    
                </div>
                
            </div>

        </div>

        <Pricing/>

        {/* Chhose a Plan */}

        <div className='choose-plan'> 
          <div className='chos-pln'>
            <img height={300} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1719817113/pricing-plans-1.png_wwgrzn.png" alt="" />
            <h3>Choose a plan & get started</h3>
            <p className='pln-dsc'>
                Printing organization mottos While the Internet might assume <br />
                control of numerous parts of printing, a few things are as yet <br />
                favored on paper.
            </p>
          </div>
          <div>
            <div className='starter'>
              <h5><FaDotCircle className='dot-c'/>Starter</h5>
              <p className='p-des'>Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Necessitatibus expedita rem animi ipsum?</p>
              <div className='prcc'>
                <p className='amt'>$37</p>
                <p>/month</p>
              </div>

            </div>
            <div className='starter'>
              <h5><FaDotCircle className='dot'/>Standard</h5>
              <p className='p-des'>Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Necessitatibus expedita rem animi ipsum?</p>
              <div className='prcc'>
                <p className='amt'>$67</p>
                <p>/month</p>
              </div>

            </div>
            <div className='starter'>
              <h5><FaDotCircle className='dot'/>Pro</h5>
              <p className='p-des'>Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Necessitatibus expedita rem animi ipsum?</p>
              <div className='prcc'>
                <p className='amt'>$99</p>
                <p>/month</p>
              </div>

            </div>
            <button id='plan-btn' type="button">Purchase Now</button>
          </div>

        </div>

        <Footer/>

        
   
   </>
  )
}

export default PricingMain
