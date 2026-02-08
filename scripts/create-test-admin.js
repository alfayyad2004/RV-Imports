const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://dyqkzeoutxutryjrasoe.supabase.co';
// Using the same key found in create-admin.js
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cWt6ZW91dHh1dHJ5anJhc29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyNDExNTUsImV4cCI6MjA4NTgxNzE1NX0.zKfLFENpljoAqYXeQh9bccAR9iWPbMi5x746AYD0Xe4';

const supabase = createClient(supabaseUrl, supabaseKey);

async function createTestAdmin() {
    console.log('Attempting to create user: admin@example.com');
    const { data, error } = await supabase.auth.signUp({
        email: 'admin@example.com',
        password: 'password',
    });

    if (error) {
        console.error('Error creating user:', error.message);
        // Try to verify if it's a password strength issue
        if (error.message.includes('password')) {
            console.log('Retrying with stronger password...');
            const { data: retryData, error: retryError } = await supabase.auth.signUp({
                email: 'admin@example.com',
                password: 'password123',
            });
            if (retryError) console.error('Retry error:', retryError.message);
            else console.log('User created with password123');
        }
    } else {
        console.log('User created successfully:', data.user?.email);
        console.log('Log in with: admin@example.com / password');
    }
}

createTestAdmin();
