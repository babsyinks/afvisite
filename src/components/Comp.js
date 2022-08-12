import React,{useState} from 'react'
import AnimateHeight from 'react-animate-height';
import Button from './Button'
import AfviVillageConcept from '../componentdata/components/AfviVillageConcept'
import GiantLakes from '../componentdata/components/GiantLakes'
import OfficeComplex from '../componentdata/components/OfficeComplex'
import RecreationAndSportsComplex from '../componentdata/components/RecreationAndSportsComplex'
import StaffQuarters from '../componentdata/components/StaffQuarters'

import './Comp.css'
const Comp = ({title,image,description}) => {
    //const[readMore,setReadMore] = useState(false)
    const [height, setHeight] = useState(0);
    let MyComp
    
    const handleDescription = ()=>{
        setHeight(height === 0 ? 'auto' : 0)
    }

    if(description === 'component'){
        switch(title){
            case 'AFVI Corporate Office Complex':
               MyComp = OfficeComplex
               break 
            case 'Giant Lakes':
                MyComp = GiantLakes
                break
            case 'Recreation and Sports Complexes':
                MyComp = RecreationAndSportsComplex
                break
            case 'AFVI Village Concept':
                MyComp = AfviVillageConcept
                break
            case 'Staff Quarters':
                MyComp = StaffQuarters
                break
            default:
                break
        }
    }

  return (
    <div className='indComp'>
        <h2>{title}</h2>
        <img src={`/images/${image}`} alt = {title} />
        {description && (
            <>
            <AnimateHeight id="example-panel"
                        duration={description === 'component'?1000:500}
                        height={height}>
                {MyComp?<MyComp/>:<div>{description}</div>}

                
            </AnimateHeight> 
            {<Button id={height === 0? 'button_pos':'button_neg'} text={height === 0?'Read More':'Close'} onClick={handleDescription} additionalStyle={{marginBottom:'1rem'}}/>}
            </>

        )}
  </div> 
  )
}

export default Comp

/* (height?(
    <>
        {MyComp?<MyComp/>:<div>{description}</div>}
        <Button id={'button_neg'} text={'Close'} onClick={handleDescription} additionalStyle={{marginBottom:'1rem'}}/>
    </>):<Button id={'button_pos'} text={'Read More'} onClick={handleDescription} additionalStyle={{marginBottom:'1rem'}}/>) */