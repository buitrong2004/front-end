import { Route, Routes, useNavigate } from "react-router-dom"

import HomePage from "./compoents/page"
import Dashboard from "./admin/dashboard"
import MovieDetail from "./moviedetail/moviedetail"
import Room from "./admin/room/room"
import { useEffect, useState } from "react"
import { IRoom } from "./movie/room"
import { AddRoom, ListRoom, RoomUpdate } from "./service/room"
import CreateRoom from "./admin/room/createroom"
import UpdateRoom from "./admin/room/updateroom"
import CreateArea from "./admin/area/createarea"
import { IArea } from "./movie/area"
import { AddArea } from "./service/area"
import Area from "./admin/area/area"
import UpdateArea from "./admin/area/updatearea"
import Seat from "./admin/seat/seat"
import CreateSeat from "./admin/seat/createseat"
import SeatType from "./admin/seat_type/seat_type"
import CreateSeatType from "./admin/seat_type/create_seat_type"
import { ISeatType } from "./movie/seat_type"
import { SeatsTypeAdd, SeatsTypeUpdate } from "./service/seat_type"
import UpdateSeatType from "./admin/seat_type/updateseattype"





function App() {
  const [rooms,setRooms] = useState<IRoom[]>([])
  const [areas,setAreas] = useState<IArea[]>([])
  const [settypes,setSetTypes] = useState<ISeatType[]>([])
  const navigate= useNavigate()
useEffect(()=>{
      (async()=>{
        const data = await ListRoom()
        setRooms(data)
      })()
},[])

const addRoom = async(roomData:IRoom)=>{
  try {
    const room = await AddRoom(roomData)
    alert("Thêm phòng thành công.")
    setRooms([...rooms,room])
    navigate("/room")
    
    
    
  } catch (error) {
    console.log(error);
    
  }
} 
const updateRoom = async(roomData:IRoom,id:number|string)=>{
  try {
    const roomDta = await RoomUpdate(roomData,id)
    alert("Cập nhật thành công.")
      const newrooms = rooms.map(room => (room.id == room)?roomDta:room)
      setRooms(newrooms)
      navigate('/room')
  } catch (error) {
    console.log(error);
    
  }
}
const areAdd = async(areaData:IArea)=>{
  try {
    const area = await AddArea(areaData)
    alert("Thêm khu vực thành công.")
    setAreas([...areas,area])
    navigate("/admin/area")
    
    
    
  } catch (error) {
    console.log(error);
    
  }
}
const updateArea = async(id:number|string,areaData:IArea)=>{
  try {
    const areaDta = await RoomUpdate(areaData,id)
    alert("Cập nhật thành công.")
      const newareas = areas.map(area => (area.id == area)?areaDta:area)
      setRooms(newareas)
      navigate('/admin/area')
  } catch (error) {
    console.log(error);
    
  }
}
const seatTypeAdd = async(seatTypeData:ISeatType)=>{
  try {
    const seatType = await SeatsTypeAdd(seatTypeData)
    alert("Thêm kiểu ghế thành công.")
    setSetTypes([...setTypes,seatType])
    
    navigate("/admin/seat_type")

    
  } catch (error) {
    console.log(error);
    
  }
}
const seatTypeUpdate = async(seatTypeData:ISeatType,id:number|string)=>{
  try {
    const seatTypeData = await SeatsTypeUpdate(seatTypeData,id)
    alert("Cập nhật thành công.")
      const neweattype = settypes.map(settype => (settype.id == settype)?seatTypeData:settype)
      setSetTypes(neweattype)
      navigate('/admin/seat_type')
  } catch (error) {
    console.log(error);
    
  }
}
  return (
   
    <>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/moviedetail" element={<MovieDetail></MovieDetail>}></Route>
      <Route path="/room" element={<Room rooms={rooms}></Room>}></Route>
      <Route path="/admin/room/createroom" element={<CreateRoom onAdd={addRoom}></CreateRoom>}></Route>
      <Route path="/admin/area/createarea" element={<CreateArea addArea={areAdd}></CreateArea>}></Route>
      <Route path="/admin/room/edit/:id" element={<UpdateRoom onUpdate={updateRoom}></UpdateRoom>}></Route>
      <Route path="/admin/area" element={<Area></Area>}></Route>
      <Route path="/admin/area/edit/:id" element={<UpdateArea updateArea={updateArea}></UpdateArea>}></Route>
      <Route path="/admin/seat" element={<Seat></Seat>}></Route>
      <Route path="/admin/creatseat" element={<CreateSeat></CreateSeat>}></Route>
      <Route path="/admin/seat_type" element={<SeatType ></SeatType>}></Route>
      <Route path="/admin/create_type_seat" element={<CreateSeatType addSeatType={seatTypeAdd}></CreateSeatType>}></Route>
      <Route path="/admin/seat_type/edit/:id" element={<UpdateSeatType updateSeatType={seatTypeUpdate}></UpdateSeatType>}></Route>
     </Routes>

    </>
   
  ) 
}

export default App
