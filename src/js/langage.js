// On récupère tout les elements contenant du texte
const titre = document.getElementById("titre");
const description = document.getElementById("description");
// header
const connexion = document.getElementById("connexion");
const inscription = document.getElementById("inscription");
// section 1
const titre_section1 = document.getElementById("titre_section1");
const text_section1 = document.getElementById("text_section1");
const button_section1 = document.getElementById("button_section1");
const text1_section1 = document.getElementById("text1_section1");
//section 2 
const titre_section2 = document.getElementById("titre_section2");
const text_section2 = document.getElementById("text_section2");
// section 3
const titre_section3 = document.getElementById("titre_section3");
const text_section3 = document.getElementById("text_section3");
const box1_titre_section3 = document.getElementById("box1_titre_section3");
const box1_text_section3 = document.getElementById("box1_text_section3");
const box2_titre_section3 = document.getElementById("box2_titre_section3");
const box2_text_section3 = document.getElementById("box2_text_section3");
const box3_titre_section3 = document.getElementById("box3_titre_section3");
const box3_text_section3 = document.getElementById("box3_text_section3");
// section 4
const titre_section4 = document.getElementById("titre_section4");
const span1 = document.getElementById("span1");
const span1_text1 = document.getElementById("span1_text1");
const span1_text2 = document.getElementById("span1_text2");
const span1_text3 = document.getElementById("span1_text3");
const span1_text4 = document.getElementById("span1_text4");
const span1_text5 = document.getElementById("span1_text5");
const span1_text6 = document.getElementById("span1_text6");
const span1_text7 = document.getElementById("span1_text7");
const span1_text8 = document.getElementById("span1_text8");
const span2 = document.getElementById("span2");
const span2_text1 = document.getElementById("span2_text1");
const span2_text2 = document.getElementById("span2_text2");
const span2_text3 = document.getElementById("span2_text3");
const span2_text4 = document.getElementById("span2_text4");
const span2_text5 = document.getElementById("span2_text5");
const span2_text6 = document.getElementById("span2_text6");
const span2_text7 = document.getElementById("span2_text7");
const span3 = document.getElementById("span3");
const span3_text1 = document.getElementById("span3_text1");
const span3_text2 = document.getElementById("span3_text2");
const span3_text3 = document.getElementById("span3_text3");
const span4 = document.getElementById("span4");
const span4_text1 = document.getElementById("span4_text1");
const span5 = document.getElementById("span5");
const span5_text1 = document.getElementById("span5_text1");
const span5_text2 = document.getElementById("span5_text2");
const span5_text3 = document.getElementById("span5_text3");
const span5_text4 = document.getElementById("span5_text4");
const span5_text5 = document.getElementById("span5_text5");
const span5_text6 = document.getElementById("span5_text6");
const span5_text7 = document.getElementById("span5_text7");
const span5_text8 = document.getElementById("span5_text8");
// section 5
const titre_section5 = document.getElementById("titre_section5");
const box1_title_section5 = document.getElementById("box1_title_section5");
const box1_text2_section5 = document.getElementById("box1_text2_section5");
const box1_text5_section5 = document.getElementById("box1_text5_section5");
const box2_title_section5 = document.getElementById("box2_title_section5");
const box3_title_section5 = document.getElementById("box3_title_section5");
const box3_text1_section5 = document.getElementById("box3_text1_section5");
const box3_text2_section5 = document.getElementById("box3_text2_section5");
const box4_title_section5 = document.getElementById("box4_title_section5");
// footer
const footer_1 = document.getElementById("footer_1");
const footer_2 = document.getElementById("footer_2");
const footer_3 = document.getElementById("footer_3");
const footer_4 = document.getElementById("footer_4");
const footer_5 = document.getElementById("footer_5");
const footer_6 = document.getElementById("footer_6");
const footer_7 = document.getElementById("footer_7");
const footer_8 = document.getElementById("footer_8");
const footer_9 = document.getElementById("footer_9");
const footer_10 = document.getElementById("footer_10");
const footer_11 = document.getElementById("footer_11");

