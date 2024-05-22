import React, { useState } from 'react';
import TableEmployee from './TableEmployee';
import { v4 as uuidv4 } from 'uuid';

//khai báo kiểu dữ liệu cho đối tượng
interface Employee{
    id:string
    name:string
    status:boolean
    birth:string
    email:string
    address:string
}

export default function ManageEmployee() {
    //check hiển thị form
    const [showForm,setShowForm] = useState<boolean>(false)
    //giá trị của input name
    const [nameEmployee,setNameEmployee] = useState<string>("")
    //giá trị của input birth
    const [birthEmployee,setBirthEmployee] = useState<string>("")
    //giá trị của input email
    const [emailEmployee,setEmailEmployee] = useState<string>("")
    //giá trị của area address
    const [addressEmployee,setAddressEmployee] = useState<string>("")
    //lấy dữ liệu trên local
    const [listEmployee,setListEmployee] = useState<Employee[]>(()=>{
        const localEmployee = localStorage.getItem("employees")

        //kiểm tra xem dữ liệu cs trên local không, nếu không có thì tạo ra mảng rỗng
        const employees = localEmployee ? JSON.parse(localEmployee) : []

        return employees
    })

    //Hàm lưu dữ liệu lên local
    const saveData = (key:string,value:any)=>{
        localStorage.setItem(key, JSON.stringify(value))

        //cập nhật state để component được re-render
        setListEmployee(value)
    }

    //Các hàm cập nhật value trong input
    const nameValue = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setNameEmployee(e.target.value)
    }
    const birthValue = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setBirthEmployee(e.target.value)
    }
    const emailValue = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmailEmployee(e.target.value)
    }
    const addressValue = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setAddressEmployee(e.target.value)
    }

    //Hàm thêm mới nhân viên
    const addEmployee = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        //Tạo đối tượng mới
        const employee:Employee = {
            id:uuidv4(),
            name:nameEmployee,
            birth:birthEmployee,
            email:emailEmployee,
            address:addressEmployee,
            status:true
        }

        //push dữ liệu vào mảng
        listEmployee.push(employee)

        //Lưu dữ liệu lên local
        saveData("employees",listEmployee)

        //reset giá trị trong các ô input
        setNameEmployee("")
        setBirthEmployee("")
        setEmailEmployee("")
        setAddressEmployee("")
        
        //đóng form
        setShowForm(false)
    }
  return (
    <>
      <div className="container mt-4">
        <main className="main">
          <header className="d-flex justify-content-between mb-3">
            <h3>Nhân viên</h3>
            <button onClick={()=>setShowForm(true)} className="btn btn-primary">Thêm mới nhân viên</button>
          </header>
          <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
            <input
              style={{ width: 350 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm theo email"
            />
            <i className="fa-solid fa-arrows-rotate" title="Refresh" />
          </div>
          {/* Danh sách nhân viên */}
          <TableEmployee saveData = {saveData} listEmployee = {listEmployee}></TableEmployee>

          <footer className="d-flex justify-content-between align-items-center mt-3">
            <select className="form-select" style={{ width: 'auto' }}>
              <option selected>Hiển thị 10 bản ghi trên trang</option>
              <option>Hiển thị 20 bản ghi trên trang</option>
              <option>Hiển thị 50 bản ghi trên trang</option>
              <option>Hiển thị 100 bản ghi trên trang</option>
            </select>
            <ul className="pagination mb-0">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
      {/* Form thêm mới nhân viên */}
      {showForm && <div className="overlay">
        <form onSubmit={addEmployee} className="form bg-white p-4 rounded">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Thêm mới nhân viên</h4>
            <i onClick={()=>setShowForm(false)} className="fa-solid fa-xmark" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="userName">
              Họ và tên
            </label>
            <input onChange={nameValue} id="userName" type="text" className="form-control" value={nameEmployee}/>
            {nameEmployee === "" && <div className="form-text error">Họ và tên không được để trống.</div>}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="dateOfBirth">
              Ngày sinh
            </label>
            <input onChange={birthValue} id="dateOfBirth" type="date" className="form-control" value={birthEmployee}/>
          </div>
          {/* <div class="form-text error">Ngày sinh không được lớn hơn ngày hiện tại.</div> */}
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input onChange={emailValue} id="email" type="email" className="form-control" value={emailEmployee}/>
            {emailEmployee === "" && <div className="form-text error">Email không được để trống.</div>}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="address">
              Địa chỉ
            </label>
            <textarea
              onChange={addressValue} 
              className="form-control"
              id="address"
              rows={3}
              value={addressEmployee}
            />
          </div>
          <div>
            <button type="submit" className="w-100 btn btn-primary">Thêm mới</button>
          </div>
        </form>
      </div>}
    </>
  );
}
