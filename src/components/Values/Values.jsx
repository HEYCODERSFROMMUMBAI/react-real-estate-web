import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
}from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Values.css'
import data from '../../utils/accordion';
const Values = () => {
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container">
            {/* left code */}
            <div className='n-left'>
                <div className='image-container'>
                    <img src="./value.png"></img>
                </div>
            </div>
            {/* rights side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value we give to you</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you <br/>
                We belive a good blace to live can make your life better</span>

                <Accordion
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={0}
                    >


                </Accordion>
            </div>

        </div>
    </section>
  )
}

export default Values;