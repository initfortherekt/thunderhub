/* eslint-disable */
import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetResumeQueryVariables = Types.Exact<{
  offset?: Types.Maybe<Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type GetResumeQuery = (
  { __typename?: 'Query' }
  & { getResume: (
    { __typename?: 'getResumeType' }
    & Pick<Types.GetResumeType, 'offset'>
    & { resume: Array<Types.Maybe<(
      { __typename?: 'InvoiceType' }
      & Pick<Types.InvoiceType, 'chain_address' | 'confirmed_at' | 'created_at' | 'description' | 'description_hash' | 'expires_at' | 'id' | 'is_canceled' | 'is_confirmed' | 'is_held' | 'is_private' | 'is_push' | 'received' | 'received_mtokens' | 'request' | 'secret' | 'tokens' | 'type' | 'date'>
      & { payments: Array<Types.Maybe<(
        { __typename?: 'InvoicePayment' }
        & Pick<Types.InvoicePayment, 'in_channel'>
        & { messages?: Types.Maybe<(
          { __typename?: 'MessageType' }
          & Pick<Types.MessageType, 'message'>
        )> }
      )>> }
    ) | (
      { __typename?: 'PaymentType' }
      & Pick<Types.PaymentType, 'created_at' | 'destination' | 'fee' | 'fee_mtokens' | 'id' | 'index' | 'is_confirmed' | 'is_outgoing' | 'mtokens' | 'request' | 'safe_fee' | 'safe_tokens' | 'secret' | 'tokens' | 'type' | 'date'>
      & { destination_node?: Types.Maybe<(
        { __typename?: 'Node' }
        & { node: (
          { __typename?: 'nodeType' }
          & Pick<Types.NodeType, 'alias'>
        ) }
      )>, hops: Array<(
        { __typename?: 'Node' }
        & { node: (
          { __typename?: 'nodeType' }
          & Pick<Types.NodeType, 'alias' | 'public_key'>
        ) }
      )> }
    )>> }
  ) }
);


export const GetResumeDocument = gql`
    query GetResume($offset: Int, $limit: Int) {
  getResume(offset: $offset, limit: $limit) {
    offset
    resume {
      ... on InvoiceType {
        chain_address
        confirmed_at
        created_at
        description
        description_hash
        expires_at
        id
        is_canceled
        is_confirmed
        is_held
        is_private
        is_push
        received
        received_mtokens
        request
        secret
        tokens
        type
        date
        payments {
          in_channel
          messages {
            message
          }
        }
      }
      ... on PaymentType {
        created_at
        destination
        destination_node {
          node {
            alias
          }
        }
        fee
        fee_mtokens
        hops {
          node {
            alias
            public_key
          }
        }
        id
        index
        is_confirmed
        is_outgoing
        mtokens
        request
        safe_fee
        safe_tokens
        secret
        tokens
        type
        date
      }
    }
  }
}
    `;

/**
 * __useGetResumeQuery__
 *
 * To run a query within a React component, call `useGetResumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResumeQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetResumeQuery(baseOptions?: Apollo.QueryHookOptions<GetResumeQuery, GetResumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResumeQuery, GetResumeQueryVariables>(GetResumeDocument, options);
      }
export function useGetResumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResumeQuery, GetResumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResumeQuery, GetResumeQueryVariables>(GetResumeDocument, options);
        }
export type GetResumeQueryHookResult = ReturnType<typeof useGetResumeQuery>;
export type GetResumeLazyQueryHookResult = ReturnType<typeof useGetResumeLazyQuery>;
export type GetResumeQueryResult = Apollo.QueryResult<GetResumeQuery, GetResumeQueryVariables>;