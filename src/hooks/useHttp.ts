import { useCallback, useState } from 'react';
import { FireBaseDataType } from '../types/types';

type RequestOptionsType = {
  endpoint: string;
  method?: string | undefined;
  headers?: HeadersInit | undefined;
  body?: BodyInit | null | undefined;
};

type ManageDataType = (data: FireBaseDataType) => void;

type HttpResponseTYpe = {
  isLoading: boolean;
  error: string | null;
  sendHttpRequest: (
    requestOptions: RequestOptionsType,
    manageData: ManageDataType
  ) => Promise<void>;
};

const useHttp = (): HttpResponseTYpe => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendHttpRequest = useCallback(
    async (requestOptions: RequestOptionsType, manageData: ManageDataType) => {

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestOptions.endpoint, {
          method: requestOptions.method ? requestOptions.method : 'GET',
          headers: requestOptions.headers ? requestOptions.headers : {},
          body: requestOptions.body
            ? JSON.stringify(requestOptions.body)
            : null,
        });

        if (!response.ok) {
          throw new Error('We have some error in fetch data');
        }

        const data = await response.json();
        
        manageData(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendHttpRequest,
  };
};

export default useHttp;