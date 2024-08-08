import { atom } from 'nanostores';
import type { SectionName } from './lib/types';

export const activeSection = atom<SectionName>('Home');

export const timeOfLastClick = atom<number>(0);