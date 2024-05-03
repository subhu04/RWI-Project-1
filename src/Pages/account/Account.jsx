import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Account = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Print form data to console
    console.log({
      firstName,
      lastName,
      email,
      address,
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
  };

  return (
    <Layout>
      <section className="flex justify-center min-h-screen bg-white p-20">
        {/* Left Sidebar */}
        <div className="max-w-md hidden md:block ml-8">
          <h5 className="text-black font-semibold mb-4">Manage My Account Option</h5>
          {/* Account Options */}
          <ul className="pl-4">
            <li>
              <Link to="/profile" className="text-gray-500 font-semibold mb-2 block">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/address" className="text-gray-500 font-semibold mb-2 block">
                Address Book
              </Link>
            </li>
            <li>
              <Link to="/payment" className="text-gray-500 font-semibold mb-2 block">
                My Payment Options
              </Link>
            </li>
            <li className="ml-4">
              <span className="text-black font-semibold mb-2 block">My orders</span>
            </li>
            <li>
              <Link to="/returns" className="text-gray-500 font-semibold mb-2 block">
                My Returns
              </Link>
            </li>
            <li>
              <Link to="/cancellations" className="text-gray-500 font-semibold mb-2 block">
                My Cancellations
              </Link>
            </li>
            <li>
              <span className="text-black font-semibold mb-2 block">My Wishlist</span>
            </li>
          </ul>
        </div>

        {/* Registration Form */}
        <div className="container mx-auto   max-w-3xl">
          <div className="rounded-lg shadow-lg p-8 bg-white">
            <h4 className="mb-4 mt-2 text-xl font-semibold text-red-500 text-left">
              Edit Your Profile
            </h4>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex flex-col w-full">
                  <h5 className="text-black font-semibold mb-2">First Name</h5>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h5 className="text-black font-semibold mb-2">Last Name</h5>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Email and Address */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex flex-col w-full">
                  <h5 className="text-black font-semibold mb-2">Email</h5>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h5 className="text-black font-semibold mb-2">Address</h5>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Current Password */}
              <div className="flex flex-col w-full">
                <h5 className="text-black font-semibold mb-2">Current Password</h5>
                <input
                  type="password"
                  placeholder="Enter your current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>

              {/* New Password */}
              <div className="flex flex-col w-full">
                <h5 className="text-black font-semibold mb-2">New Password</h5>
                <input
                  type="password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>

              {/* Confirm New Password */}
              <div className="flex flex-col w-full">
                <h5 className="text-black font-semibold mb-2">Confirm New Password</h5>
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end">
                <button
                  className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-400 mr-4"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-400 focus:outline-none focus:ring focus:border-blue-400"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Account;
