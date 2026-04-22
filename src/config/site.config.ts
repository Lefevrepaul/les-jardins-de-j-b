export const siteConfig = {
  company: {
    name: "Les Jardins de J-B",
    tagline: "Votre paysagiste de confiance à Rue",
    description: "Expert en aménagement paysager depuis 20 ans, Les Jardins de J-B transforme vos espaces extérieurs en véritables havres de paix. Création de jardins, entretien d'espaces verts et aménagements sur mesure dans la Somme."
  },
  contact: {
    phoneDisplay: "07 67 52 73 36",
    phoneE164: "+33767527336",
    email: "Contactez-nous via notre formulaire"
  },
  location: {
    city: "Rue",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 50.2584681,
      lng: 1.7003648
    },
    villes: [
      "Rue",
      "Le Crotoy",
      "Saint-Valery-sur-Somme",
      "Fort-Mahon-Plage",
      "Crécy-en-Ponthieu",
      "Nouvion-en-Ponthieu",
      "Noyelles-sur-Mer",
      "Favières",
      "Ponthoile",
      "Quend",
      "Berck",
      "Montreuil"
    ],
    realisationsVilles: [
      "Rue",
      "Le Crotoy",
      "Saint-Valery-sur-Somme",
      "Fort-Mahon-Plage",
      "Crécy-en-Ponthieu",
      "Noyelles-sur-Mer"
    ],
    temoignagesVilles: [
      "Rue",
      "Le Crotoy",
      "Saint-Valery-sur-Somme"
    ]
  },
  stats: {
    projectsCount: "250+",
    yearsExperience: "20 ans"
  },
  googleReviews: {
    rating: "4.9",
    count: 40,
    searchQuery: "Les+Jardins+de+J-B+Rue+avis"
  },
  seo: {
    titleTemplate: "%s | Les Jardins de J-B - Paysagiste à Rue",
    defaultTitle: "Les Jardins de J-B - Paysagiste à Rue et environs | Hauts-de-France",
    metaDescription: "Les Jardins de J-B, paysagiste expert à Rue depuis 20 ans. Création et entretien de jardins, aménagements paysagers sur mesure. Plus de 250 projets réalisés. Devis gratuit.",
    url: "https://www.lesjardinsde-jb.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;