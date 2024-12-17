export interface SignatureBlock {
  name: string;
  title: string;
  credentials: string[];
}

export const defaultSignature: SignatureBlock = {
  name: 'Wesley Louis López Rivera',
  title: 'President / Principal',
  credentials: ['PE', 'M.Arch', 'BSCE']
} as const;