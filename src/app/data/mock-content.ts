export interface IContent {
  id: number;
  title: string;
  description: string;
  inventor: string;
}

export const mock_content : IContent[] = [
  { id: 1, title: 'Telephone', description: 'Device to talk another person anywhere in world', inventor: 'Alexander Graham Bell'},
  { id: 2, title: 'Motor Vehicle', description: 'Motorized moving vehicle for replacing animal powered carts', inventor:  'Carl Benz'},
  { id: 3, title: 'Computer', description: 'Machine that can do multiple tasks in seconds', inventor:  'Charles Babbage'},
  { id: 4, title: 'Electricity', description: 'A source of power easy to use and replaced steam power', inventor:  'Benjamin Franklin'}
];
