import axios from "axios";

export default {
  user: {
    async getUsers() {
      const response = await axios.get("/users", {
        params: {
          limit: 25,
        },
      });
      return response;
    },

    async createUser({ firstName, lastName }) {
      return axios.post("/users", {
        firstName,
        lastName,
      });
    },

    async deleteUser(userId) {
      return axios.delete(`/users/${userId}`);
    },
  },
};

// export const getUsers = () => {
//     return axios.get('/users', {
//         params: {
//             limit: 1000
//         }
//     });
// };

// export const createUser = ({firstName, lastName}) => {
//     return axios.post('/users', {
//         firstName,
//         lastName
//     });
// };

// export const deleteUser = (userId) => {
//     return axios.delete(`/users/${userId}`);
// };
