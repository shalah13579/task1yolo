// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function AddEmployee2() {
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [success, setSuccess] = useState("");
//   const [employeeData, setEmployeeData] = useState([]);
  
//   const onSubmit = (data) => {
//     setEmployeeData([...employeeData, data]); // Add the employee data to the state
//     setSuccess("Employee added successfully");
//     reset();
//   };
    
//   return (
//     <>
//       <h1 className="text-4xl font-bold text-center my-5">JUNIORS ADD</h1>

//       {success}
//       <div className="leading-loose flex justify-center">
//         <form
//           className="max-w-xl my-1 m-4 p-10 bg-white rounded w-full shadow-xl"
//           onSubmit={handleSubmit(onSubmit)}
//           encType="multipart/form-data"
//         >
//           {/* Your form inputs go here (same as in your code) */}
//         </form>
//         <div className="mt-4">
//           <button
//             className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
//             type="button"
//             onClick={() => router.back()}
//           >
//             Click here to go back
//           </button>
//         </div>
//       </div>

//       {/* Display the table with employee data */}
//       <div>
//         <h2 className="text-2xl font-bold my-5">Employee Data</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Phone number</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employeeData.map((employee, index) => (
//               <tr key={index}>
//                 <td>{employee.name}</td>
//                 <td>{employee.email}</td>
//                 <td>{employee.age}</td>
//                 <td>{employee.phonenumber}</td>
//                 <td>{employee.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }