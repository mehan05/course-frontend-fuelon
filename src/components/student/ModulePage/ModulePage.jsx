import StudentNavBar from "../components/SrudentNavbar/StudentNavBar"

const ModulePage = () => {
  return (
    <div className="mr-20 ">
           <div className="  m-8">
                    <StudentNavBar/>
             </div >

             <div className="">
               
                  <div className="flex flex-col gap-5  pl-5 max-w-[1100px]">
                      <div className="">
                          <img src="/courseImage.png"  alt=""  className="w-[892px] h-[454.85px]"/>
                        <div className="mt-5 flex justify-start gap-28 items-center">  
                              <p className="p-4 bg-[#EFEFF2] rounded-3xl">Developement</p>
                              <div className="flex gap-2">
                                  <img src="/calendar-icon.png"  className="w-[32px] h-[32px]" alt="" />
                                    <p className="text-[#7F7E97]">24/07/2024</p>
                              </div>
                              <div className="flex gap-2">
                                  <img src="/cap-icon.png"  className="w-[32px] h-[32px]" alt="" />
                                    <p className="text-[#7F7E97]">2350 Students enrolled</p>
                              </div>
                              <div className="flex gap-2">
                                
                                    <p className="text-[#7F7E97]">⭐(4.8 reviews)</p>
                              </div>
                        </div>
                      </div>
                  </div>

                  <div className="">

                  </div>

             </div>

    </div>
  )
}

export default ModulePage