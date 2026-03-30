import Link from "next/link";

export default function navbar() {                // Navigation bar  
  return (
                                                  // Navigation container for the 3 link pages 
    <nav className="nav">                         
      <Link href="/">Home</Link>
      <Link href="/about">About Page</Link>
      <Link href="/randomquote">Quotes</Link>
    </nav>
  );
}

