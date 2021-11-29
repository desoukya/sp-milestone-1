import apiService from "../services/apiService";
import { useQuery, useQueryClient, useMutation } from "react-query";

export  function useFetchUser(userId) {
  return useQuery(["userData", userId], () =>
  apiService.get(`user/${userId}`).then(({ data }) => data)
  );
}

  export function useMutateLoginUser() {
      return useMutation(user => {
        return apiService.post(`http://localhost:5000/auth/login`, user);
      },
      {
        // When mutate is called:
        onSuccess: (responseData) => {
          console.log(responseData.data.token)
          // Store Token in local storage  
          localStorage.setItem("jwt", responseData.data.token);
        },
        onError: (e) => console.log(e.message),
      }
    );
    
  }
  

export function useMutateRegisterUser() {
      return useMutation(user => {
      const data = new FormData();
      //data.set("email",user.email);
      //data.append("email", user.email);
      //data.set("password", user.password);
      console.log(user)
      return apiService.post(`http://localhost:5000/user/register`, user);
    },
    {
      // When mutate is called:
      onSuccess: (responseData) => {
        // Redirect to login page------------>
        window.location.replace("http://localhost:3000/login");




      },
      onError: (e) => console.log(e.message),
    });
  
}

export  function useMutateUpdateUser(userId) {
  const queryClint = useQueryClient();
  return useMutation(
    (user) => {
      const data = new FormData();
      data.append("email", user.email);
      data.append("password", user.password);
      return apiService.post(`user/${userId}`, data);
    },
    {
      // When mutate is called:
      onSuccess: (responseData) => {
        return queryClint.setQueryData(
          ["userData", userId],
          (data) => {
            return [
              {
                email: responseData.data.body.email,
                password: responseData.data.body.password,
              },
              ...data,
            ];
          }
        );
      },
      onError: (e) => console.log(e.message),
    }
  );
}
