"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, Phone } from "lucide-react"
// Removed: import Image from "next/image"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Начало", href: "#home" },
    { name: "Продукти", href: "#products" },
    { name: "Работно време", href: "#hours" },
    { name: "Местоположение", href: "#location" },
    { name: "Контакти", href: "#contact" },
  ]

  const products = [
    "Иглолистни греди",
    "Дъски за покрив",
    "Летви за под цигли",
    "Челни дъски",
    "Сачак",
    "Дюшеме",
    "Первази",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${
          isScrolled ? "bg-primary-color/95 backdrop-blur-sm shadow-lg" : "bg-primary-color"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="text-text-light text-2xl font-bold">
            <h2>АВЕРА ЕООД</h2>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-light hover:bg-secondary-color px-4 py-2 rounded-md transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-text-light">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary-color text-text-light border-none">
                <div className="flex flex-col gap-4 pt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-text-light hover:bg-secondary-color px-4 py-2 rounded-md transition-colors duration-200 text-lg"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-[70px] md:pt-[90px]">
        {" "}
        {/* Adjust padding-top based on navbar height */}
        {/* Home Section */}
        <section id="home" className="container mx-auto py-16 px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Добре дошли в АВЕРА ЕООД</h1>
          <p className="text-lg md:text-xl text-text-dark">
            Вашият надежден партньор за всички видове дървен материал.
          </p>
        </section>
        {/* Products Section */}
        <section id="products" className="container mx-auto py-16 px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Продукти</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="bg-light-wood border-secondary-color shadow-md p-6">
                {/* Removed: Image component */}
                <CardContent className="p-0 text-center font-semibold text-lg">{product}</CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Working Hours Section */}
        <section id="hours" className="container mx-auto py-16 px-4 md:px-6">
          <Card className="bg-light-wood shadow-lg p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Работно време</h2>
            <ul className="list-none p-0 space-y-2 text-lg">
              <li>
                <span className="font-semibold">Лятно:</span> 08:30–13:00 | 15:00–17:30 (почивка 13:00–15:00)
              </li>
              <li>
                <span className="font-semibold">{"Зимно \n:"}</span> 09:00–16:00 (без обедна почивка)
              </li>
              <li>
                <span className="font-semibold">Съботи и празнични дни:</span> 10:00–12:00
              </li>
              <li>
                <span className="font-semibold">Неделя: </span> Почивен ден
              </li>
            </ul>
          </Card>
        </section>
        {/* Location Section */}
        <section id="location" className="container mx-auto py-16 px-4 md:px-6">
          <Card className="bg-light-wood shadow-lg p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Местоположение</h2>
            <p className="text-lg">
              гр. Ботевград, бул. Цар Освободител 31
              <br />
              (в двора на Напоителни системи)
            </p>
          </Card>
        </section>
        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-16 px-4 md:px-6">
          <Card className="bg-light-wood shadow-lg p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакти</h2>
            <p className="text-lg flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary-color" /> Телефон: +359 88 7538761
            </p>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-color text-text-light text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} АВЕРА ЕООД. Всички права запазени.
      </footer>
    </div>
  )
}
