import apiService from "../services/apiService";
import { useQuery, useQueryClient, useMutation } from "react-query";

export function useFetchUser(userId) {
  return useQuery(["userData", userId], () =>
    apiService.get(`user/${userId}`).then(({ data }) => data)
  );
}

export function useMutateLoginUser() {
  return useMutation(
    (user) => {
      const data = new FormData();
      data.append("email", user.email);
      data.append("password", user.password);
      return apiService.post(`user/login`, data);
    },
    {
      // When mutate is called:
      onSuccess: (responseData) => {
        // Store Token in local storage
      },
      onError: (e) => console.log(e.message),
    }
  );
}
export function useMutateRegisterUser() {
  return useMutation(user => {
  const data = new FormData();
  console.log(user)
  return apiService.post(`user/register`, user);
},
{
  // When mutate is called:
  onSuccess: (responseData) => {
    window.location.replace("http://localhost:3000")
  },
  onError: (e) => console.log(e.message),
});

}

export function useMutateUpdateUser(userId) {
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
        return queryClint.setQueryData(["userData", userId], (data) => {
          return [
            {
              email: responseData.data.body.email,
              password: responseData.data.body.password,
            },
            ...data,
          ];
        });
      },
      onError: (e) => console.log(e.message),
    }
  );
}
