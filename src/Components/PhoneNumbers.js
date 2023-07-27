import React from 'react'
import './PhoneNumber.css'

function PhoneNumbers() {
    return (
        <div  >
            <div className='phonetable' >
                <div className='phonehead' >
                    Telefon Numaraları
                </div >
                <br></br>

                <div className='left' >

                    <ul className="list-group" >

                        <li className="list-group-item">Akif</li>
                        <li className="list-group-item">daire başkanı </li>
                    </ul>
                    <ul className='list-group'>
                        <li className="list-group-item"> 0543356345 </li>
                    </ul>
                </div>

                <div className='right'>

                    <ul className="list-group">

                    </ul>
                </div>

            </div>
            


        </div>
    )
}

export default PhoneNumbers