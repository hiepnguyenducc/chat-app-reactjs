import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


function Register(){
  const navigate = useNavigate();
  const [registerInput, setRegisterInput]= useState({
    email:'',
    phone:'',
    name:'',
    password:'',
    confirmPassword:'',
    error_list:[],
  })
  const handleInput=(e)=>{
  const value =e.target.value
setRegisterInput({...registerInput,[e.target.name]:value});
  }
  const registerSubmit =(e)=>{
    e.preventDefault();
    if(registerInput.password !== registerInput.confirmPassword){
      return;
    }
   const data = {
    email:registerInput.email,
     name:registerInput.name,
    phone:registerInput.phone,
    password:registerInput.password,
   }
    axios.get('/sanctum/csrf-cookie').then(res=>{
      axios.post(`api/register`,data).then(res=>{
        if(res.data.status ===200){
          localStorage.setItem('auth_token',res.data.token);
          localStorage.setItem('auth_name',res.data.username);
          Swal.fire({
            position: "center",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')

        }else if (res.data.status === 422) {
          setRegisterInput({ ...registerInput, error_list: res.data.errors });
        }

      })
    })

    console.log(data)
  }
  return(
    <>
      <form onSubmit={registerSubmit}>
      <section
        className="h-screen flex items-center justify-center bg-no-repeat inset-0 bg-cover bg-[url('../images/bg.png')]">
        <div className="container 2xl:px-80 xl:px-52">
          <div className="bg-white rounded-lg p-5" style={{boxShadow: 'rgba(99,99,99,0.2) 0px 2px 8px 0px'}}>
            <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-6">

              <div className="xl:col-span-2 lg:col-span-1 hidden lg:block">
                <div
                  className="bg-sky-600 text-white rounded-lg flex flex-col justify-between gap-10 h-full w-full p-7">

                  <span className="font-semibold tracking-widest uppercase">TechAuth </span>

                  <div>
                    <h1 className="text-3xl/tight mb-4">We're here to help you level up.</h1>
                    <p className="text-gray-200 font-normal leading-relaxed">It is a long established fact that a reader
                      will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>

                  <div>
                    <div className="bg-sky-700/50 rounded-lg p-5">
                      <p className="text-gray-200 text-sm font-normal leading mb-4">There are many variations of
                        passages of Lorem Ipsum available, but the majority in some form</p>
                      <div className="flex items-center gap-4">
                        <img src="assets/images/user.png" alt="" className="h-12 rounded-lg"/>
                        <div>
                          <p className="font-normal">Timson K</p>
                          <span className="text-xs font-normal">Freelancer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="xl:col-span-3 lg:col-span-2 lg:m-10">
                <div>
                  <h1 className="text-2xl/tight mb-3">Sign Up</h1>
                  <p className="text-sm font-medium leading-relaxed">We are here to help you and we'd love to connect
                    with you.</p>
                </div>

                <div className="space-y-5 mt-10">
                  <div>
                    <label className="font-medium text-sm block mb-2" htmlFor="email">Name</label>
                    <input
                      className="text-gray-500 border-gray-300 focus:ring-0 focus:border-gray-400 text-sm rounded-lg py-2.5 px-4 w-full"
                      type="text" id="email" name="name" onChange={handleInput} value={registerInput.name}
                      placeholder="Enter Your Name"/>
                  </div>
                  <div>
                    <label className="font-medium text-sm block mb-2" htmlFor="email">Email</label>
                    <input
                      className="text-gray-500 border-gray-300 focus:ring-0 focus:border-gray-400 text-sm rounded-lg py-2.5 px-4 w-full"
                      type="email" id="email" name="email" onChange={handleInput} value={registerInput.email}
                      placeholder="Enter Your Email"/>
                  </div>

                  <div>
                    <label className="font-medium text-sm block mb-2" htmlFor="phone">Phone</label>
                    <input
                      className="text-gray-500 border-gray-300 focus:ring-0 focus:border-gray-400 text-sm rounded-lg py-2.5 px-4 w-full"
                      type="text" id="phone" name="phone" onChange={handleInput} value={registerInput.phone}
                      placeholder="Enter Your Phone"/>
                  </div>

                  <div>
                    <label className="font-medium text-sm block mb-2" htmlFor="pwd">Password</label>
                    <input
                      className="text-gray-500 border-gray-300 focus:ring-0 focus:border-gray-400 text-sm rounded-lg py-2.5 px-4 w-full"
                      type="password" id="pwd" name="password" onChange={handleInput} value={registerInput.password}
                      placeholder="Enter Your Password"/>
                  </div>
                  <div>
                    <label className="font-medium text-sm block mb-2" htmlFor="cpwd">Confirm Password</label>
                    <input
                      className="text-gray-500 border-gray-300 focus:ring-0 focus:border-gray-400 text-sm rounded-lg py-2.5 px-4 w-full"
                      type="password" onChange={handleInput} value={registerInput.confirmPassword} id="cpwd"
                      name="confirmPassword" placeholder="Confirm Password"/>
                  </div>

                </div>

                <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
                  <button type="submit" className="bg-sky-600 text-white text-sm rounded-lg px-6 py-2.5">Sign Up
                  </button>
                  <p className="text-sm font-medium text-gray-500">Already have account? <Link to={"/login"}
                                                                                               className="ms-2 underline text-sky-600">Sign
                    In</Link></p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      </form>
    </>
  )
}

export default Register
