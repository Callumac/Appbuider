'use client';
   export default function LoginPage() {
     return (
       <div>
         <h1>Admin Login</h1>
         <form>
           <input type="email" placeholder="Your email" required />
           <input type="password" placeholder="Password (12+ chars)" required />
           <button>Login</button>
         </form>
       </div>
     );
   }
