import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuDashboard from '../menudashboard'
import HeaderDashboard from '../headerdashboard'
import Logo from '../logo'
import ListSeatType from './list_seat_type'

type Props = {}

const SeatType = (props: Props) => {
  return (
    <div>
         <div>
        <div className="dashboards">
      <div>
        <Logo></Logo>
        <HeaderDashboard></HeaderDashboard>
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <div
                className="offcanvas-md offcanvas-end bg-body-tertiary"
                tabIndex={-1}
                id="sidebarMenu"
                aria-labelledby="sidebarMenuLabel"
              >
                <MenuDashboard></MenuDashboard>
              </div>
            </div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Kiểu Ghế</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <NavLink to={`/admin/create_type_seat`}>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Create Type Seat
                      </button>
                    </NavLink>
                   
                  </div>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
             <svg className="bi"><use xlinkHref="#calendar3" /></svg>
             Create
           </button> */}
                </div>
              </div>
             <ListSeatType></ListSeatType>
            </main>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SeatType