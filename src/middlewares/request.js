import client from './client';
// import ReqeustStatus from '../constants/RequestStatus';

function request(params) {
  const { type = 'query', graphql, variables, ...restOptions } = params.options;
  if (type === 'query') {
    return client.query({
      query: graphql,
      variables,
      ...restOptions
    });
  }
  return client.mutate({
    mutation: graphql,
    variables,
    ...restOptions
  });
}

function sendRequest(options) {
  return request(options);
}


export default sendRequest;
