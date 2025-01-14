
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
      buttonText?: string;
    };
    footer?: {
      text: string;
      links?: Array<{
        text: string;
        url: string;
      }>;
    };
  };
  metadata?: {
    projectId?: string;
    templateId: string;
    version: string;
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
  attachments?: Array<{
    filename: string;
    path: string;
    contentType: string;
  }>;
}

export interface VerificationEmailData {
  code: string;
  expiresIn: number;
  recipientName: string;
  recipientEmail: string;
}
