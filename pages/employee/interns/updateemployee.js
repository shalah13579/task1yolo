import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function EmployeeForm({ employeeData }) {
  const [name, setName] = useState(employeeData ? employeeData.name : '');
  const [email, setEmail] = useState(employeeData ? employeeData.email : '');
  const [password, setPassword] = useState(employeeData ? employeeData.password : '');
  const [address, setAddress] = useState(employeeData ? employeeData.address : '');
  const [age, setAge] = useState(employeeData ? employeeData.age : '');
  const [phoneNumber, setPhoneNumber] = useState(employeeData ? employeeData.phoneNumber : '');
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('address', address);
    formData.append('age', age);
    formData.append('phonenumber', phoneNumber);

    try {
      const response = await axios.put(`http://localhost:3000/api/interns`, formData);
      console.log(response.data);
      // TODO: handle success case
    } catch (error) {
      console.error(error);
      // TODO: handle error case
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl mb-4">Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Update Employee
        </button>
      </form>
    </div>
  );
}
