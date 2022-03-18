import React from 'react'

export default function Footer() {
    return (
            <div style={{width: '100vw', height: '5em', padding: '0 25em'}} className="col-12 m-auto bg-dark text-warning">
                <p className="float-end my-4"><a href="#" className='text-decoration-none text-warning border-bottom'>Back to top</a></p>
                <p className='my-4'>© 2022 Aura Špejeraitė · <a href="#" className='text-decoration-none text-warning border-bottom'>Privacy</a> · <a href="#" className='text-decoration-none text-warning border-bottom'>Terms</a></p>
            </div>
    )
}
