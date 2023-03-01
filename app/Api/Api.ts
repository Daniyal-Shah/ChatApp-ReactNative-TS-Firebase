class API {
  endpoint: string;

  constructor(url: string) {
    this.endpoint = url;
  }
}

// Using ip of local system because backend api are running on local system
export const api = new API('http://192.168.0.108:5000/api/user');
