import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface ChallengeResponse { follow?: string, message: string }

const main = async () => {

  let config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://www.letsrevolutionizetesting.com/challenge',
    headers: {
      'Accept': 'application/json'
    }
  };

  let response: AxiosResponse<ChallengeResponse, any>;

  do {
    response = await axios.request<ChallengeResponse>(config);
    config.url = response.data.follow;
    console.info(JSON.stringify(response.data));
  } while (response.data.follow);
}

main();
