import Link from "next/link";
import { Home } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-primary mb-4 animate-pulse">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Looks like this play got blown up in the backfield.
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Link href="/podcast">
            <Button variant="outline">
              Listen to Podcast
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
