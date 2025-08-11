import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/" className="text-lg md:text-xl font-medium text-gray-900">
              Wootzapp Mobile Browser
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Solutions
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Security
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Company
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm hidden sm:block">
              Sign In
            </Link>
            <Button className="bg-black hover:bg-gray-800 text-white px-3 md:px-4 py-2 text-sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
