// @flow
import { graphql } from 'react-relay';
import type { Commit } from '../components/core/withMutation';
import * as generated from './__generated__/SetPageContentMutation.graphql';

export type SetPageContentCommit = Commit<
  generated.SetPageContentInput,
  generated.SetPageContentMutationResponse,
>;

const config = {
  mutation: graphql`
    mutation SetPageContentMutation($input: SetPageContentInput!) {
      setPageContent(input: $input) {
        # By GraphQL design, every mutation has to return something.
        page {
          id
          # Returing text will update Relay store on save automatically.
          # But we don't need it. This is just an example.
          # text
        }
      }
    }
  `,
};

export default config;
