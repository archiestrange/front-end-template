import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
      email
    }
  }
`;
