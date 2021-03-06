// @flow
import { graphql } from 'react-relay';
import type { Commit, Errors } from '../components/core/withMutation';
import * as generated from './__generated__/DeleteWebMutation.graphql';

export type DeleteWebCommit = Commit<
  generated.DeleteWebInput,
  generated.DeleteWebMutationResponse,
>;

export type DeleteWebErrors = Errors<
  generated.DeleteWebMutationResponse,
  'setWebName',
>;

const config = {
  mutation: graphql`
    mutation DeleteWebMutation($input: DeleteWebInput!) {
      deleteWeb(input: $input) {
        web {
          id
        }
      }
    }
  `,
};

export default config;
