const Login = () => {
  return (
    <div >
        <div  className="flex justify-end w-full m-10" >
                <button className=' pr-5 pl-5 pt-2 pb-2  rounded-lg bg-[#5072f5] border-2 '>Signup</button>
        </div>

        <div className="flex justify-around relative">
          <div className="absolute top-[10px] left-[20px]">

              <div className="flex flex-col gap-6">
                    <h1 className="text-4xl text-[#161439] font-semibold font-poppins">Welcome!</h1>
                    <h3 className="text-3xl text-[#161439] font-semibold font-poppins ">Login to your account</h3>
                    <div className="w-[399.32px ] h-[266px]"> 
                        <img src="/loginPageImage.png" alt="Image" />
                    </div>
              </div>
          </div>

          <div className="absolute top-[20px] left-[759px] border-2 p-10 w-[508px] h-[512px] rounded-lg">
 
              <div className="max-w-sm mx-auto " >
                <form >
                  <div className="mb-5 flex flex-col items-start"  >
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:black ">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="sahil@gmail.com"
                      required
                    />
                  </div>
                  <div className="mb-5 flex flex-col items-start">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:black">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div className="mb-5 flex flex-col items-start">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:black">
                      Role
                    </label>
                    <select name="role" id=""  className="shadow-sm  border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required>
                      <option value="trainee">Trainee</option>
                      <option value="Student">Student</option>
                    </select>
                   
                  </div>
                  <div className="flex justify-between mb-5">
                     <div>
                        <button className="text-gray-500">Forgot Password?</button >
                     </div>
                     <div>
                        <button className="rounded-lg pr-5 pl-5 pt-2 pb-2 bg-[#5072f5] border-2 ">Login</button >
                     </div>
                  </div>
                      <div className=" flex justify-between items-center" >
                            <p>Login With</p>
                            <div className="flex gap-6">
                              <button>

                              <img src="/facebookLogo.png" alt="fcebookLogo"   className="w-[42px] h-[42px]"/>
                              </button>
                              <button>

                              <img src="/GoogleLogo.png" alt="GoogleLogo" className="w-[42px] h-[42px]"/> 
                              </button>

                              <button>

                              <img src="/linkedinLogo.png" alt="LinkedinLogo" className="w-[42px] h-[42px]"/>
                              </button>
                            </div>

                      </div>
                </form>
              </div>
          </div>


            
        </div>
    </div>
  )
}


export default Login