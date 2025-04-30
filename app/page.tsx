import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to login if not authenticated
  redirect('/login');
}
