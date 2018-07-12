import gql from 'graphql-tag';
import * as APIs from '../constants/APIs';

export function fetchDataTreeOption(params) {
  return {
    options: {
      type: 'query',
      graphql: gql`${APIs.DataTreeQuery}`,
      ...params
    }
  }
}

export function fetchLineAgeOption(params) {
  return {
    options: {
      type: 'query',
      graphql: gql`${APIs.LineAgeQuery}`,
      ...params
    }
  }
}
