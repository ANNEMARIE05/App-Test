import React, { useState } from "react";

const Commande = () => {
  const [product, setProduct] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [material, setMaterial] = useState("");
  const [finish, setFinish] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  // Etat pour contrôler la visibilité du popup
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter la logique pour envoyer les données à votre serveur ici.
    console.log("Commande soumise", {
      product,
      dimensions,
      material,
      finish,
      quantity,
      name,
      email,
      phone,
      address,
      message,
    });

    // Afficher le popup de confirmation
    setShowPopup(true);
  };

  // Fonction pour réinitialiser les champs et fermer le popup
  const handleClosePopup = () => {
    // Réinitialiser les champs du formulaire
    setProduct("");
    setDimensions("");
    setMaterial("");
    setFinish("");
    setQuantity(1);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");

    // Fermer le popup
    setShowPopup(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Passer une commande</h2>
      <form onSubmit={handleSubmit}>
        {/* Sélection du produit */}
        <div className="mb-4">
          <label htmlFor="product" className="block text-sm font-medium text-gray-700">
            Produit
          </label>
          <select
            id="product"
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Choisissez un produit</option>
            <option value="porte">Porte</option>
            <option value="fenetre">Fenêtre</option>
            <option value="meuble">Meuble</option>
            <option value="escalier">Escalier</option>
          </select>
        </div>

        {/* Dimensions */}
        <div className="mb-4">
          <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
            Dimensions (en cm)
          </label>
          <input
            type="text"
            id="dimensions"
            name="dimensions"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ex : 100x200"
            required
          />
        </div>

        {/* Matériau */}
        <div className="mb-4">
          <label htmlFor="material" className="block text-sm font-medium text-gray-700">
            Matériau
          </label>
          <select
            id="material"
            name="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Choisissez un matériau</option>
            <option value="chene">Chêne</option>
            <option value="pin">Pin</option>
            <option value="bambou">Bambou</option>
          </select>
        </div>

        {/* Finition */}
        <div className="mb-4">
          <label htmlFor="finish" className="block text-sm font-medium text-gray-700">
            Finition
          </label>
          <select
            id="finish"
            name="finish"
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Choisissez une finition</option>
            <option value="vernis">Vernis</option>
            <option value="peinture">Peinture</option>
            <option value="naturel">Naturel</option>
          </select>
        </div>

        {/* Quantité */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantité
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            min="1"
            required
          />
        </div>

        {/* Informations personnelles */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Adresse de livraison
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Message spécial */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message spécial
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ajoutez des informations supplémentaires ici"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
          >
            Soumettre la commande
          </button>
        </div>
      </form>

      {/* Popup de confirmation */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Votre commande a bien été envoyée !</h3>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commande;
