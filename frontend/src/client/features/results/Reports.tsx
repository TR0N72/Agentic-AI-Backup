import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Reports() {
  const [activeTab, setActiveTab] = useState<"all" | "practice" | "exam">(
    "practice",
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white border-b border-[#DEE5ED] px-24 py-8 h-[137px]">
          <div className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1ae64bb127a8720e83bb138afd16a02600c4c0c4?width=88"
              alt="Pinterin Logo"
              className="w-11 h-11 mr-3"
            />
            <span className="text-[#10284B] font-dm-sans text-xl font-bold">
              Pinterin
            </span>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4">
              <svg
                width="29"
                height="41"
                viewBox="0 0 29 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.63292 0.375711C7.0789 -0.994817 2.04531 1.65337 0.599314 3.98474C-0.0448777 5.02798 0.000700393 5.77979 0.000700393 6.20632V29.0254L18.8769 41L22.4265 39.024V16.8011L3.04568 5.4566C4.0857 4.12216 6.42473 2.49493 8.17858 3.14847L25.4414 12.5613L25.4414 37.3178L29 35.3383V10.5824L9.63292 0.375711Z"
                  fill="black"
                />
              </svg>
              <span className="text-black font-poppins text-2xl font-semibold">
                User
              </span>
              <div className="w-16 h-16 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                <span className="text-black font-poppins text-2xl font-bold">
                  U
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-8">
          <div className="flex items-center gap-3 mb-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 35V31.6667H18.3333V26.5C16.9722 26.1944 15.7572 25.6183 14.6883 24.7717C13.6194 23.925 12.8344 22.8622 12.3333 21.5833C10.25 21.3333 8.50722 20.4239 7.105 18.855C5.70278 17.2861 5.00111 15.4456 5 13.3333V11.6667C5 10.75 5.32667 9.96556 5.98 9.31333C6.63333 8.66111 7.41778 8.33444 8.33333 8.33333H11.6667V5H28.3333V8.33333H31.6667C32.5833 8.33333 33.3683 8.66 34.0217 9.31333C34.675 9.96667 35.0011 10.7511 35 11.6667V13.3333C35 15.4444 34.2983 17.285 32.895 18.855C31.4917 20.425 29.7489 21.3344 27.6667 21.5833C27.1667 22.8611 26.3822 23.9239 25.3133 24.7717C24.2444 25.6194 23.0289 26.1956 21.6667 26.5V31.6667H28.3333V35H11.6667ZM11.6667 18V11.6667H8.33333V13.3333C8.33333 14.3889 8.63889 15.3406 9.25 16.1883C9.86111 17.0361 10.6667 17.64 11.6667 18ZM20 23.3333C21.3889 23.3333 22.5694 22.8472 23.5417 21.875C24.5139 20.9028 25 19.7222 25 18.3333V8.33333H15V18.3333C15 19.7222 15.4861 20.9028 16.4583 21.875C17.4306 22.8472 18.6111 23.3333 20 23.3333ZM28.3333 18C29.3333 17.6389 30.1389 17.0344 30.75 16.1867C31.3611 15.3389 31.6667 14.3878 31.6667 13.3333V11.6667H28.3333V18Z"
                fill="#10284B"
              />
            </svg>
            <h1 className="text-[#10284B] font-inter text-2xl font-bold">
              Your Reports
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] inline-flex w-[253px] h-[42px] relative">
              {/* All Tab */}
              <button
                onClick={() => setActiveTab("all")}
                className={`rounded-[10px] w-[87px] h-[42px] flex items-center justify-center transition-colors ${activeTab === "all" ? "bg-[#10284B]" : "bg-transparent"
                  }`}
              >
                <span
                  className={`font-roboto text-base font-medium ${activeTab === "all" ? "text-white" : "text-[#595C5F]"
                    }`}
                >
                  All
                </span>
              </button>
              {/* Practice Tab */}
              <button
                onClick={() => setActiveTab("practice")}
                className={`rounded-[10px] w-[83px] h-[42px] flex items-center justify-center transition-colors ${activeTab === "practice" ? "bg-[#10284B]" : "bg-transparent"
                  }`}
              >
                <span
                  className={`font-roboto text-base font-medium ${activeTab === "practice" ? "text-white" : "text-[#595C5F]"
                    }`}
                >
                  Practice
                </span>
              </button>
              {/* Exam Tab */}
              <button
                onClick={() => setActiveTab("exam")}
                className={`rounded-[10px] w-[83px] h-[42px] flex items-center justify-center transition-colors ${activeTab === "exam" ? "bg-[#10284B]" : "bg-transparent"
                  }`}
              >
                <span
                  className={`font-roboto text-base font-medium text-center ${activeTab === "exam" ? "text-white" : "text-[#595C5F]"
                    }`}
                >
                  Exam
                </span>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-[17px] p-12 w-[1397px] h-[247px] flex items-center justify-center">
            {activeTab === "all" && (
              <div className="flex items-center gap-12">
                {/* Empty State Text */}
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#DEE5ED] flex items-center justify-center mb-4 mx-auto">
                    <div className="w-6 h-6 rounded-full bg-[#DEE5ED] flex items-center justify-center">
                      <span className="text-[#595C5F] text-sm font-medium">
                        !
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#10284B] font-roboto text-lg font-medium mb-2">
                    No reports found
                  </h3>
                  <p className="text-[#595C5F] font-roboto text-sm">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex-shrink-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1268414b1e783b5ea54e5160a8c919f2e8533628?width=1122"
                    alt="No reports illustration"
                    className="w-[561px] h-[204px] object-contain"
                  />
                </div>
              </div>
            )}

            {activeTab === "practice" && (
              <div className="flex items-center gap-12">
                {/* Practice Content */}
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#DEE5ED] flex items-center justify-center mb-4 mx-auto">
                    <div className="w-6 h-6 rounded-full bg-[#DEE5ED] flex items-center justify-center">
                      <span className="text-[#595C5F] text-sm font-medium">
                        !
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#10284B] font-roboto text-lg font-medium mb-2">
                    No practice reports found
                  </h3>
                  <p className="text-[#595C5F] font-roboto text-sm">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex-shrink-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1268414b1e783b5ea54e5160a8c919f2e8533628?width=1122"
                    alt="No practice reports illustration"
                    className="w-[561px] h-[204px] object-contain"
                  />
                </div>
              </div>
            )}

            {activeTab === "exam" && (
              <div className="flex items-center gap-12">
                {/* Exam Content */}
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#DEE5ED] flex items-center justify-center mb-4 mx-auto">
                    <div className="w-6 h-6 rounded-full bg-[#DEE5ED] flex items-center justify-center">
                      <span className="text-[#595C5F] text-sm font-medium">
                        !
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#10284B] font-roboto text-lg font-medium mb-2">
                    No exam reports found
                  </h3>
                  <p className="text-[#595C5F] font-roboto text-sm">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex-shrink-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1268414b1e783b5ea54e5160a8c919f2e8533628?width=1122"
                    alt="No exam reports illustration"
                    className="w-[561px] h-[204px] object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
