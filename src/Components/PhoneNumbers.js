import React from 'react'
import '../CssPages/PhoneNumber.css'
import '../CssPages/NavBar.css'
function PhoneNumbers() {
    return (
        <div  >
            <div className='PhoneTable shadow'>
                <div className='PhoneHeader'>
                    <h2>Telefon Numaraları</h2>
                </div>
                {/* <div className='PhoneBody'>
                    <div className='PhoneBodyLeft'>
                        <div className='PhoneBodyLeftTop'>Alper SONAT</div>
                        <div className='PhoneBodyLeftBottom'>Daire Başkanlığı</div>
                        
                    </div>
                    <div className='PhoneBodyRight'>05346422354</div>
                </div> */}
                <div className='PhoneBody'>
                    <div className='PhoneBodyLeft'>
                        <div className='PhoneBodyLeftTop'>Alper SONAT</div>
                        <div className='PhoneBodyLeftBottom'>Daire Başkanlığı</div>

                    </div>
                    <div className='PhoneBodyRight'>
                        <div className='phoneNumber'>Alper SONAT</div>

                    </div>
                </div>
                <div className='PhoneBody'>
                    <div className='PhoneBodyLeft'>
                        <div className='PhoneBodyLeftTop'>Alper SONAT</div>
                        <div className='PhoneBodyLeftBottom'>Daire Başkanlığı</div>

                    </div>
                    <div className='PhoneBodyRight'>
                        <div className='phoneNumber'>Alper SONAT</div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default PhoneNumbers