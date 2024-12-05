// This file is auto-generated by @hey-api/openapi-ts

export type Pet = {
  id: number;
  name: string;
  tag?: string;
};

export type Pets = Array<Pet>;

export type Error = {
  code: number;
  message: string;
};

export type ListPetsData = {
  body?: never;
  path?: never;
  query?: {
    /**
     * How many items to return at one time (max 100)
     */
    limit?: number;
  };
  url: '/pets';
};

export type ListPetsErrors = {
  /**
   * unexpected error
   */
  default: Error;
};

export type ListPetsError = ListPetsErrors[keyof ListPetsErrors];

export type ListPetsResponses = {
  /**
   * A paged array of pets
   */
  200: Pets;
};

export type ListPetsResponse = ListPetsResponses[keyof ListPetsResponses];

export type CreatePetsData = {
  body?: never;
  path?: never;
  query?: never;
  url: '/pets';
};

export type CreatePetsErrors = {
  /**
   * unexpected error
   */
  default: Error;
};

export type CreatePetsError = CreatePetsErrors[keyof CreatePetsErrors];

export type CreatePetsResponses = {
  /**
   * Null response
   */
  201: unknown;
};

export type ShowPetByIdData = {
  body?: never;
  path: {
    /**
     * The id of the pet to retrieve
     */
    petId: string;
  };
  query?: never;
  url: '/pets/{petId}';
};

export type ShowPetByIdErrors = {
  /**
   * unexpected error
   */
  default: Error;
};

export type ShowPetByIdError = ShowPetByIdErrors[keyof ShowPetByIdErrors];

export type ShowPetByIdResponses = {
  /**
   * Expected response to a valid request
   */
  200: Pet;
};

export type ShowPetByIdResponse =
  ShowPetByIdResponses[keyof ShowPetByIdResponses];
