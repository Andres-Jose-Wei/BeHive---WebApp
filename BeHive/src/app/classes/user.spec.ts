import { User } from './user';
import { Group } from './group';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('', '', '', '', '', new Group(''))).toBeTruthy();
  });
});
