// payload/types.ts
export interface Profile {
  name: string;
  nickname: string;
  job: string;
  contact: {
    phone: string,
    email: string;
    github: string;
    blog: string;
  };
  introduce: string[];
}

export interface Skills {
  production: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    infrastructure: string[];
  };
  hobby: {
    languages: string[];
    frameworks: string[];
    infrastructure: string[];
  };
  summary: string[];
}

export interface Introduction {
  summary: string;
  description: {
    text: string;
    highlight?: string;
    after?: string;
    highlight2?: string;
    after2?: string;
  }[];
}

export interface Experience {
  company: string;
  companySummary: string;
  position: string;
  description: string[];
  duration: string;
  location?: string;
  projects: {
    title: string;
    startDate: string;
    endDate?: string;
    summary?: string;
    description: string[];
    techStack?: string[];
  }[];
}
