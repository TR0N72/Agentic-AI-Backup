import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

export default function PracticeWithAI() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white border-b border-pinterin-border px-8 py-6 -m-8 mb-8">
          <div className="h-11 w-11 rounded-full bg-pinterin-purple flex items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </div>
          <span className="ml-3 text-xl font-bold text-pinterin-dark-blue font-dm-sans absolute left-24">
            Pinterin
          </span>

          <div className="flex items-center gap-12">
            <div className="flex items-center">
              <svg
                width="29"
                height="41"
                viewBox="0 0 29 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <path
                  d="M9.63292 0.375711C7.0789 -0.994817 2.04531 1.65337 0.599314 3.98474C-0.0448777 5.02798 0.000700393 5.77979 0.000700393 6.20632V29.0254L18.8769 41L22.4265 39.024V16.8011L3.04568 5.4566C4.0857 4.12216 6.42473 2.49493 8.17858 3.14847L25.4414 12.5613L25.4414 37.3178L29 35.3383V10.5824L9.63292 0.375711Z"
                  fill="black"
                />
              </svg>
              <span className="text-black font-poppins text-2xl font-semibold mr-4">
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

        {/* Practice Session Content */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-pinterin-dark-blue font-inter text-2xl font-bold mb-4">
            Practice Session
          </h1>
          <p className="text-pinterin-dark-blue font-roboto text-base font-medium mb-12">
            Choose your Difficulty Level
          </p>

          {/* Difficulty Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Easy Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-pinterin-dark-blue font-roboto text-xl font-medium mb-8">
                Easy
              </h3>
              <div className="flex justify-center mb-12">
                <svg
                  width="86"
                  height="86"
                  viewBox="0 0 87 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  <g clipPath="url(#clip0_8456_79)">
                    <g filter="url(#filter0_d_8456_79)">
                      <path
                        d="M16.2017 0C11.925 0 7.82359 1.69888 4.79956 4.7229C1.77554 7.74693 0.0766602 11.8484 0.0766602 16.125L0.0766602 69.875C0.0766602 74.1516 1.77554 78.2531 4.79956 81.2771C7.82359 84.3011 11.925 86 16.2017 86H69.9517C74.2283 86 78.3297 84.3011 81.3538 81.2771C84.3778 78.2531 86.0767 74.1516 86.0767 69.875V16.125C86.0767 11.8484 84.3778 7.74693 81.3538 4.7229C78.3297 1.69888 74.2283 0 69.9517 0L16.2017 0ZM43.0767 51.0625C40.9384 51.0625 38.8876 50.2131 37.3756 48.701C35.8636 47.189 35.0142 45.1383 35.0142 43C35.0142 40.8617 35.8636 38.811 37.3756 37.299C38.8876 35.7869 40.9384 34.9375 43.0767 34.9375C45.215 34.9375 47.2657 35.7869 48.7777 37.299C50.2897 38.811 51.1392 40.8617 51.1392 43C51.1392 45.1383 50.2897 47.189 48.7777 48.701C47.2657 50.2131 45.215 51.0625 43.0767 51.0625Z"
                        fill="#1814F3"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_8456_79"
                      x="-7.92334"
                      y="-8"
                      width="102"
                      height="102"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_8456_79"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_8456_79"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_8456_79">
                      <rect
                        width="86"
                        height="86"
                        fill="white"
                        transform="translate(0.0766602)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <button className="bg-pinterin-dark-blue text-white px-8 py-4 rounded-full font-roboto text-2xl">
                Begin
              </button>
            </div>

            {/* Intermediate Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-pinterin-dark-blue font-roboto text-xl font-medium mb-8">
                Intermediate
              </h3>
              <div className="flex justify-center mb-12">
                <svg
                  width="89"
                  height="89"
                  viewBox="0 0 89 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  <g clipPath="url(#clip0_8415_2780)">
                    <rect width="89" height="89" fill="white" />
                    <g filter="url(#filter0_d_8415_2780)">
                      <path
                        d="M16.6875 0C12.2617 0 8.01717 1.75814 4.88766 4.88766C1.75814 8.01717 0 12.2617 0 16.6875L0 72.3125C0 76.7383 1.75814 80.9828 4.88766 84.1123C8.01717 87.2419 12.2617 89 16.6875 89H72.3125C76.7383 89 80.9828 87.2419 84.1123 84.1123C87.2419 80.9828 89 76.7383 89 72.3125V16.6875C89 12.2617 87.2419 8.01717 84.1123 4.88766C80.9828 1.75814 76.7383 0 72.3125 0L16.6875 0ZM30.5938 22.25C30.5938 24.4629 29.7147 26.5852 28.1499 28.1499C26.5852 29.7147 24.4629 30.5938 22.25 30.5938C20.0371 30.5938 17.9148 29.7147 16.3501 28.1499C14.7853 26.5852 13.9062 24.4629 13.9062 22.25C13.9062 20.0371 14.7853 17.9148 16.3501 16.3501C17.9148 14.7853 20.0371 13.9062 22.25 13.9062C24.4629 13.9062 26.5852 14.7853 28.1499 16.3501C29.7147 17.9148 30.5938 20.0371 30.5938 22.25ZM75.0938 66.75C75.0938 68.9629 74.2147 71.0852 72.6499 72.6499C71.0852 74.2147 68.9629 75.0938 66.75 75.0938C64.5371 75.0938 62.4148 74.2147 60.8501 72.6499C59.2853 71.0852 58.4062 68.9629 58.4062 66.75C58.4062 64.5371 59.2853 62.4148 60.8501 60.8501C62.4148 59.2853 64.5371 58.4062 66.75 58.4062C68.9629 58.4062 71.0852 59.2853 72.6499 60.8501C74.2147 62.4148 75.0938 64.5371 75.0938 66.75ZM44.5 52.8438C42.2871 52.8438 40.1648 51.9647 38.6001 50.3999C37.0353 48.8352 36.1562 46.7129 36.1562 44.5C36.1562 42.2871 37.0353 40.1648 38.6001 38.6001C40.1648 37.0353 42.2871 36.1562 44.5 36.1562C46.7129 36.1562 48.8352 37.0353 50.3999 38.6001C51.9647 40.1648 52.8438 42.2871 52.8438 44.5C52.8438 46.7129 51.9647 48.8352 50.3999 50.3999C48.8352 51.9647 46.7129 52.8438 44.5 52.8438Z"
                        fill="#FC7900"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_8415_2780"
                      x="-8"
                      y="-8"
                      width="105"
                      height="105"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_8415_2780"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_8415_2780"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_8415_2780">
                      <rect width="89" height="89" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <button className="bg-pinterin-dark-blue text-white px-8 py-4 rounded-full font-roboto text-2xl">
                Begin
              </button>
            </div>

            {/* Difficult Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-pinterin-dark-blue font-roboto text-xl font-medium mb-8">
                Difficult
              </h3>
              <div className="flex justify-center mb-12">
                <div className="w-24 h-24 bg-pinterin-purple rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  {/* Placeholder for the SVG */}
                </div>
              </div>
              <button className="bg-pinterin-dark-blue text-white px-8 py-4 rounded-full font-roboto text-2xl">
                Begin
              </button>
            </div>
          </div>

          {/* Personalized Study Roadmap Section */}
          <div className="bg-pinterin-dark-blue rounded-xl shadow-lg p-8 relative overflow-hidden mb-[200px]">
            {/* Robot Character */}
            <div className="absolute right-8 top-0 bottom-0 flex items-center">
              <svg
                width="782"
                height="214"
                viewBox="0 0 782 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-80 h-auto"
              >
                <mask
                  id="mask0_8467_882"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="9"
                  width="782"
                  height="214"
                >
                  <rect y="9" width="782" height="214" rx="12" fill="#10284B" />
                </mask>
                <g mask="url(#mask0_8467_882)">
                  <circle cx="589" cy="109" r="109" fill="#EDA10D" />
                  <g filter="url(#filter0_d_8467_882)">
                    <circle cx="590" cy="105" r="86" fill="#FFBB38" />
                  </g>
                  <circle cx="658" cy="52" r="6" fill="#10284B" />
                  <path
                    d="M658 54V67L636 78V100"
                    stroke="#10284B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    transform="matrix(-1 0 0 1 525 49)"
                    fill="#10284B"
                  />
                  <path
                    d="M519 57V70L541 81V103"
                    stroke="#10284B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M625.437 164.897C641.451 164.897 654.628 177.041 656.264 192.623C656.372 192.783 656.437 192.976 656.437 193.184V227.879C656.436 228.432 655.989 228.879 655.437 228.879H526C525.448 228.879 525 228.432 525 227.879V193.184C525 192.976 525.063 192.783 525.172 192.623C526.808 177.041 539.985 164.897 556 164.897H625.437Z"
                    fill="white"
                  />
                  <rect
                    x="570.759"
                    y="138.551"
                    width="36.0233"
                    height="47.8121"
                    rx="14"
                    fill="#D6E5FF"
                  />
                  <rect
                    x="570.759"
                    y="137.576"
                    width="36.0233"
                    height="42.9333"
                    rx="14"
                    fill="#10284B"
                  />
                  <path
                    d="M588.284 40C623.235 40 651.568 63.5903 651.568 92.6904C651.568 94.3417 651.475 95.9754 651.297 97.5879C651.474 99.2303 651.568 100.898 651.568 102.588V110.115C651.568 135.52 630.973 156.115 605.568 156.115H571C545.595 156.115 525 135.52 525 110.115V102.588C525 100.898 525.093 99.2302 525.271 97.5879C525.092 95.9755 525 94.3416 525 92.6904C525 63.5903 553.333 40 588.284 40Z"
                    fill="white"
                  />
                  <rect
                    x="549.34"
                    y="80.0063"
                    width="79.8354"
                    height="35.1272"
                    rx="8"
                    fill="#D6E5FF"
                  />
                  <path
                    d="M571.733 129.77C571.733 129.77 578.122 138.551 588.771 138.551C599.42 138.551 605.809 129.77 605.809 129.77"
                    stroke="#10284B"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse
                    cx="566.378"
                    cy="100.985"
                    rx="7.30202"
                    ry="10.2454"
                    fill="#10284B"
                  />
                  <ellipse
                    cx="611.164"
                    cy="100.985"
                    rx="7.30202"
                    ry="10.2454"
                    fill="#10284B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_8467_882"
                    x="500"
                    y="19"
                    width="180"
                    height="180"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.884615 0 0 0 0 0.643245 0 0 0 0 0.175222 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_8467_882"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_8467_882"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-md">
              <h2 className="text-white font-roboto text-2xl font-normal leading-10 mb-8">
                Let's make your{" "}
                <span className="font-bold">Personalized</span> Study Roadmap!
              </h2>
              <Link to="/chat" className="bg-white text-pinterin-dark-blue px-6 py-2 rounded-full font-roboto text-base">
                Let's Start
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-8 right-8">
          <div className="w-24 h-24 bg-pinterin-purple rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <svg
              width="50"
              height="45"
              viewBox="0 0 50 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.35316e-06 14.985C-0.00131458 13.0155 0.385882 11.0651 1.13942 9.24548C1.89296 7.42584 2.99804 5.77272 4.39137 4.38078C5.78471 2.98883 7.43894 1.88541 9.25933 1.13369C11.0797 0.381977 13.0305 -0.00326753 15 2.08756e-05H35C43.2825 2.08756e-05 50 6.73752 50 14.985V45H15C6.7175 45 3.35316e-06 38.2625 3.35316e-06 30.015V14.985ZM30 20V25H35V20H30ZM15 20V25H20V20H15Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
