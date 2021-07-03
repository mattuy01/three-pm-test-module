import React from 'react';
import Api, { ApiConfig } from './api';

const Scheduler = (props: any) => {
  const apiConfig: ApiConfig = {
    service: 'knack',
    headers: {
      'X-Knack-Application-Id': 'id',
      'X-Knack-REST-API-Key': 'key',
    },
  };

  const api = Api(apiConfig);
  api?._GET('test');

  return <div></div>;
};

export default Scheduler;
