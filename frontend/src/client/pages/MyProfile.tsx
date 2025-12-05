import Sidebar from "@/components/Sidebar";

export default function MyProfile() {
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
          <h1 className="text-[#10284B] font-inter text-2xl font-bold mb-8">
            My Profile
          </h1>

          <div className="flex gap-8 mb-8">
            {/* Left Section - Profile Card */}
            <div className="w-[397px] h-[352px]">
              <div className="bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] p-8 h-full flex flex-col">
                {/* Profile Avatar and Info */}
                <div className="flex items-start mb-8">
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.9999 3.62582e-10C37.3335 -2.03135e-05 41.6247 0.853533 45.6285 2.51192C49.6322 4.17032 53.2701 6.60107 56.3345 9.6654C59.3988 12.7297 61.8296 16.3676 63.488 20.3714C65.1464 24.3751 66 28.6663 66 32.9999C66 51.2253 51.2253 66 32.9999 66C14.7747 66 0 51.2253 0 32.9999C0 14.7747 14.7747 3.62582e-10 32.9999 3.62582e-10ZM36.3 36.3H29.7C21.5302 36.3 14.5162 41.248 11.491 48.3112C16.2776 55.0232 24.1277 59.4 32.9999 59.4C41.8722 59.4 49.7222 55.0232 54.509 48.3107C51.4838 41.248 44.4698 36.3 36.3 36.3ZM32.9999 9.89999C27.5323 9.89999 23.0999 14.3324 23.0999 19.8C23.0999 25.2676 27.5323 29.7 32.9999 29.7C38.4675 29.7 42.8999 25.2676 42.8999 19.8C42.8999 14.3324 38.4677 9.89999 32.9999 9.89999Z"
                      fill="#10284B"
                    />
                  </svg>
                  <div className="flex-1">
                    <h2 className="text-[#10284B] font-roboto text-xl font-medium mb-4">
                      John Doe
                    </h2>
                    <div className="text-[#595C5F] font-roboto text-base leading-6">
                      <div>user@gmail.com</div>
                      <div>English Level</div>
                    </div>
                  </div>
                </div>

                {/* SAT Exam Info */}
                <div className="mt-auto">
                  <h3 className="text-[#10284B] font-roboto text-base font-medium mb-1">
                    SAT Exam
                  </h3>
                  <p className="text-[#595C5F] font-roboto text-base leading-6">
                    You are surrently enrolled in the SAT course
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - My Plan */}
            <div className="w-[569px] h-[352px]">
              <div className="bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] p-8 h-full">
                <h2 className="text-[#10284B] font-roboto text-xl font-medium mb-8">
                  My Plan
                </h2>

                <div className="mb-8">
                  <h3 className="text-[#381FD1] font-roboto text-5xl font-medium mb-6 leading-none">
                    SAT STARTER
                  </h3>

                  <div className="bg-[#F3F3F6] rounded-[7px] p-4 flex justify-between items-center w-[364px] h-[40px]">
                    <span className="text-[#595C5F] font-roboto text-base leading-6">
                      currently on{" "}
                      <span className="underline">Monthly Plan</span>
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V14M12 12L20 4M20 4V9M20 4H15"
                        stroke="#595C5F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Resolved Chart Section */}
          <div className="bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] p-8 w-[818px] h-[464px]">
            <h2 className="text-[#10284B] font-roboto text-xl font-medium mb-8">
              Daily resolved
            </h2>

            <div className="relative w-[751px] h-[356px]">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 w-[82px] h-[325px] flex flex-col justify-between">
                <span className="text-[#718EBF] font-inter text-sm text-right">
                  40
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-right">
                  30
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-right">
                  20
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-right">
                  10
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-right">
                  0
                </span>
              </div>

              {/* Chart area */}
              <div className="absolute left-[96px] top-[22px] w-[655px] h-[298px]">
                {/* Grid lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 w-full h-0.5 border-t border-dashed border-[#DFE5EE]"></div>
                  <div className="absolute top-[75px] w-full h-0.5 border-t border-dashed border-[#DFE5EE]"></div>
                  <div className="absolute top-[150px] w-full h-0.5 border-t border-dashed border-[#DFE5EE]"></div>
                  <div className="absolute top-[225px] w-full h-0.5 border-t border-dashed border-[#DFE5EE]"></div>
                  <div className="absolute bottom-0 w-full h-0.5 border-t border-dashed border-[#DFE5EE]"></div>
                </div>

                {/* Chart line and points */}
                <svg
                  width="604"
                  height="253"
                  viewBox="0 0 604 253"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[11px] left-[20px]"
                >
                  <path
                    d="M10.9614 241.245L128.407 108.526L241.217 167.859L357.89 10.1577L473.791 130.386L593.554 69.491"
                    stroke="#FCAA0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.189 234.938C14.4665 234.939 17.9603 238.447 17.9604 242.807C17.9604 247.167 14.4666 250.676 10.189 250.676C5.91117 250.676 2.4165 247.167 2.4165 242.807C2.41664 238.446 5.91126 234.938 10.189 234.938Z"
                    fill="white"
                    stroke="#EDA10D"
                    strokeWidth="3"
                  />
                  <path
                    d="M129.18 102.219C133.457 102.219 136.951 105.727 136.951 110.087C136.951 114.448 133.457 117.956 129.18 117.957C124.902 117.957 121.407 114.448 121.407 110.087C121.407 105.727 124.902 102.219 129.18 102.219Z"
                    fill="white"
                    stroke="#EDA10D"
                    strokeWidth="3"
                  />
                  <path
                    d="M240.444 158.43C244.722 158.43 248.216 161.938 248.216 166.298C248.216 170.658 244.722 174.167 240.444 174.167C236.167 174.167 232.672 170.658 232.672 166.298C232.672 161.938 236.167 158.43 240.444 158.43Z"
                    fill="white"
                    stroke="#EDA10D"
                    strokeWidth="3"
                  />
                  <path
                    d="M359.436 2.28955C363.713 2.28978 367.207 5.79771 367.207 10.1577C367.207 14.5178 363.713 18.0266 359.436 18.0269C355.158 18.0269 351.663 14.518 351.663 10.1577C351.663 5.79756 355.158 2.28955 359.436 2.28955Z"
                    fill="white"
                    stroke="#EDA10D"
                    strokeWidth="3"
                  />
                  <path
                    d="M475.336 120.956C479.614 120.956 483.108 124.464 483.108 128.824C483.108 133.184 479.614 136.693 475.336 136.693C471.059 136.693 467.564 133.184 467.564 128.824C467.564 124.464 471.059 120.956 475.336 120.956Z"
                    fill="white"
                    stroke="#EDA10D"
                    strokeWidth="3"
                  />
                  <path
                    d="M594.327 60.0615C598.605 60.0618 602.098 63.5697 602.099 67.9297C602.099 72.2898 598.605 75.7986 594.327 75.7988C590.049 75.7988 586.555 72.29 586.555 67.9297C586.555 63.5695 590.049 60.0615 594.327 60.0615Z"
                    fill="white"
                    stroke="#EDA10D"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-[102px] w-[635px] h-[25px] flex justify-between">
                <span className="text-[#718EBF] font-inter text-sm text-center w-[53px]">
                  monday
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-center w-[51px]">
                  tuesday
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-center w-[73px]">
                  wednesday
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-center w-[59px]">
                  thursday
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-center w-[50px]">
                  friday
                </span>
                <span className="text-[#718EBF] font-inter text-sm text-center w-[56px]">
                  saturday
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
