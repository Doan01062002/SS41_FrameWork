import React, { useState } from 'react'

interface Employee{
  id:string
  name:string
  status:boolean
  birth:string
  email:string
  address:string
}

interface ListEmployee{
  listEmployee:Employee[]
  saveData:(key:string,value:any)=>void
}

export default function TableEmployee({listEmployee, saveData}:ListEmployee) {
  //Trạng thái của nhân viên
  const [statusEmployee,setStatusEmployee] = useState<boolean>(true)
  //Hàm xóa Nhân viên
  const deleteEmployee = (id:string)=>{
    const idNotDelete = listEmployee.filter((value)=>{
      return value.id !== id
    })

    //lưu dữ liệu lên local
    saveData("employees", idNotDelete)
  }

  //Hàm chặn nhân viên
  const blockEmployee = (id:string)=>{

  }
  return (
    <div>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colSpan={3}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {listEmployee.map((value,index)=>{
            return (<tr key={value.id}>
            <td>{index +1}</td>
            <td>{value.name}</td>
            <td>{value.birth}</td>
            <td>{value.email}</td>
            <td>{value.address}</td>
            <td>
              {value.status === true ? <div className="d-flex align-items-center gap-2">
                <div className="status status-active" />
                <span> Đang hoạt động</span>
              </div> : <div className="d-flex align-items-center gap-2">
                <div className="status status-stop" />
                <span> Ngừng hoạt động</span>
              </div>}
            </td>
            <td>
              <button onClick={()=>blockEmployee(value.id)} className="btn btn-warning btn-sm">Chặn</button>
            </td>
            <td>
              <button className="btn btn-success btn-sm">Sửa</button>
            </td>
            <td>
              <button onClick={()=>deleteEmployee(value.id)} className="btn btn-danger btn-sm">Xóa</button>
            </td>
          </tr>)
          })}
          
          {/* <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>15/07/1985</td>
            <td>ttb@gmail.com</td>
            <td>Cầu Giấy, Hà Nội</td>
            <td>
              <div className="d-flex align-items-center gap-2">
                <div className="status status-stop" />
                <span> Ngừng hoạt động</span>
              </div>
            </td>
            <td>
              <button className="btn btn-warning btn-sm">Bỏ chặn</button>
            </td>
            <td>
              <button className="btn btn-success btn-sm">Sửa</button>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Xóa</button>
            </td>
          </tr> */}
        </tbody>
      </table>

      {/* Modal xác nhận chặn tài khoản */}
      <div className="overlay" hidden>
        <div className="modal-custom bg-white p-4 rounded">
          <div className="modal-title d-flex justify-content-between align-items-center mb-3">
            <h4>Cảnh báo</h4>
            <i className="fa-solid fa-xmark" />
          </div>
          <div className="modal-body-custom mb-3">
            <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
          </div>
          <div className="modal-footer-custom d-flex justify-content-end gap-3">
            <button className="btn btn-light">Hủy</button>
            <button className="btn btn-danger">Xác nhận</button>
          </div>
        </div>
      </div>
      {/* Modal xác nhận xóa tài khoản */}
      <div className="overlay" hidden>
        <div className="modal-custom bg-white p-4 rounded">
          <div className="modal-title d-flex justify-content-between align-items-center mb-3">
            <h4>Cảnh báo</h4>
            <i className="fa-solid fa-xmark" />
          </div>
          <div className="modal-body-custom mb-3">
            <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
          </div>
          <div className="modal-footer-custom d-flex justify-content-end gap-3">
            <button className="btn btn-light">Hủy</button>
            <button className="btn btn-danger">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  )
}
