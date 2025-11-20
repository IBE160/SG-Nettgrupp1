import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log('Debug: Loading environment variables...');
console.log('SUPABASE_URL:', supabaseUrl ? supabaseUrl.replace(/.*?(\w{5})$/, '...$1') : 'UNDEFINED');
console.log('SUPABASE_ANON_KEY:', supabaseKey ? 'DEFINED (length: ' + supabaseKey.length + ')' : 'UNDEFINED');

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_ANON_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDatabase() {
  console.log('Checking Supabase connection...');

  try {
    // Try to select from the products table
    const { data, error } = await supabase
      .from('products')
      .select('count', { count: 'exact', head: true });

    if (error) {
      if (error.code === '42P01') { // undefined_table
        console.error('❌ Error: The "products" table does not exist.');
        console.log('   Please run the migration script "migrations/001_create_products_table.sql" in your Supabase SQL Editor.');
      } else {
        console.error('❌ Error connecting to Supabase or querying table:', error.message);
      }
      process.exit(1);
    } else {
      console.log('✅ Success: Connected to Supabase and "products" table exists.');
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err.message);
    process.exit(1);
  }
}

checkDatabase();
