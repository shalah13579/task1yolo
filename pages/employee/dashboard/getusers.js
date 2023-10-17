import Link from "next/link";
import axios from "axios";

export default function GetUsers({ data }) {

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <div className="bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-4">E-GovT (BANGLADESH)</h1>
        <h1 className="text-2xl font-bold mb-4 text-blue-600 shadow-lg">User Info's</h1>

        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                  <th className="px-6 py-4 border">Name</th>
                  <th className="px-6 py-4 border">Email</th>
                  <th className="px-6 py-4 border">Password</th>
                  <th className="px-6 py-4 border">Address</th>
                  {/* <th className="px-6 py-4 border">Gender</th> */}
                  <th className="px-6 py-4 border">Age</th>
                  <th className="px-6 py-4 border">Phone Number</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {data.map((item) => (
                  <tr key={item.id} className="text-gray-700">
                    <td className="px-6 py-4 border whitespace-no-wrap">{item.name}</td>
                    <td className="px-6 py-4 border whitespace-no-wrap">{item.email}</td>
                    <td className="px-6 py-4 border whitespace-no-wrap">{item.password}</td>
                    <td className="px-6 py-4 border whitespace-no-wrap">{item.address}</td>
                    {/* <td className="px-6 py-4 border whitespace-no-wrap">{item.gender}</td> */}
                    <td className="px-6 py-4 border whitespace-no-wrap">{item.age}</td>
                    <td className="px-6 py-4 border whitespace-no-wrap">{item.phonenumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
    try {
      // Fetch data from your API route
      const response = await axios.get('http://localhost:3000/api/interns'); // Replace with your actual URL
      const data = await response.data;
  
      return { props: { data } };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { props: { data: [] } }; // Return an empty array or handle the error as needed
    }
  }
  