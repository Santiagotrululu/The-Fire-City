import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home } from 'lucide-react'

export function BackToHomeButton() {
  return (
    <Link href="/" passHref>
      <Button
        variant="outline"
        size="lg"
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white border-white hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Home className="mr-2 h-4 w-4" />
        Volver al Inicio
      </Button>
    </Link>
  )
}

