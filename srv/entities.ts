interface ApiEvent {
  specversion: string;
  source: string;
  type: string;
  id: string;
  datacontenttype: string;
  subject: string;
  time: string;
  data: {
    resourceUri: string;
  }
}

interface NewApiYaml {
  openapi: string;
  info: {
    title: string;
    description: string;
    version: string;
  }
  servers: [
    {
      url: string;
    }
  ]
}

interface NewApiData {
  name: string;
  content: string;
  version?: string;
  description?: string;
  publishUrl?: string;
  id?: string;
}

export { ApiEvent, NewApiData, NewApiYaml };
