import { createUser } from '../tests/support/factories/user.factory.js';
import 'dotenv/config';

const email = process.env.SUPABASE_TEST_EMAIL;
const password = process.env.SUPABASE_TEST_PASSWORD;

if (!email || !password) {
  console.error('Error: SUPABASE_TEST_EMAIL and SUPABASE_TEST_PASSWORD must be set in .env');
  process.exit(1);
}

async function createAdminUser() {
  console.log(`Creating admin user with email: ${email}...`);
  try {
    const user = await createUser(email, password);
    console.log('✅ Success: Admin user created or already exists.');
  } catch (error) {
    console.error('Error creating admin user:', error.message);
    process.exit(1);
  }
}

createAdminUser();
