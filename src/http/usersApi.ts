import { useMutation, useQuery, UseQueryOptions } from "react-query"
import { backend, queryClient, PaginatedResponse } from "./core/backend"

const keys = {
  getAllUsers: "getAllUsers",
}

export const useCreateUser = () => {
  return useMutation(
    async (data: CreateUserRequest) =>
      backend.request({
        method: "post",
        url: "/users",
        data,
      }),
    {
      onSuccess() {
        queryClient.invalidateQueries([keys.getAllUsers])
      },
    }
  )
}

export const useGetAllUsers = (
  params: GetAllUsersParams,
  options: UseQueryOptions<GetAllUsersResponse> = {}
) => {
  return useQuery<GetAllUsersResponse>(
    [keys.getAllUsers, params],
    async () =>
      (
        await backend.request<GetAllUsersResponse>({
          method: "get",
          url: "/users",
          params,
        })
      ).data,
    options
  )
}

export type CreateUserRequest = {
  name: string;
  age: number;
};

export type GetAllUsersParams = {
  offset: number;
  limit: number;
  searchQuery?: string;
};

export type GetAllUsersResponse = PaginatedResponse<User>;

export type User = {
  id: string;
  name: string;
  age: number;
};
