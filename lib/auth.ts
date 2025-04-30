import { AES } from 'crypto-js';
import jwt from 'jsonwebtoken';

export const encryptData = (data: string) => 
  AES.encrypt(data, process.env.ENCRYPTION_KEY!).toString();

export const decryptData = (ciphertext: string) =>
  AES.decrypt(ciphertext, process.env.ENCRYPTION_KEY!).toString(CryptoJS.enc.Utf8);

export const createSession = (email: string) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  return encryptData(token);
};
