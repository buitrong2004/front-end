

import MenuDashboard from "../menudashboard";
import HeaderDashboard from "../headerdashboard";
import Logo from "../logo";


const CreateSeat = () => {


  return (
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
                <h1 className="h2">Thêm Ghế</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
              <form >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Số Ghế:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                   
                  />
                  <div id="emailHelp" className="form-text">
                    {/* {errors.room_name && (
                      <div className="text-danger ">
                        {errors.room_name.message}
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Kiểu Ghế:
                  </label>

                  <select
                    className="form-control"
                    aria-label="Large select example"
                 
                  >
                    <option selected>Chọn Khu Vực</option>
                    {/* {areas.map((area: IArea, i: number) => (
                      <option key={i + 1} value={area.area_id}>
                        {area.area_name}
                      </option>
                    ))} */}
                  </select>

                  <div id="emailHelp" className="form-text">
                    {/* {errors.area_id && (
                      <div className="text-danger ">
                        {errors.area_id.message}
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Số Phòng:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    
                  />
                  <div id="emailHelp" className="form-text">
                    {/* {errors.total_seat && (
                      <div className="text-danger ">
                        {errors.total_seat.message}
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Trạng Thái Ghế:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    
                  />
                  <div id="emailHelp" className="form-text">
                    {/* {errors.total_seat && (
                      <div className="text-danger ">
                        {errors.total_seat.message}
                      </div>
                    )} */}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CreateSeat;
