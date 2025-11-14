import { faker } from '@faker-js/faker';

// TODO: This is a temporary solution. The API_URL should be configured properly.
const API_URL = 'http://localhost:3001';

export class UserFactory {
  private createdUsers: string[] = [];

  async createUser(overrides = {}) {
    const user = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password({ length: 12 }),
      ...overrides,
    };

    // API call to create user
    const response = await fetch(`${API_URL}/api/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const created = await response.json();
    this.createdUsers.push(created.id);
    // The factory needs to return the plain password to the test
    return { ...created, password: user.password };
  }

  async cleanup() {
    // Delete all created users
    for (const userId of this.createdUsers) {
      await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
      });
    }
    this.createdUsers = [];
  }
}
