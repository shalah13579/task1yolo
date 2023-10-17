export default (req, res) => {
    if (req.method === 'GET','POST','DELETE','PUT') {
     
      const dummyData = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          password: "********",
          address: "123 Main St, City",
          gender: "Male",
          age: 25,
          phonenumber: "555-555-5555",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          password: "********",
          address: "456 Elm St, Town",
          gender: "Female",
          age: 30,
          phonenumber: "555-123-4567",
        },
        {
          id: 3,
          name: "Jane Smith3",
          email: "jan151e@example.com",
          password: "********",
          address: "456 Elm St, Town",
          gender: "Male",
          age: 18,
          phonenumber: "222-123-4567",
        },
        {
            id: 4,
            name: "Jane Smith3",
            email: "jan151e@example.com",
            password: "********",
            address: "456 Elm St, Town",
            gender: "Male",
            age: 18,
            phonenumber: "222-123-4567",
          },  {
            id: 5,
            name: "Jane Smith3",
            email: "jan151e@example.com",
            password: "********",
            address: "456 Elm St, Town",
            gender: "Male",
            age: 18,
            phonenumber: "222-123-4567",
          },  {
            id: 6,
            name: "Jane Smith3",
            email: "jan151e@example.com",
            password: "********",
            address: "456 Elm St, Town",
            gender: "Male",
            age: 18,
            phonenumber: "222-123-4567",
          },
      ];
  
    
      return res.status(200).json(dummyData);
    } else if (req.method === 'POST') {
      const newIntern = JSON.parse(req.body);
      const newInternId = dummyData.length + 1;
      dummyData.push({ id: newInternId, ...newIntern });
      return res.status(201).json({ message: 'Intern created successfully' });



    } else if (req.method === 'PUT') {
 
      const updatedIntern = JSON.parse(req.body);
      const internIndex = dummyData.findIndex((intern) => intern.id === updatedIntern.id);
      if (internIndex !== -1) {
        dummyData[internIndex] = updatedIntern;
        return res.status(200).json({ message: 'Intern updated successfully' });
      } else {
        return res.status(404).json({ error: 'Intern not found' });
      }




      function getAllInterns() {
        return interns;
      }
      
      // Function to delete an intern by ID
      function deleteInternById(id) {
        const index = interns.findIndex((intern) => intern.id === id);
        if (index !== -1) {
          interns.splice(index, 1);
          return true; // Intern deleted successfully
        }
        return false; // Intern not found
      }
      
      module.exports = {
        getAllInterns,
        deleteInternById,
      };}
  };
  