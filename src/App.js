import logo from './logo.svg';
import './App.css';
import MgtForm from './component/MgtForm';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';


const defaultUsers = [
  {
    "id": "CMS-d-1",
    "name": "Ayomide Adebara",
    "email": "ayomide419@gmail.com",
    "phoneNumber": "+23481419419419"
  },
  {
    "id": "CMS-d-2",
    "name": "Festus Adebara",
    "email": "festus420@gmail.com",
    "phoneNumber": "+23481419419419"
  },
  {
    "id": "CMS-d-3",
    "name": "Cinderella Adebara",
    "email": "cindy421@gmail.com",
    "phoneNumber": "+23481419419419"
  },
]

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [editing, setEditing] = useState(false)
  const [editId, setEditId] = useState("")

  const [userDetails, setsetUserDetails] = useState([])

  //// LIST
  // useEffect(() => {
  //   let lc = JSON.parse(localStorage.getItem("contact_mgt"));
  //   console.log("This is the log: ", lc.length);

  //   if (lc.length === 0) {
  //     localStorage.setItem('contact_mgt', JSON.stringify(defaultUsers));
  //   } else {
  //     return
  //   }
  // }, [])

  console.log("This is the log: ", userDetails);

  const getDataFromLocalStorage = () => {
    let data = JSON.parse(localStorage.getItem('contact_mgt'));
    setsetUserDetails(data)
  }
  useEffect(() => {
    getDataFromLocalStorage()
  }, [])


  console.log("This is the Editing Item Status: ", editing);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber) {
      swal({
        title: "Ooppss!",
        text: "All fields must be field",
        icon: "error",
        button: "Close!"
      });
      return;
    }

    const id = `CMS-${Math.floor(Math.random() * 1000000)}`;
    let data = { id, name, email, phoneNumber }
    let editData = { id: editId, name, email, phoneNumber }

    // users.push(data)


    if (localStorage.getItem('contact_mgt')) {
      let storeData = JSON.parse(localStorage.getItem('contact_mgt'));

      if (editing) {
        alert("O ti zeh")
        const updatedItem = storeData.map(item => {
          if (item.id === editId) {
            item.name = name;
            item.email = email;
            item.phoneNumber = phoneNumber;
          }
          return item;
        })
        console.log("This is the user editData: ", updatedItem);

        localStorage.setItem('contact_mgt', JSON.stringify(updatedItem));
      } else {
        storeData.push(data)
        localStorage.setItem('contact_mgt', JSON.stringify(storeData));

      }
    } else {
      let storeData = []
      storeData.push(data)
      localStorage.setItem('contact_mgt', JSON.stringify(storeData));
    }

    await swal({
      title: "Hurray!",
      text: "A new member has been added!",
      icon: "success",
      button: "OK!"
    });

    setEditing(false)

    getDataFromLocalStorage()

  }




  const handleRemove = async (id) => {
    console.log("This is delete", id);
    if (window.confirm("Are you sure you want to remove this user!")) {
      let data = JSON.parse(localStorage.getItem('contact_mgt'));
      const res = data.filter(value => value.id !== id);
      localStorage.setItem('contact_mgt', JSON.stringify(res));
      await swal({
        title: "Cool!",
        text: "Participant has successfully been removed!",
        icon: "success",
        button: "Close!"
      });

      getDataFromLocalStorage()
    }

    return;
  }
  const handleEdit = async (id) => {
    console.log("This is edit", id);
    let data = JSON.parse(localStorage.getItem('contact_mgt'));
    const specificUser = data.find(dt => dt.id === id);
    console.log("THis is the specific user: ", specificUser);
    setEmail(specificUser.email)
    setPhoneNumber(specificUser.phoneNumber)
    setName(specificUser.name)
    setEditId(specificUser.id)
    setEditing(true)

  }



  return (
    <div className="App">
      <div className="border-grey form pd-25 round-8 mgt-30">
        <form onSubmit={handleSubmit}>
          <h3 className='mgb-20'>Contact Management FORM</h3>
          <div>
            <label className='d-block fs-20'>Name</label>
            <input
              type="text"
              className='border-grey pd-12 border-8'
              placeholder='Enter your name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className='mgb-20'>
            <label className='d-block fs-20'>Email</label>
            <input
              type="email"
              className='border-grey pd-12 border-8'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mgb-20'>
            <label className='d-block fs-20'>Phone Number</label>
            <input
              type="tel"
              className='border-grey pd-12 border-8'
              placeholder='+234'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>


          <button style={{ background: "blue", color: "#ffffff" }} type="submit" className='border-8 pdy-14 pdx-32 fs-24 fw-semi-bold mgt-15'>

            {
              editing ? "Edit User" : "Add"
            }
          </button>
        </form>
      </div>


      {/* LIST THIS HERE */}



      <div className='table-data mgy-50'>
        <h3 className='fs-32'>Investors</h3>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(userDetails) && userDetails.length ? userDetails.map((user, index) => (
              <tr key={user?.id}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNumber}</td>

                <td>
                  <button
                    onClick={() => handleRemove(user?.id)}
                    style={{ background: "blue", color: "#ffffff" }}
                    className='border-8 pdy-4 pdx-8 fs-15'
                  >Remove User</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      // alert("OOOOOO")
                      // return
                      handleEdit(user?.id)
                    }}
                    style={{ background: "blue", color: "#ffffff" }}
                    className='border-8 pdy-4 pdx-8 fs-15'
                  >Edit User</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={7} className="text-center">
                  No data!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
