import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface IResponseData {
  abilities: [];
}

interface IUserPostType {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: builder => ({
    getPokemonByName: builder.query<IResponseData, string>({
      query: name => `/pokemon/${name}`,
    }),
    signUp: builder.mutation<{}, IUserPostType>({
      query: body => ({
        url: 'user',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLazyGetPokemonByNameQuery, useSignUpMutation} = pokemonApi;
