import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white border-b border-pinterin-border px-8 py-6 -m-8 mb-8">
          <div></div>
          <div className="flex items-center gap-12">
            <div className="flex items-center">
              <svg width="29" height="41" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M9.63292 0.375711C7.0789 -0.994817 2.04531 1.65337 0.599314 3.98474C-0.0448777 5.02798 0.000700393 5.77979 0.000700393 6.20632V29.0254L18.8769 41L22.4265 39.024V16.8011L3.04568 5.4566C4.0857 4.12216 6.42473 2.49493 8.17858 3.14847L25.4414 12.5613L25.4414 37.3178L29 35.3383V10.5824L9.63292 0.375711Z" fill="black" />
              </svg>
              <span className="text-black font-poppins text-2xl font-semibold mr-4">User</span>
              <div className="w-16 h-16 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                <span className="text-black font-poppins text-2xl font-bold">U</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Dashboard Title */}
            <h1 className="text-pinterin-dark-blue font-inter text-2xl font-bold mb-8">Dashboard</h1>

            {/* Exam & Practices Section */}
            <div className="bg-white rounded-[10px] shadow-lg p-6 mb-8">
              <h2 className="text-pinterin-dark-blue font-roboto text-base font-medium mb-6">Exam & Practices</h2>

              {/* Welcome Card */}
              <div className="bg-pinterin-dark-blue rounded-[11px] p-8 relative">
                <div className="text-white mb-6">
                  <div className="font-roboto text-3xl font-bold mb-2">Welcome!</div>
                  <div className="font-roboto text-2xl font-normal">What do you want to do first?</div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-[#1814F3] text-white px-8 py-3 rounded-[10px] font-roboto text-base font-medium">
                    Exam
                  </button>
                  <button className="bg-white text-[#595C5F] px-8 py-3 rounded-[10px] font-roboto text-base font-medium shadow-lg">
                    Practice
                  </button>
                </div>
              </div>
            </div>

            {/* My Progress Section */}
            <div className="bg-white rounded-[10px] shadow-lg p-6">
              <h2 className="text-pinterin-dark-blue font-roboto text-base font-medium mb-6">My progress</h2>

              <div className="flex items-center">
                {/* Pie Chart Placeholder */}
                <div className="w-[401px] h-[369px] relative">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/37829b83c6e5eb651d6c4a0d69be62a1df57e799?width=802"
                    alt="Progress Chart"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Legend */}
                <div className="ml-8 space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-5 bg-[#343C6A] mr-3"></div>
                    <span className="text-[#595C5F] font-inter text-sm">Math</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-5 bg-[#FC7900] mr-3"></div>
                    <span className="text-[#595C5F] font-inter text-sm">Reading</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-5 bg-[#1814F3] mr-3"></div>
                    <span className="text-[#595C5F] font-inter text-sm">Reading</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-5 bg-[#FA00FF] mr-3"></div>
                    <span className="text-[#595C5F] font-inter text-sm">Reading</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - My Schedule */}
          <div className="w-[356px] bg-white rounded-[5px] shadow-lg p-6 h-fit">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-pinterin-dark-blue font-roboto text-xl font-medium">My Schedule</h2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#10284B" />
              </svg>
            </div>

            {/* Schedule Items */}
            <div className="space-y-4">
              {/* Schedule Item 1 */}
              <div className="bg-white rounded-[7px] shadow-lg p-4">
                <div className="w-[78px] h-[17px] bg-[#FC7900] rounded-[3px] mb-3"></div>
                <div className="text-[#7F8183] font-roboto text-sm">Practice on Math</div>
              </div>

              {/* Schedule Item 2 */}
              <div className="bg-white rounded-[7px] shadow-lg p-4">
                <div className="w-[78px] h-[17px] bg-[#FC7900] rounded-[3px] mb-3"></div>
                <div className="text-[#7F8183] font-roboto text-sm">Practice on Math</div>
              </div>

              {/* Schedule Item 3 */}
              <div className="bg-white rounded-[7px] shadow-lg p-4">
                <div className="w-[78px] h-[17px] bg-[#FA00FF] rounded-[3px] mb-3"></div>
                <div className="text-[#7F8183] font-roboto text-sm">Test SAT 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
