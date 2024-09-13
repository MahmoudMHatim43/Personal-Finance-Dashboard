import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaUser, FaEdit } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const userImage =
  "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png";
const coverImage =
  "https://static.vecteezy.com/system/resources/previews/008/996/859/non_2x/abstract-minimal-earth-tone-long-banner-template-organic-shapes-floral-and-leaves-background-with-copy-space-for-text-facebook-cover-free-vector.jpg";

function Settings() {
  const [emailOnIncome, setEmailOnIncome] = useState(false);
  const [emailOnExpense, setEmailOnExpense] = useState(false);
  const [currency, setCurrency] = useState("USD");

  return (
    <section className="relative grid grid-cols-12 gap-4">
      <img
        className="col-span-12 h-[30svh] w-full object-cover aspect-video rounded-2xl"
        src={coverImage}
        alt="cover image"
      />
      <div className="absolute top-[25svh] inset-x-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white-b2 dark:bg-black-b2 rounded-2xl">
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex items-center gap-5">
            <img
              src={userImage}
              alt="profile image"
              className="w-20 h-20 rounded-full object-cover"
            />
            <span className="text-mid-header">Mahmoud M Hatim</span>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-mid-header font-bold">Personal Information</h2>
            <FaEdit size={20} className="cursor-pointer text-gray-500 hover:text-gray-700" />
          </div>

          <div className="text-body-text space-y-4">
            <h3 className="text-mid-header">Bio</h3>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod at soluta doloremque.
              Nihil cumque neque incidunt laudantium voluptas id accusamus sit, modi sed, dicta
              minima fugiat dolorum non harum magni!
            </span>

            <h3 className="text-mid-header">Full Name</h3>
            <div className="flex gap-2 items-center">
              <FaUser size={20} />
              <span>Mahmoud Mohamed Hatim Suliman</span>
            </div>

            <h3 className="text-mid-header">Email</h3>
            <div className="flex gap-2 items-center">
              <MdEmail size={20} />
              <span>mahmoudmhatim@gmail.com</span>
            </div>

            <h3 className="text-mid-header">Mobile</h3>
            <div className="flex gap-2 items-center">
              <MdCall size={20} />
              <span>+123456789</span>
            </div>

            <h3 className="text-mid-header">Location</h3>
            <div className="flex gap-2 items-center">
              <CiLocationOn size={20} />
              <span>Doha, Qatar</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl">
          <h2 className="w-full text-center text-mid-header font-bold">Settings</h2>

          <div className="flex items-center justify-between">
            <span>Email me on income update</span>
            <button
              className={`w-12 h-6 rounded-full ${emailOnIncome ? "bg-green-500" : "bg-gray-300"}`}
              onClick={() => setEmailOnIncome(!emailOnIncome)}>
              <span
                className={`block w-5 h-5 rounded-full bg-white transform transition-transform ${
                  emailOnIncome ? "translate-x-6" : "translate-x-1"
                }`}></span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span>Email me on expense update</span>
            <button
              className={`w-12 h-6 rounded-full ${emailOnExpense ? "bg-green-500" : "bg-gray-300"}`}
              onClick={() => setEmailOnExpense(!emailOnExpense)}>
              <span
                className={`block w-5 h-5 rounded-full bg-white transform transition-transform ${
                  emailOnExpense ? "translate-x-6" : "translate-x-1"
                }`}></span>
            </button>
          </div>

          <div className="flex flex-col">
            <label htmlFor="currency" className="font-medium">
              Currency
            </label>
            <div className="relative w-full">
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-md focus:border focus:border-blue-500 focus:outline-none">
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
