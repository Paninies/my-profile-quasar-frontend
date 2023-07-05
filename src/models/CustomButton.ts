export interface CustomButton {
  id: number;
  name: string;
  route: string;
  label: string;
  color?: string;
  class?: string;
  backgroundColor?: string;
}

export const defaultCustomArticleButton: CustomButton = {
  id: 0,
  name: 'Read More',
  route: '/article',
  label: 'Read More',
  color: 'primary'
}

export function getRandomId(): number {
  return Math.floor(Math.random() * 10000);
}
