import React from "react";

function Firstpage() {
  return (
    <>
      <div className=" md:grid md:grid-cols-[300px_1fr] grid-cols-2 min-h-screen">
        <div className=" bg-[#4267B2] h-full">
          <div className="flex justify-center items-center my-5">
            <img className="w-[100px] " src="/images/myfigma.png" alt="" />
          </div>
          <div className=" flex  gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Dash Board</p>
          </div>

          <div className=" flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Accounts</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Contacts</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Groups</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Opportunities</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Price Book</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Activities</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Admin</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Reports</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Accounts Recievable</p>
          </div>

          <div className="flex gap-2 justify-start items-center my-5 px-16">
            <img className="w-4" src="/images/dashboard.png" alt="" />
            <p className="text-[#FFF] ">Accounts Payable</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="pl-8 py-6">
              <p className="text-[#12395C] text-[1.5rem] font-bold ">
                Accounts
              </p>
            </div>
            <div className=" px-8 py-4">
              <button className="bg-[#50B476] border rounded-xl text-[#FFF] p-2">
                Create Account
              </button>
            </div>
          </div>
          <div className=" pl-8 py-6">
            <p className="text-[#50B476] font-semibold">Breadcrumbs</p>
          </div>

          <div className="flex flex-row gap-4">
            <div class="relative inline-block text-left pl-4">
              <div>
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Options
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <input
                className="bg-[#E3E8F1] p-2 rounded-lg"
                type="text"
                placeholder="search"
              />
            </div>
            <div>
              <button className="bg-[#4267B2]  rounded-lg p-2 text-[#FFF]">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstpage;
