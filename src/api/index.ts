import Knack from './Knack';

interface KnackCredentials {
  service: 'knack';
  headers: {
    'X-Knack-Application-Id': string;
    'X-Knack-REST-API-Key': string;
  };
}

interface ZohoCredentials {
  service: 'zoho';
  credentials: {};
}

export type ApiConfig = KnackCredentials | ZohoCredentials;

export default (options: ApiConfig) => {
  if (options.service === 'knack') {
    return Knack(options.headers);
  }
  return null;
};
