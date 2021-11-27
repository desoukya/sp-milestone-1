import apiService from "../services/apiService";
import { useQuery, useQueryClient, useMutation } from "react-query";

export  function useFetchUser(userId) {
  return useQuery(["userData", userId], () =>
    apiService.get(`user/${userId}`).then(({ data }) => data)
  );
}

  export function useMutateLoginUser() {
    const tmp= useMutation(user => {
        const data = new FormData();
        data.append("email", user.email);
        data.append("password", user.password);
        return apiService.post(`auth/login`, data);
      },
      {
        // When mutate is called:
        onSuccess: (responseData) => {
          // Store Token in local storage  
          const mytoken= window.localStorage.setItem("jwt", user);

        },
        onError: (e) => console.log(e.message),
      }
    );
    return tmp;
  }
  

export function useMutateRegisterUser() {
  const tmp=useMutation(user => {
      const data = new FormData();
      data.append("email", user.email);
      data.append("password", user.password);
      return apiService.post(`user/register`, data);
    },
    {
      // When mutate is called:
      onSuccess: (responseData) => {
        // Redirect to login page------------>
        

      },
      onError: (e) => console.log(e.message),
    });
  return tmp;
  
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
