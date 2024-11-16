import React from "react"
import { Link } from "react-router-dom"


export default function Accueil() {
    return(
        <>
            <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <Link to={"/"} className="block text-indigo-500 font-extrabold">Carpenter</Link>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                    <Link to={"/inscription"} className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                        >S'inscrire</Link>

                        <Link to={"/connexion"} className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                         >Connexion</Link>
                    </div>

                    <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </header>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                        alt="Party"
                        src="https://img.freepik.com/photos-gratuite/concept-menuiserie-homme-travaillant-scie_23-2147773340.jpg?uid=R99967860&ga=GA1.1.1224294226.1731759794&semt=ais_hybrid"
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">On vous acueil !</h2>
                        <p className="mt-4 text-gray-600">
                        Bienvenue sur l'application de commande de votre menuisier !
Nous mettons à votre disposition des produits et services sur mesure pour tous vos projets de menuiserie. Que vous ayez besoin de fenêtres, portes, meubles ou autres créations en bois, nous sommes là pour répondre à vos besoins.
                        </p>

                        <Link to={"/inscription"} className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >Commencer maintenant</Link>
                    </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center text-teal-600 sm:justify-start">
                <Link to={"/"} className="block text-indigo-500 font-extrabold">Carpenter</Link>
                </div>

                <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </p>
                </div>
            </div>
            </footer>
        </>
    )
}
