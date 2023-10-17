export default (req, res) => {
    if (req.method === 'GET','POST','DELETE') {

      const interns = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          password: '********',
          address: '123 Main St, City',
          gender: 'Male',
          age: 25,
          phonenumber: '555-555-5555',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          password: '********',
          address: '456 Elm St, Town',
          gender: 'Female',
          age: 30,
          phonenumber: '555-123-4567',
        },
        {
          id: 3,
          name: 'Jane Smith3',
          email: 'jan151e@example.com',
          password: '********',
          address: '456 Elm St, Town',
          gender: 'Male',
          age: 18,
          phonenumber: '222-123-4567',
        },
        {
          id: 4,
          name: 'Jane Smith3',
          email: 'jan151e@example.com',
          password: '********',
          address: '456 Elm St, Town',
          gender: 'Male',
          age: 18,
          phonenumber: '222-123-4567',
        },
        {
          id: 5,
          name: 'Jane Smith3',
          email: 'jan151e@example.com',
          password: '********',
          address: '456 Elm St, Town',
          gender: 'Male',
          age: 18,
          phonenumber: '222-123-4567',
        },
        {
          id: 6,
          name: 'Jane Smith3',
          email: 'jan151e@example.com',
          password: '********',
          address: '456 Elm St, Town',
          gender: 'Male',
          age: 18,
          phonenumber: '222-123-4567',
        },
      ];
      
      // Function to get all interns
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
      };
    }}