// écoute les changements sur un élément de formulaire avec l'id boutonLangue.
boutonLangue.addEventListener("change", () => {
    // Si la valeur de boutonLangue == à l'anglais alors on va chercher dans le dictionnaire la traductions
    if (boutonLangue.value === "en") {
        titre.textContent = traductions.en.titre;
        description.textContent = traductions.en.description;
        connexion.textContent = traductions.en.connexion;
        inscription.textContent = traductions.en.inscription;
        titre_section1.textContent = traductions.en.titre_section1;
        text_section1.textContent = traductions.en.text_section1;
        button_section1.textContent = traductions.en.button_section1;
        text1_section1.textContent = traductions.en.text1_section1;
        titre_section2.textContent = traductions.en.titre_section2;
        text_section2.textContent = traductions.en.text_section2;
        titre_section3.textContent = traductions.en.titre_section3;
        text_section3.textContent = traductions.en.text_section3;
        box1_titre_section3.textContent = traductions.en.box1_titre_section3;
        box1_text_section3.textContent = traductions.en.box1_text_section3;
        box2_titre_section3.textContent = traductions.en.box2_titre_section3;
        box2_text_section3.textContent = traductions.en.box2_text_section3;
        box3_titre_section3.textContent = traductions.en.box3_titre_section3;
        box3_text_section3.textContent = traductions.en.box3_text_section3;
        titre_section4.textContent = traductions.en.titre_section4;
        span1.textContent = traductions.en.span1;
        span1_text1.textContent = traductions.en.span1_text1;
        span1_text2.textContent = traductions.en.span1_text2;
        span1_text3.textContent = traductions.en.span1_text3;
        span1_text4.textContent = traductions.en.span1_text4;
        span1_text5.textContent = traductions.en.span1_text5;
        span1_text6.textContent = traductions.en.span1_text6;
        span1_text7.textContent = traductions.en.span1_text7;
        span1_text8.textContent = traductions.en.span1_text8;
        span2.textContent = traductions.en.span2;
        span2_text1.textContent = traductions.en.span2_text1;
        span2_text2.textContent = traductions.en.span2_text2;
        span2_text3.textContent = traductions.en.span2_text3;
        span2_text4.textContent = traductions.en.span2_text4;
        span2_text5.textContent = traductions.en.span2_text5;
        span2_text6.textContent = traductions.en.span2_text6;
        span2_text7.textContent = traductions.en.span2_text7;
        span3.textContent = traductions.en.span3;
        span3_text1.textContent = traductions.en.span3_text1;
        span3_text2.textContent = traductions.en.span3_text2;
        span3_text3.textContent = traductions.en.span3_text3;
        span4.textContent = traductions.en.span4;
        span4_text1.textContent = traductions.en.span4_text1;
        span5.textContent = traductions.en.span5;
        span5_text1.textContent = traductions.en.span5_text1;
        span5_text2.textContent = traductions.en.span5_text2;
        span5_text3.textContent = traductions.en.span5_text3;
        span5_text4.textContent = traductions.en.span5_text4;
        span5_text5.textContent = traductions.en.span5_text5;
        span5_text6.textContent = traductions.en.span5_text6;
        span5_text7.textContent = traductions.en.span5_text7;
        span5_text8.textContent = traductions.en.span5_text8;
        titre_section5.textContent = traductions.en.titre_section5;
        box1_title_section5.textContent = traductions.en.box1_title_section5;
        box1_text2_section5.textContent = traductions.en.box1_text2_section5;
        box1_text5_section5.textContent = traductions.en.box1_text5_section5;
        box2_title_section5.textContent = traductions.en.box2_title_section5;
        box3_title_section5.textContent = traductions.en.box3_title_section5;
        box3_text1_section5.textContent = traductions.en.box3_text1_section5;
        box3_text2_section5.textContent = traductions.en.box3_text2_section5;
        box4_title_section5.textContent = traductions.en.box4_title_section5;
        footer_1.textContent = traductions.en.footer_1;
        footer_2.textContent = traductions.en.footer_2;
        footer_3.textContent = traductions.en.footer_3;
        footer_4.textContent = traductions.en.footer_4;
        footer_5.textContent = traductions.en.footer_5;
        footer_6.textContent = traductions.en.footer_6;
        footer_7.textContent = traductions.en.footer_7;
        footer_8.textContent = traductions.en.footer_8;
        footer_9.textContent = traductions.en.footer_9;
        footer_10.textContent = traductions.en.footer_10;
        footer_11.textContent = traductions.en.footer_11;
    } else {
        titre.textContent = traductions.fr.titre;
        description.textContent = traductions.fr.description;
        connexion.textContent = traductions.fr.connexion;
        inscription.textContent = traductions.fr.inscription;
        titre_section1.textContent = traductions.fr.titre_section1;
        text_section1.textContent = traductions.fr.text_section1;
        button_section1.textContent = traductions.fr.button_section1;
        text1_section1.textContent = traductions.fr.text1_section1;
        titre_section2.textContent = traductions.fr.titre_section2;
        text_section2.textContent = traductions.fr.text_section2;
        titre_section3.textContent = traductions.fr.titre_section3;
        text_section3.textContent = traductions.fr.text_section3;
        box1_titre_section3.textContent = traductions.fr.box1_titre_section3;
        box1_text_section3.textContent = traductions.fr.box1_text_section3;
        box2_titre_section3.textContent = traductions.fr.box2_titre_section3;
        box2_text_section3.textContent = traductions.fr.box2_text_section3;
        box3_titre_section3.textContent = traductions.fr.box3_titre_section3;
        box3_text_section3.textContent = traductions.fr.box3_text_section3;
        titre_section4.textContent = traductions.fr.titre_section4;
        span1.textContent = traductions.fr.span1;
        span1_text1.textContent = traductions.fr.span1_text1;
        span1_text2.textContent = traductions.fr.span1_text2;
        span1_text3.textContent = traductions.fr.span1_text3;
        span1_text4.textContent = traductions.fr.span1_text4;
        span1_text5.textContent = traductions.fr.span1_text5;
        span1_text6.textContent = traductions.fr.span1_text6;
        span1_text7.textContent = traductions.fr.span1_text7;
        span1_text8.textContent = traductions.fr.span1_text8;
        span2.textContent = traductions.fr.span2;
        span2_text1.textContent = traductions.fr.span2_text1;
        span2_text2.textContent = traductions.fr.span2_text2;
        span2_text3.textContent = traductions.fr.span2_text3;
        span2_text4.textContent = traductions.fr.span2_text4;
        span2_text5.textContent = traductions.fr.span2_text5;
        span2_text6.textContent = traductions.fr.span2_text6;
        span2_text7.textContent = traductions.fr.span2_text7;
        span3.textContent = traductions.fr.span3;
        span3_text1.textContent = traductions.fr.span3_text1;
        span3_text2.textContent = traductions.fr.span3_text2;
        span3_text3.textContent = traductions.fr.span3_text3;
        span4.textContent = traductions.fr.span4;
        span4_text1.textContent = traductions.fr.span4_text1;
        span5.textContent = traductions.fr.span5;
        span5_text1.textContent = traductions.fr.span5_text1;
        span5_text2.textContent = traductions.fr.span5_text2;
        span5_text3.textContent = traductions.fr.span5_text3;
        span5_text4.textContent = traductions.fr.span5_text4;
        span5_text5.textContent = traductions.fr.span5_text5;
        span5_text6.textContent = traductions.fr.span5_text6;
        span5_text7.textContent = traductions.fr.span5_text7;
        span5_text8.textContent = traductions.fr.span5_text8;
        titre_section5.textContent = traductions.fr.titre_section5;
        box1_title_section5.textContent = traductions.fr.box1_title_section5;
        box1_text2_section5.textContent = traductions.fr.box1_text2_section5;
        box1_text5_section5.textContent = traductions.fr.box1_text5_section5;
        box2_title_section5.textContent = traductions.fr.box2_title_section5;
        box3_title_section5.textContent = traductions.fr.box3_title_section5;
        box3_text1_section5.textContent = traductions.fr.box3_text1_section5;
        box3_text2_section5.textContent = traductions.fr.box3_text2_section5;
        box4_title_section5.textContent = traductions.fr.box4_title_section5;
        footer_1.textContent = traductions.fr.footer_1;
        footer_2.textContent = traductions.fr.footer_2;
        footer_3.textContent = traductions.fr.footer_3;
        footer_4.textContent = traductions.fr.footer_4;
        footer_5.textContent = traductions.fr.footer_5;
        footer_6.textContent = traductions.fr.footer_6;
        footer_7.textContent = traductions.fr.footer_7;
        footer_8.textContent = traductions.fr.footer_8;
        footer_9.textContent = traductions.fr.footer_9;
        footer_10.textContent = traductions.fr.footer_10;
        footer_11.textContent = traductions.fr.footer_11;
    }
});
// On définit les traductions dans ce dictionnaire traductions
const traductions = {
    fr: {
        titre: "Disney+ | Films, séries, productions originales en streaming",
        description: "Ceci est un exemple de texte en français.",
        connexion: "S'IDENTIFIER",
        inscription: "S'INSCRIRE",
        titre_section1: "Tout ce que vous imaginez et encore +",
        text_section1: "Entrez votre adresse e-mail pour commencer ou réactiver votre abonnement.",
        text1_section1: "Profitez de 12 mois au prix de 10 quand vous souscrivez un abonnement Disney+ annuel. Économies par rapport à un an d'abonnement mensuel.",
        titre_section2: "Seulement sur Disney+",
        text_section2: "Des séries, productions originales et films exclusifs que vous ne trouverez sur aucun autre service de streaming.",
        titre_section3: "Regardez selon vos envies",
        text_section3: "Profitez des plus belles histoires au monde, partout et à tout moment.",
        box1_titre_section3: "Un divertissement sans fin",
        box1_text_section3: "Découvrez des milliers d'heures de séries, films et productions originales.",
        box2_titre_section3: "Disponible sur vos appareils préférés",
        box2_text_section3: "Utilisez jusqu'à 4 appareils compatibles en simultané.",
        box3_titre_section3: "Un contrôle parental intuitif",
        box3_text_section3: "Protégez votre famille avec un contrôle parental simple d'utilisation.",
        titre_section4: "Questions fréquentes",

        span1: "Qu'est-ce que Disney+ ?",
        span1_text1: "Disney+ est la destination des univers Disney, Pixar, Marvel, Star Wars, National Geographic, Star et encore +.",
        span1_text2: "Un abonnement à Disney+, c’est tout ce que vous imaginez et encore + :",
        span1_text3: "Retrouvez toutes les productions originales ainsi que les films, séries et courts-métrages issus des mondes Disney, Pixar, Marvel, Star Wars, National Geographic, Star* et encore +.",
        span1_text4: "Téléchargez autant de films et séries que vous souhaitez sur jusqu'à 10 appareils.",
        span1_text5: "Accédez à des films et séries en 4K UHD avec Dolby Vision et Dolby Atmos sur les appareils compatibles sans frais supplémentaires.",
        span1_text6: "Utilisez le contrôle parental pour sécuriser l'accès aux contenus Disney+ ainsi que le profil Enfants pour les plus jeunes.",
        span1_text7: "Regardez vos contenus préférés sur 4 appareils en simultané.",
        span1_text8: "Découvrez GroupWatch, qui vous permettra de regarder à distance n'importe quel film ou série",

        span2: "Que puis-je regarder sur Disney+ ?",
        span2_text1: "Avec des milliers de films et de séries imaginés par les plus grands créateurs du monde entier et de nouveaux contenus ajoutés chaque mois, vous trouverez toujours quelque chose à regarder sur Disney+.",
        span2_text2: "Accédez aux plus beaux classiques et aux plus grandes sagas des studios Disney, de Pinocchio aux Pirates des Caraïbes.",
        span2_text3: "Découvrez des histoires émouvantes pour tous les âges, créées par les génies des studios Pixar, comme l'incontournable aventure italienne Luca ou l'entrée dans l'adolescence de Mei Lee avec Alerte rouge.",
        span2_text4: "Vivez comme jamais l'histoire en constante évolution de l'Univers Cinématographique Marvel avec des séries exclusives des Studios Marvel comme WandaVision, Falcon et le Soldat de l'Hiver, Loki ou bien encore Moon Knight.",
        span2_text5: "Revivez l'épopée de la saga Skywalker ou regardez en streaming les dernières séries live-action Star Wars, comme The Mandalorian ou Obi-Wan Kenobi.",
        span2_text6: "Ouvrez les yeux sur la richesse de notre planète grâce aux intrépides explorateurs de National Geographic et à leurs documentaires passionnants.",
        span2_text7: "Avec Star, retrouvez enfin des séries dont tout le monde parle, comme Dopesick, Les Kardashian, Desperate Housewives, Malcolm, Les Simpson ou l'intégrale de la série Futurama, imaginée par les mêmes créateurs.",

        span3: "Quel est le prix de l'abonnement Disney+ ?",
        span3_text1: "Disney+ est disponible pour 8,99 € par mois. Vous pouvez aussi économiser plus de 15 %* en vous abonnant pour 12 mois au prix de 89,90 €.",
        span3_text2: "Vous pouvez également offrir un an de Disney+ à un ami ou un membre de votre famille en cliquant ici.",
        span3_text3: "* Voir conditions d’abonnement. Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel.",

        span4: "Quels appareils et plateformes puis-je utiliser avec Disney+ ?",
        span4_text1: "Disney+ est accessible sur mobiles, navigateurs Web, consoles de jeux, décodeurs TV et TV connectées. Cliquez ici pour retrouver la liste complète des appareils compatibles.",

        span5: "L'abonnement Disney+ comprend-il une durée d'engagement ?",
        span5_text1: "Disney+ est sans engagement et vous pouvez annuler votre abonnement quand vous le souhaitez. L'annulation sera effective à la fin de la période pour laquelle vous avez payé. Pour vous désabonner, suivez ces 6 étapes:",
        span5_text2: "Identifiez-vous sur www.DisneyPlus.com",
        span5_text3: "Sélectionnez votre profil",
        span5_text4: "Sélectionnez Compte",
        span5_text5: "Sélectionnez votre abonnement",
        span5_text6: "Sélectionnez Résilier l’abonnement",
        span5_text7: "Sélectionnez Continuer pour résilier",
        span5_text8: "Pour plus d'informations, cliquez ici.",

        titre_section5: "Accessible sur vos appareils préférés",
        box1_title_section5: "Télévisions",
        box1_text2_section5: "Appareils Android TV",
        box1_text5_section5: "TV LG",
        box2_title_section5: "Ordinateurs",
        box3_title_section5: "Mobiles et tablettes",
        box3_text1_section5: "Tablettes Amazon Fire",
        box3_text2_section5: "Mobiles et tablettes Android",
        box4_title_section5: "Consoles de jeux",

        footer_1: "Conditions générales d'abonnement",
        footer_2: "Règles de Respect de la Vie Privée",
        footer_3: "Droits Données dans l'UE et au R-U",
        footer_4: "Modalités relatives aux cookies",
        footer_5: "Publicités ciblées par centres d'intérêt",
        footer_6: "Appareils compatibles",
        footer_7: "Aide",
        footer_8: "Offrez Disney+",
        footer_9: "À propos de Disney+",
        footer_10: "Gérer vos préférences",
        footer_11: "Le contenu et les plateformes disponibles peuvent varier selon la zone géographique. © 2023 Disney et ses sociétés affiliées. Tous droits réservés.",
    },
    en: {
        titre: "+ More than you'd ever imagine",
        description: "Ceci est un exemple de texte en français.",
        connexion: "LOG IN",
        inscription: "SIGN UP NOW",
        titre_section1: "+ More than you'd ever imagine",
        text_section1: "Enter your email to create or restart your subscription.",
        text1_section1: "Get 12 months for the price of 10 when you sign up for an annual Disney+ subscription, compared to paying monthly.",
        titre_section2: "Only on Disney+",
        text_section2: "Exclusive movies, series and originals you won't find on any other streaming service.",
        titre_section3: "Watch the way you want",
        text_section3: "Enjoy the world's greatest stories - anytime, anywhere.",
        box1_titre_section3: "Endless entertainment",
        box1_text_section3: "Explore thousands of hours of TV series, movies and originals.",
        box2_titre_section3: "Available on your favourite devices",
        box2_text_section3: "Stream on up to four screens at once on compatible devices.",
        box3_titre_section3: "Easy-to-use parental controls",
        box3_text_section3: "Keep your family safe with our intuitive parental controls.",
        titre_section4: "Frequently Asked Questions",
        span1: "What is Disney+?",
        span1_text1: "Disney+ is the streaming home for entertainment from Disney, Pixar, Marvel, Star Wars, National Geographic, Star and more.",
        span1_text2: "Disney+ has a number of benefits included in the standard subscription price:",
        span1_text3: "Exclusive Originals you can’t see anywhere else, blockbuster movies, bingeable shows, snackable shorts, and inspiring documentaries",
        span1_text4: "Unlimited downloads on up to 10 devices and up to 7 different profiles",
        span1_text5: "4K UHD streaming with Dolby Vision and Dolby Atmos support on compatible devices for no extra cost",
        span1_text6: "A robust parental controls system including dedicated profiles for children",
        span1_text7: "Up to 4 screens can stream simultaneously",
        span1_text8: "Host virtual viewing parties for up to 5 personal friends with Groupwatch",

        span2: "What can I watch on Disney+?",
        span2_text1: "With thousands of films and series from the greatest storytellers around the globe and more added each month, you will always find something to watch on Disney+",
        span2_text2: "The best classics and sagas from Disney Studios, like Pinocchio or Pirates of the Caribbean",
        span2_text3: "Heart-warming storytelling for all ages from the masterminds at Pixar such as the must-see Italian adventure Luca or Mei Lee's entering into adolescence in Turning Red",
        span2_text4: "Experience the ever-growing story of the Marvel Cinematic Universe like never before with must-see exclusive Original series from Marvel Studios - WandaVision, The Falcon and The Winter Soldier, Loki or Moon Knight",
        span2_text5: "Relive the epic Skywalker Saga or stream the latest live-action Star Wars series, like The Mandalorian or Obi-Wan Kenobi",
        span2_text6: "Open your eyes to the beauty of our planet with fearless National Geographic explorers and a number of insightful documentaries",

        span2_text7: "With Star, you will finally find series that everyone is talking about, such as Dopesick, The Kardashians, Desperate Housewives, Malcom, The Simpsons or the entire Futurama series invented by the same creators.",

        span3: "How much does Disney+ cost?",
        span3_text1: "Disney+ subscription costs €8.99 a month. Alternatively, save over 15%* with the annual subscription at €89.90 a year and get 12 months for the price of 10.",
        span3_text2: "*savings compared to 12 months of the monthly price.",
        span3_text3: "",

        span4: "What devices are supported?",
        span4_text1: "Disney+ supports mobile devices, web browsers, game consoles, set-top boxes, and smart TVs. Click here for the full list.",

        span5: "Is there any commitment when signing up for Disney+?",
        span5_text1: "There are no commitments and you can cancel at any time, effective at the end of your current payment period. Just follow the below 5 easy steps:",
        span5_text2: "Go to www.disneyplus.com and log in",
        span5_text3: "Select your Profile",
        span5_text4: "Select Account",
        span5_text5: "Select Cancel Subscription",
        span5_text6: "Select Complete Cancellation to confirm",
        span5_text7: "For more information click here.",
        span5_text8: "",

        titre_section5: "Available on your favourite devices",
        box1_title_section5: "TV",
        box1_text2_section5: "Android TV devices",
        box1_text5_section5: "LG TVs",
        box2_title_section5: "Computer",
        box3_title_section5: "Mobile & Tablet",
        box3_text1_section5: "Amazon Fire Tablets",
        box3_text2_section5: "Android Phones & Tablets",
        box4_title_section5: "Game Consoles",

        footer_1: "Subscriber Agreement",
        footer_2: "Privacy Policy",
        footer_3: "UK & EU Privacy Rights",
        footer_4: "Cookies Policy",
        footer_5: "Interest-Based Ads",
        footer_6: "Supported Devices",
        footer_7: "Help Centre",
        footer_8: "About Us",
        footer_9: "Manage Preferences",
        footer_10: "",
        footer_11: "Content and platform availability may vary by region. © 2023 Disney and its related entities. All Rights Reserved.",

    }
};