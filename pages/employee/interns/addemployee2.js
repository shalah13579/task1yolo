import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddEmployee2() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [success, setSuccess] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onSubmit = (data) => {
    if (editIndex !== null) {

      const updatedEmployeeData = [...employeeData];
      updatedEmployeeData[editIndex] = data;
      setEmployeeData(updatedEmployeeData);
      setSuccess("Employee updated successfully");
      setEditIndex(null);
    } else {
      
      setEmployeeData([...employeeData, data]);
      setSuccess("Employee added successfully");
    }
    reset();
  };

  const deleteEmployee = (index) => {
    const updatedEmployeeData = [...employeeData];
    updatedEmployeeData.splice(index, 1);
    setEmployeeData(updatedEmployeeData);
    setEditIndex(null);
  };

  const editEmployee = (index) => {
    setEditIndex(index);
    const employeeToEdit = employeeData[index];
    reset(employeeToEdit);
  };

    return (
        <>
  
            <h1 class="text-4xl font-bold text-center my-5">JUNIORS ADD</h1>

            {success}
            <div className="leading-loose flex justify-center">
                <form className="max-w-xl my-1 m-4 p-10 bg-white rounded w-full shadow-xl " onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-sm text-gray-00" htmlFor="name">Name</label>
<input
    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
    id="name"
    type="text" placeholder="@URname" aria-label="name"
    {...register("name", { required: true })}
/>
{errors.name && <p className="text-red-500">Name is required</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                        <label className="block text-sm text-gray-600" htmlFor="email">Email</label>
<input
    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
    type="email"
    id="email"
    placeholder="abc@gmail.com" aria-label="Email"
    {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
/>
{errors.email && (
    <p>
        {errors.email.type === 'required'
            ? <p className="text-red-500">Email is required</p>
            : <p className="text-red-500">Invalid email address</p>
        }
    </p>
)}

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-4">
    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <label className="block text-sm text-gray-600" htmlFor="age">Age</label>
        <input
            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
            id="age"
            type="age" required="" placeholder="age" aria-label="Age"
            {...register("age", { required: true })}
        />
        {errors.age && <p className="text-red-500">Age is required</p>}
    </div>

    <div className="w-full md:w-1/2 px-2">
        <label className="block text-sm text-gray-00" htmlFor="phonenumber">Phone number</label>
        <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="phonenumber"
            type="tel" placeholder="num" aria-label="name"
            {...register("phonenumber", { required: true })}
        />
        {errors.phonenumber && <p className="text-red-500">Phone number is required</p>}
    </div>
</div>

<div className="flex flex-wrap -mx-2 mb-4">
    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <label className="block text-sm text-gray-00" htmlFor="address">Address</label>
        <textarea
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="address"
            type="text" placeholder="address" aria-label="name"
            {...register("address", { required: true })}
        />
        {errors.address && <p className="text-red-500">Address is required</p>}
    </div>
</div>

<div className="w-full md:w-1/2 px-2">
    <label className="block text-sm text-gray-600" htmlFor="password">Password</label>
    <input
        className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
        type="password"
        id="password"
        placeholder="*********" aria-label="Password"
        {...register("password", {
            required: true,
            minLength: 2,
        })}
    />
    {errors.password && (
        <p className="text-red-500">
            {errors.password.type === "required"
                ? "Password is required"
                : "Invalid password pattern"}
        </p>
    )}
</div>


{/* ********** */}



<div class="flex items-center justify-center mt-5">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                        </button>
                    </div>

                </form>
                <div className="mt-4">
                    <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="button"
                        onClick={() => router.back()}>Click here to go back
                        </button>
                </div>
            </div>

            <div className="leading-loose flex justify-center">
        <form
        //   className="max-w-xl my-1 m-4 p-10 bg-white rounded w-full shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          {/* Your form inputs go here (same as in your code) */}
        </form>
        {/* <div className="mt-4">
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="button"
            onClick={() => router.back()}
          >
            Click here to go back
          </button>
        </div> */}
      </div>

      {/* Display the table with employee data */}
      <div>
        <h2 className="text-2xl font-bold my-1">Employee Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
          {employeeData.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.age}</td>
                <td>{employee.phonenumber}</td>
                <td>{employee.address}</td>
                <td>
                <button onClick={() => editEmployee(index)}>Edit</button>
                  <button onClick={() => deleteEmployee(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>





        </>
    );
}
