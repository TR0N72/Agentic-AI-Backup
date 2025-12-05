import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState<"account" | "orders">("account");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "John",
    phoneNumber: "0xxxxxxxxx",
    birthDate: "DD/MM/YY",
    parentEmail: "enter parent email",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Handle save functionality here
    console.log("Saving changes:", formData);
  };

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
            Account Settings
          </h1>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] inline-flex w-[253px] h-[42px] relative">
              {/* Account Tab */}
              <button
                onClick={() => setActiveTab("account")}
                className={`rounded-[10px] w-[132px] h-[42px] flex items-center justify-center transition-colors ${activeTab === "account" ? "bg-[#10284B]" : "bg-transparent"
                  }`}
              >
                <span
                  className={`font-roboto text-base font-medium ${activeTab === "account" ? "text-white" : "text-[#595C5F]"
                    }`}
                >
                  Account
                </span>
              </button>
              {/* Orders Tab */}
              <button
                onClick={() => setActiveTab("orders")}
                className={`rounded-[10px] w-[121px] h-[42px] flex items-center justify-center transition-colors ${activeTab === "orders" ? "bg-[#10284B]" : "bg-transparent"
                  }`}
              >
                <span
                  className={`font-roboto text-base font-medium text-center ${activeTab === "orders" ? "text-white" : "text-[#595C5F]"
                    }`}
                >
                  Orders
                </span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          {activeTab === "account" && (
            <div className="bg-white rounded-[17px] shadow-[0_0_6px_0_rgba(0,0,0,0.25)] p-8 w-[1205px] h-[522px]">
              <h2 className="text-[#10284B] font-roboto text-lg font-medium mb-8">
                Account Information
              </h2>

              <div className="grid grid-cols-2 gap-x-[50px] gap-y-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-[535px] h-[40px] border-2 border-[#C5C5CF] rounded-[7px] px-4 text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      className="w-[535px] h-[40px] border-2 border-[#C5C5CF] rounded-[7px] px-4 text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>

                  {/* Parent Email */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">
                      Parent Email
                    </label>
                    <input
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) =>
                        handleInputChange("parentEmail", e.target.value)
                      }
                      className="w-[535px] h-[40px] border-2 border-[#C5C5CF] rounded-[7px] px-4 text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Last Name */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-[535px] h-[40px] border-2 border-[#C5C5CF] rounded-[7px] px-4 text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label className="block text-[#595C5F] font-roboto text-base font-medium mb-3">
                      Birth Date
                    </label>
                    <input
                      type="text"
                      value={formData.birthDate}
                      onChange={(e) =>
                        handleInputChange("birthDate", e.target.value)
                      }
                      className="w-[535px] h-[40px] border-2 border-[#C5C5CF] rounded-[7px] px-4 text-[#7F8183] font-roboto text-base focus:outline-none focus:border-[#381FD1]"
                    />
                  </div>
                </div>
              </div>

              {/* Save Changes Button */}
              <button
                onClick={handleSaveChanges}
                className="mt-12 w-[170px] h-[41px] bg-[#381FD1] rounded-[6px] flex items-center justify-center gap-2 hover:bg-[#2d1aa6] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H16.175C16.4417 3 16.696 3.05 16.938 3.15C17.18 3.25 17.3923 3.39167 17.575 3.575L20.425 6.425C20.6083 6.60833 20.75 6.821 20.85 7.063C20.95 7.305 21 7.559 21 7.825V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5ZM12 18C12.8333 18 13.5417 17.7083 14.125 17.125C14.7083 16.5417 15 15.8333 15 15C15 14.1667 14.7083 13.4583 14.125 12.875C13.5417 12.2917 12.8333 12 12 12C11.1667 12 10.4583 12.2917 9.875 12.875C9.29167 13.4583 9 14.1667 9 15C9 15.8333 9.29167 16.5417 9.875 17.125C10.4583 17.7083 11.1667 18 12 18ZM7 10H14C14.2833 10 14.521 9.904 14.713 9.712C14.905 9.52 15.0007 9.28267 15 9V7C15 6.71667 14.904 6.47933 14.712 6.288C14.52 6.09667 14.2827 6.00067 14 6H7C6.71667 6 6.47933 6.096 6.288 6.288C6.09667 6.48 6.00067 6.71733 6 7V9C6 9.28333 6.096 9.521 6.288 9.713C6.48 9.905 6.71733 10.0007 7 10Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white font-roboto text-base font-medium">
                  Save Changes
                </span>
              </button>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="bg-white rounded-[17px] shadow-[0_0_6px_0_rgba(0,0,0,0.25)] p-8 w-[1205px] h-[522px] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-[#10284B] font-roboto text-lg font-medium mb-2">
                  No orders found
                </h3>
                <p className="text-[#595C5F] font-roboto text-sm">
                  You haven't placed any orders yet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
