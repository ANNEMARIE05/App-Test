import React from "react"
import { Link } from "react-router-dom"

function Inscription(){
    return(
        <>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="Pattern"
                        src="https://img.freepik.com/photos-gratuite/personnes-renovant-concept-maison_53876-20675.jpg?uid=R99967860&ga=GA1.1.1224294226.1731759794&semt=ais_hybrid"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    </aside>

                    <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                    <div className="max-w-xl lg:max-w-3xl">
                   <Link to={"/"} className="block text-indigo-500 font-extrabold">
                   Carpenter
                   </Link>

                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Bienvenue dans l'application Carpenter
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                        Inscrire toi pour avoir acces a l'application
                        </p>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <input type="name"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Entrer nom"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <input type="name"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Entrer prenom"/>
                        </div>

                        <div className="col-span-6">
                            <input type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Entrer email"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <input type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Mot de passe"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <input type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Confirmer le mot de passe" />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                id="MarketingAccept"
                                name="marketing_accept"
                                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />

                            <span className="text-sm text-gray-700">
                               Se souvenir
                            </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <Link to={"/connexion"}><button
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Créer mon compte
                            </button>
                        </Link>

                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                            as tu deja un compte?
                            <Link to={"/connexion"} className="text-gray-700 underline">Connecte toi</Link>
                            .</p>
                        </div>
                        </form>
                    </div>
                    </main>
                </div>
            </section>
    

        </>
    )
}
export default Inscription