export interface EmailTemplate {
  subject: string;
  preheader?: string;
  recipientName: string;
  content: {
    greeting?: string;
    body: string;
    callToAction?: {
      text: string;
      url: string;
    };
  };
}

export interface EmailConfig {
  from: {
    name: string;
    email: string;
  };
  replyTo?: {
    name: string;
    email: string;
  };
  template: EmailTemplate;
}