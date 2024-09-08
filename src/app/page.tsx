"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/nhlogo.webp"
import product from "@/assets/images/product.webp"
import whatsapp from "@/assets/images/nuafalwhatsapp.webp"
import { useState } from 'react';

const Page = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col min-h-screen bg-green-50">
			<header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white shadow-sm text-black">
				<Link className="flex items-center justify-center" href="#">
					<Image src={logo} alt="Naufal Herbal" width={80} height={80} />
					<span className="ml-2 text-xl md:text-2xl font-bold text-gray-800">Naufal Herbal</span>
				</Link>
				<nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50 md:ml-auto md:items-center`}>
					<Link className="px-4 py-2 mx-5 text-sm font-medium hover:text-green-600 md:px-0" href="#about">
						About Us
					</Link>
					<Link className="px-4 py-2 mx-5 text-sm font-medium hover:text-green-600 md:px-0" href="#product">
						Our Product
					</Link>
					<Link className="px-4 py-2 mx-5 text-sm font-medium hover:text-green-600 md:px-0" href="#order">
						Order Now
					</Link>
				</nav>
				<button
					className="md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<Menu className="h-6 w-6" />
				</button>
			</header>
			<main className="flex-1">
				<section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-[url('/assets/images/ayu4rved.webp')] bg-cover bg-center bg-no-repeat flex items-center">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col items-center space-y-4 text-center">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black drop-shadow-lg">
								Welcome to Naufal Herbal
							</h1>
							<p className="mx-auto max-w-[90%] text-base sm:text-lg md:text-xl text-black p-2 rounded-md">
								Your Ayurvedic Wellness Partner - Established in 2024, Pune
							</p>
              <Link href="#product">
							<Button className="mt-4 bg-green-600 hover:bg-green-700 text-white" size="lg">
								Explore Our Products
							</Button>
              </Link>
						</div>
					</div>
				</section>
				<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-black">
							About Us
						</h2>
						<p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
							At Naufal Herbal, we focus on delivering natural and effective remedies using the power of Ayurveda. 
							Our goal is to provide convenient, reliable home remedies that promote health and balance.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<Card className="bg-green-100 border-0">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-2">Dr. Hifzurrehman (MD)</h3>
									<p className="text-gray-600">
										A well-researched Hakim ensuring the quality and authenticity of our products.
									</p>
								</CardContent>
							</Card>
							<Card className="bg-green-100 border-0">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-2">Mr. Nawzish Ansari</h3>
									<p className="text-gray-600">
										Managing operations with a commitment to make natural remedies accessible to everyone.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section id="product" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-black">
							Our Star Product: Herbal Churan Powder
						</h2>
						<p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
							Our Herbal Churan Powder is designed to help you achieve better health with its Ayurvedic blend of herbs. 
							A simple, natural solution for daily wellness, right from your home.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<Card className="bg-white border-0">
								<CardContent className="p-6">
									<div className="flex items-center justify-center w-auto h-auto bg-green-200 rounded-md mb-4">
										<Image src={product} alt="Herbal Churan Powder"className="w-auto h-auto object-cover"/>
									</div>
									<h3 className="text-2xl font-bold text-gray-800 mb-2">Herbal Churan Powder</h3>
									<p className="text-gray-600">
										An Ayurvedic blend for promoting overall health and wellness.
									</p>
								</CardContent>
							</Card>
							<div className="space-y-4 text-black">
								<h3 className="text-3xl font-bold">Benefits:</h3>
								<ul className="space-y-2">
									{[
										"Promoting Weight Loss",
										"Preventing Bloating",
										"Treating Bowel Diseases",
										"Helping Treat Ringworms in Children",
									].map((benefit, index) => (
										<li key={index} className="flex items-center space-x-2 text-xl">
											<Check className="h-5 w-5 text-green-600" />
											<span>{benefit}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section id="order" className="w-full py-12 md:py-24 lg:py-32 bg-white">
					<div className="container px-4 md:px-6 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
							Order Now via WhatsApp
						</h2>
						<p className="mb-8 text-gray-600 max-w-2xl mx-auto">
							Ready to experience the benefits of Herbal Churan Powder? Place your order directly through WhatsApp!
						</p>
						<div className="flex flex-col items-center space-y-4">
							<div className="w-72 h-72 bg-gray-200 rounded-lg flex items-center justify-center">
								<Image src={whatsapp} alt="WhatsApp QR Code" className="w-auto h-auto object-cover"/>
							</div>
							<p className="text-sm text-gray-500">Scan the QR Code above to connect with us on WhatsApp Business</p>
							<Link href="https://wa.me/message/CGSDBSKL2UMKH1" target="_blank" rel="noopener noreferrer">
								<Button className="bg-green-600 hover:bg-green-700 text-white" size="lg">
									<Phone className="mr-2 h-4 w-4" /> Order via WhatsApp
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full py-6 bg-gray-800 text-white">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-2">About Us</h3>
							<p className="text-sm">Naufal Herbal: Your Ayurvedic Wellness Partner since 2024.</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Contact</h3>
							<p className="text-sm">WhatsApp: Scan the QR code above</p>
							<p className="text-sm">Location: Pune, India</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Quick Links</h3>
							<ul className="text-sm space-y-1">
								<li><Link href="#about" className="hover:text-green-400">About Us</Link></li>
								<li><Link href="#product" className="hover:text-green-400">Our Product</Link></li>
								<li><Link href="#order" className="hover:text-green-400">Order Now</Link></li>
							</ul>
						</div>
					</div>
					<div className="mt-8 border-t border-gray-700 pt-6 text-center">
						<p className="text-sm">&copy; 2024 Naufal Herbal. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Page;