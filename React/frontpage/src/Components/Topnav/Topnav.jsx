import React from 'react'
import '../../App.css'
import Imgsetup from '../Imgsetup'
import Iconsetup from '../Iconsetup'
import List from '../List'
import Middlenav from './Middlenav'

const Topnav = () => {
    const mylist = ["All", "Skill"]
    const lastmenu = ["Return & Order", "Cart"]
    return (
        <>
            <section className='topnav'>
                <div className="container-fluid py-2">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <Imgsetup imgsource="https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png-1.webp" width={100} />
                        </div>
                        <div className="col-9">
                            <div className='d-flex gap-2 align-items-center'>
                                <div className='text-white d-flex align-items-center gap-2'>
                                    <Iconsetup icon="bi bi-geo-alt fs-4"></Iconsetup>
                                    <div>
                                        <div>
                                            <small>Delivering to Surat 395007</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                                    <ul className="dropdown-menu">
                                        <List menuItems={mylist} />
                                    </ul>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    <button className='btn btn-warning'>
                                        <Iconsetup icon="bi bi-search"></Iconsetup>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <ul className='text-white d-flex m-0 p-0 list-unstyled gap-2 justify-content-end'>
                                <List menuItems={lastmenu} cls="text-white text-decoration-none" />
                                {/* <Iconsetup icon="bi bi-cart fs-4"></Iconsetup> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Middlenav />
        </>
    )
}

export default Topnav
