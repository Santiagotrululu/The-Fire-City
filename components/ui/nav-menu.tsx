"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Rocket, LogIn, ShoppingBag, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Servidor",
    href: "/servidor",
    description: "Información sobre nuestro servidor SAMP.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-red-400"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  },
  {
    title: "Foro",
    href: "/foro",
    description: "Únete a nuestra comunidad y participa en discusiones.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-red-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  },
  {
    title: "Guía RP",
    href: "/roleplay-guide",
    description: "Aprende los fundamentos del roleplay en nuestro servidor.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-red-400"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
  },
  {
    title: "Conceptos RP",
    href: "/conceptos-rp",
    description: "Descubre los términos y conceptos clave del roleplay.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-red-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  },
]

export function NavMenu() {
  const router = useRouter()

  return (
    <div className="relative z-50">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-red-600 text-white hover:bg-red-700 focus:bg-red-700">
              <Menu className="h-6 w-6" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="fixed right-4 mt-2 w-[300px] rounded-md bg-gray-900 border border-gray-800 shadow-lg">
                <ul className="p-4 space-y-2">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/instalacion" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 ml-2")}>
                <Rocket className="h-6 w-6" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/tienda" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 ml-2")}>
                <ShoppingBag className="h-6 w-6" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://discord.gg/RR3YWgSSF5" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 ml-2")}>
                <MessageCircle className="h-6 w-6" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={cn(navigationMenuTriggerStyle(), "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 ml-2")}
              onClick={() => router.push('/auth/login')}
            >
              <LogIn className="h-6 w-6" />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <Link href={props.href || '#'} passHref>
        <a
          ref={ref}
          className={cn(
            "flex flex-col rounded-md p-3 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white transition-colors",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium text-white mb-1">
            {icon}
            <span>{title}</span>
          </div>
          <p className="text-xs text-gray-400">
            {children}
          </p>
        </a>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"

