'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();

  // Basic auth check
  useEffect(() => {
    if(localStorage.getItem('authenticated')) {
      router.push('/dashboard'); // Will create this next
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('authenticated', 'true');
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
