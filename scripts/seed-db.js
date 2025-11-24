import { createClient } from '@supabase/supabase-js';
import { faker } from '@faker-js/faker';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedDatabase() {
  console.log('Seeding database with product data...');

  // First, delete all existing products to ensure a clean slate
  const { error: deleteError } = await supabase.from('products').delete().neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
  if (deleteError) {
    console.error('Error deleting existing products:', deleteError.message);
    return;
  }
  console.log('Deleted existing products.');

  // Generate 10 fake products
  const productsToInsert = Array.from({ length: 10 }, () => ({
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: parseFloat(faker.commerce.price()),
    stock_quantity: faker.number.int({ min: 10, max: 100 }),
  }));

  const { data, error } = await supabase
    .from('products')
    .insert(productsToInsert)
    .select();

  if (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }

  console.log(`✅ Success: Seeded database with ${data.length} products.`);
}

seedDatabase();
