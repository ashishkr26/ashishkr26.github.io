import React from 'react';
import { FaUsers, FaCalendarCheck, FaMoneyCheckAlt, FaUserShield, FaChartBar } from 'react-icons/fa';

const InstaEMS = () => {
  return (
    <section className="min-h-screen flex flex-col items-center  p-4">
      <h1 className="text-xl font-bold mb-2">InstaEMS</h1>
      <p className="text-sm  mb-8">Your Employment Management System</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Feature 1 */}
        <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg">
          <FaUsers className="text-blue-600 text-3xl" />
          <div>
            <h5 className="text-lg font-semibold">Employee Management</h5>
            <p className=" text-sm">Add, update, or remove employee records with ease.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg">
          <FaCalendarCheck className="text-green-600 text-3xl" />
          <div>
            <h5 className="text-lg font-semibold">Attendance Tracking</h5>
            <p className="text-sm">Track daily attendance and automate reports.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg">
          <FaMoneyCheckAlt className="text-yellow-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Payroll System</h3>
            <p className="text-sm">Automated salary calculations and payslip generation.</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg">
          <FaUserShield className="text-purple-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Admin Control</h3>
            <p className=" text-sm">Manage roles, permissions, and secure access to modules.</p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg md:col-span-2">
          <FaChartBar className="text-pink-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Analytics & Reports</h3>
            <p className="text-sm">View graphical reports for attendance, payroll, and performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaEMS;
