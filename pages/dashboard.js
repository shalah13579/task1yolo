import React from "react";
import { useRouter } from "next/router";
import Link from "next/link"

function Dashboard() {
  const router = useRouter();
  const logoutroute = () => {
    router.push("/employee/login/signout");
  };
  return (
//     
<div>
<nav className="bg-gray-800 py-10">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      <button className="text-white font-bold  bg-transparent border-none cursor-pointer focus:outline-none">
        Employee Dashboard
      </button>
      <div className="flex">
        <button
          onClick={logoutroute}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</nav>

<div className="container mx-auto mt-8 mr-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    
    <Panel
      title="Junior Employee"
      onViewAll={() => window.location.href = '/employee/dashboard/index2'}
      onAddNew={() => window.location.href = '/employee/interns/addemployee2'}
      onDelete={() => window.location.href = '/employee/interns/deleteemployee2'}
   

    />
    
  </div>
</div>
</div>
);
}


function Panel({ title, onViewAll, onAddNew, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="flex justify-between">
        <button
          onClick={onViewAll}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          View All
        </button>
        <button
          onClick={onAddNew}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default Dashboard;
