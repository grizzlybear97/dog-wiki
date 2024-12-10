async function test() {
//get the dog we wanna show info and fetch 3 images to showcase
function getQuery(name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

const dog = getQuery('dog') /* 'husky' */
const fetchURL = 'https://dog.ceo/api/breed/hound/images/random/4'
const bruh = fetchURL.replace('hound', dog)

const request = await fetch(bruh)
const response = await request.json()
const { message } = response

const dogImages = message

//display the images in dom.
const main = document.querySelector('.main')

for (let dog in dogImages) {
  let div = document.createElement('div')
  let img = document.createElement('img')
  img.src = dogImages[dog]

  div.classList.add('dog-profile')
  main.appendChild(div)
  div.appendChild(img)
}

console.log("hello")
/*  // grab breed info from wikipedia api
async function grabWiki(dogName) {
  const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&titles=${dogName}&format=json&origin=*`

  const response = await fetch(wikiURL)
  const data = await response.json()
  const pages = data.query.pages
  const pageId = Object.keys(pages)[0]
  updateContent(pages[pageId].extract)
}
*/

//function to update dom
function updateContent() {
  const heading = document.querySelector('.dogHeading')
  const description = document.querySelector('.description')
  const history = document.querySelector('.history')

  heading.innerText = dog
  description.innerText = getBreedDescription(dog)[0]
  history.innerText = getBreedDescription(dog)[1]
}


//breed descriptions to update content
const dogBreeds = [
  {
    breed: 'spitz',
    description:
      'The Spitz is a diverse group of dog breeds known for their wolf-like appearance, pointed ears, and bushy tail carried curled over the back. Spitz breeds vary widely in size, coat type, and color but typically have a dense double coat that is weather-resistant. They are intelligent, alert, and independent-minded, often retaining strong instincts for hunting, herding, or guarding. Spitz dogs are loyal to their families and can be aloof with strangers, making them excellent watchdogs and companions.',
    history:
      'Spitz-type dogs have ancient origins and are believed to have descended from ancient wolf-like dogs. They developed in various regions around the world, including Arctic and sub-Arctic areas where they were used for hunting, sled pulling, and guarding. Spitz breeds have contributed to the development of many modern breeds, each with unique adaptations to their local environments. They are known for their resilience, adaptability, and distinctive appearance.',
  },
  {
    breed: 'puggle',
    description:
      'The Puggle is a small to medium-sized crossbreed dog known for its friendly personality, affectionate nature, and cute appearance. A mix between a Pug and a Beagle, Puggles typically stand about 10 to 15 inches tall and weigh between 15 to 30 pounds. They have a short coat that is usually fawn, black, or tan with a wrinkled face similar to a Pug and longer ears like a Beagle. Puggles are playful, social, and good with children, making them popular as family pets and companions.',
    history:
      "The Puggle originated in the United States in the 1980s during the designer dog breed trend. Breeders sought to combine the Pug's charming personality and the Beagle's keen sense of smell into a smaller, more manageable dog. Puggles quickly gained popularity for their friendly temperament, adaptability to apartment living, and affectionate nature. They are known for their playful antics and love of attention from their families.",
  },
  {
    breed: 'waterdog',
    description:
      'The Portuguese Water Dog is a medium-sized breed known for its strong swimming abilities, intelligence, and loyal nature. Standing about 17 to 23 inches tall and weighing between 35 to 60 pounds, Portuguese Water Dogs have a curly or wavy coat that is usually black, white, or brown. They are athletic, energetic, and excel in water activities such as swimming and retrieving. Portuguese Water Dogs are friendly, trainable, and make excellent family pets and companions.',
    history:
      'Originating in Portugal, Portuguese Water Dogs have a long history as working dogs used by fishermen to retrieve nets, deliver messages between boats, and guard the shoreline. They gained popularity for their versatility, intelligence, and strong work ethic. Portuguese Water Dogs were favored by Portuguese nobility and were later brought to the United States where they became popular as hypoallergenic pets and therapy dogs.',
  },
  {
    breed: 'tervuren',
    description:
      'The Belgian Tervuren is a medium to large-sized breed known for its elegance, intelligence, and versatility. Standing about 22 to 26 inches tall and weighing between 40 to 65 pounds, Tervurens have a long, straight, and dense coat that is usually mahogany with black markings. They are agile, alert, and highly trainable, excelling in obedience, herding, and agility sports. Tervurens are loyal, protective, and make excellent working dogs and companions.',
    history:
      'Originating in Belgium, the Tervuren is one of four Belgian Shepherd breeds, named after the Belgian village of Tervuren where they were developed. They were originally bred for herding and guarding livestock, demonstrating their versatility and intelligence. Tervurens gained recognition for their elegant appearance and strong work ethic. They are known for their loyalty to their families, protective instincts, and high energy levels.',
  },
  {
    breed: 'shihtzu',
    description:
      'The Shih Tzu is a small toy breed known for its luxurious coat, friendly demeanor, and affectionate nature. Standing about 8 to 11 inches tall and weighing between 9 to 16 pounds, Shih Tzus have a long, flowing double coat that can be various colors, including gold, white, black, or parti-colored. They have a distinctive pushed-in face with large, round eyes and a flowing tail carried over the back. Shih Tzus are playful, outgoing, and enjoy being pampered as indoor companions.',
    history:
      'Originating in Tibet and later developed in China, Shih Tzus were bred as companion dogs for Chinese nobility during the Ming and Qing dynasties. They were highly prized for their charming personality, affectionate nature, and regal appearance. Shih Tzus became popular as lapdogs and were often kept in royal palaces and monasteries. They were later introduced to Western countries during the 20th century and quickly became beloved pets for their loyalty and gentle temperament.',
  },
  {
    breed: 'sharpei',
    description:
      "The Chinese Shar-Pei is a medium-sized breed known for its deep wrinkles, unique 'hippopotamus' muzzle shape, and loyalty to its family. Standing about 18 to 20 inches tall and weighing between 45 to 60 pounds, Shar-Peis have a short, bristly coat that can be various colors, including fawn, red, black, blue, or cream. They have a distinctively wrinkled appearance as puppies that smooths out as they mature. Shar-Peis are independent, loyal, and make devoted family companions.",
    history:
      'Originating in China, the Shar-Pei is an ancient breed with a history dating back over 2,000 years. They were originally bred for hunting, herding, and guarding purposes. Shar-Peis gained recognition for their protective nature, intelligence, and distinctive wrinkled appearance. They were nearly extinct in the mid-20th century but were revived through breeding efforts in Hong Kong and later gained popularity worldwide for their unique appearance and loyal personality.',
  },
  {
    breed: 'segugio',
    description:
      'The Segugio Italiano, also known as the Italian Hound, is a medium-sized breed known for its keen sense of smell, stamina, and versatility in hunting. Standing about 18 to 22 inches tall and weighing between 40 to 55 pounds, Segugios have a short, dense coat that can be various colors, including black and tan, fawn, or brindle. They are intelligent, determined, and excel in tracking game in diverse terrains. Segugios are loyal, energetic, and make dedicated hunting partners.',
    history:
      'Originating in Italy, Segugios have ancient roots dating back to Roman times. They were bred for hunting purposes, particularly for tracking small game such as hare and wild boar. Segugios gained popularity for their keen sense of smell, agility, and endurance in the field. They are valued for their versatility and adaptability to different hunting conditions. Segugios are known for their loyalty to their handlers and their strong hunting instincts.',
  },

  {
    breed: 'pembroke',
    description:
      'The Pembroke Welsh Corgi is a small breed known for its long body, short legs, and cheerful disposition. Standing about 10 to 12 inches tall and weighing between 25 to 30 pounds, Pembroke Corgis have a weather-resistant double coat that is usually red, sable, fawn, black and tan, or tri-color. They are intelligent, affectionate, and good with children, making them excellent family pets and companions.',
    history:
      'Originating in Wales, Pembroke Corgis were developed as herding dogs, particularly for driving cattle. They gained popularity among British royalty, including Queen Elizabeth II, who has owned several Pembroke Corgis. Pembroke Corgis are known for their agility, intelligence, and playful nature, making them versatile companions and beloved pets.',
  },
  {
    breed: 'pekinese',
    description:
      'The Pekingese is a small toy breed known for its regal appearance, independent nature, and affectionate personality. Standing about 6 to 9 inches tall and weighing between 7 to 14 pounds, Pekingese have a long, flowing double coat that is usually gold, red, sable, or black. They have a distinctive flattened face, long flowing mane, and a proud carriage. Pekingese are loyal, courageous, and make devoted companions.',
    history:
      'Originating in China over 2,000 years ago, Pekingese were bred as companions for Chinese royalty and nobility. They were highly valued and often treated as sacred animals, with severe penalties for anyone harming them. Pekingese were introduced to Western countries during the 19th century and quickly became popular as exotic pets. They are known for their dignified manner, loyalty to their owners, and independent spirit.',
  },
  {
    breed: 'pariah',
    description:
      'The Pariah Dog, also known as the Indian Native Dog or Pye Dog, refers to the native landrace dog breeds found throughout the Indian subcontinent. They vary widely in appearance and size, typically having a short coat and a range of colors. Pariah dogs are known for their resilience, intelligence, and adaptability to various environments. They are often independent but can form strong bonds with their human families, making them loyal companions and effective watchdogs.',
    history:
      'Pariah dogs have lived alongside humans in the Indian subcontinent for thousands of years, adapting to local environments and lifestyles. They are believed to have descended from ancient landrace dogs brought by early human migrations. Pariah dogs are valued for their hunting abilities, guarding livestock, and companionship. They have a unique genetic diversity and survival instinct, contributing to their widespread presence and cultural significance across South Asia.',
  },
  {
    breed: 'ovcharka',
    description:
      'The Caucasian Shepherd Dog, also known as the Caucasian Ovcharka, is a large and powerful breed known for its protective instincts and strong-willed nature. Standing about 24 to 30 inches tall and weighing between 110 to 220 pounds, Caucasian Shepherds have a dense double coat that is usually white, fawn, brindle, or gray. They are confident, loyal, and highly territorial, making them excellent guard dogs and protectors of livestock.',
    history:
      'Originating in the Caucasus Mountains of Eastern Europe and Western Asia, Caucasian Shepherds have been bred for centuries by various ethnic groups, including Georgians, Armenians, and Russians. They were primarily used for guarding sheep and other livestock against predators like wolves and bears in mountainous regions. Caucasian Shepherds are known for their courage, endurance, and strong protective instincts, making them valued working dogs and loyal companions.',
  },
  {
    breed: 'otterhound',
    description:
      'The Otterhound is a large and rare breed known for its shaggy coat, webbed feet, and love for water. Standing about 24 to 27 inches tall and weighing between 80 to 115 pounds, Otterhounds have a dense, water-resistant double coat that is usually rough and grizzled in appearance. They are friendly, boisterous, and independent, with a keen sense of smell and a love for tracking scents. Otterhounds are good with children and make loyal family pets.',
    history:
      'Originating in England, Otterhounds were developed in the 19th century for hunting otters in rivers and lakes. They were valued for their ability to track and pursue otters, which were considered pests to fishermen and landowners. Otterhounds gained popularity for their strong swimming abilities, endurance on land, and friendly disposition. Despite their rarity today, they are cherished for their unique appearance and lovable personality.',
  },
  {
    breed: 'mudhol',
    description:
      'The Mudhol Hound, also known as the Caravan Hound, is a lean and agile breed known for its speed, endurance, and hunting prowess. Standing about 24 to 28 inches tall and weighing between 45 to 55 pounds, Mudhol Hounds have a short, smooth coat that is usually fawn, brindle, or black. They are intelligent, independent, and loyal, with a strong prey drive and keen eyesight. Mudhol Hounds are versatile working dogs and loyal companions.',
    history:
      'Originating from Mudhol (now in Karnataka), India, Mudhol Hounds have a long history of being bred by local rulers and nobility for hunting small game, such as hare and deer. They are renowned for their speed and agility, capable of covering long distances in pursuit of prey. Mudhol Hounds are valued for their resilience in harsh climates and their loyalty to their owners, making them prized working dogs and cherished companions.',
  },
  {
    breed: 'mountain',
    description:
      'The Bernese Mountain Dog is a large and sturdy breed known for its gentle nature, strength, and distinctive tri-colored coat. Standing about 23 to 28 inches tall and weighing between 70 to 115 pounds, Bernese Mountain Dogs have a long, silky coat that is predominantly black with white markings and rust accents. They are calm, affectionate, and good with children, making them excellent family pets and companions.',
    history:
      'Originating in the Swiss Alps, Bernese Mountain Dogs were developed by Swiss farmers for herding cattle, pulling carts, and guarding farms. They were valued for their strength, endurance, and ability to work in mountainous terrain and harsh climates. Bernese Mountain Dogs gained popularity in the 20th century as gentle giants and loyal companions. They are known for their gentle temperament and devotion to their families.',
  },
  {
    breed: 'mix',
    description:
      "A mixed-breed dog, often referred to simply as a 'mix' or 'mutt', is a dog that is a combination of two or more different breeds. Mixed-breed dogs vary widely in size, coat type, and temperament, depending on the breeds involved in their ancestry. They can inherit a diverse range of traits from their parent breeds, making each mixed-breed dog unique in appearance and behavior. Mixed-breed dogs are often adopted from shelters or rescues, where they make loving and loyal companions.",
    history:
      'Mixed-breed dogs have been around for centuries, often developing naturally through random mating among different dog populations. They are not bred for specific traits or purposes like purebred dogs but instead inherit a mix of characteristics from various breeds in their ancestry. Mixed-breed dogs can exhibit a wide range of sizes, coat colors, and personalities, making them unpredictable but charming pets. They are known for their resilience, adaptability, and companionship.',
  },
  {
    breed: 'labradoodle',
    description:
      'The Labradoodle is a crossbreed dog created by crossing the Labrador Retriever and the Standard, Miniature, or Toy Poodle. They are known for their friendly and sociable nature, hypoallergenic coat, and intelligence. Labradoodles come in three sizes: Standard (over 21 inches tall), Medium (17-21 inches tall), and Miniature (14-17 inches tall). They have a curly or wavy coat that can be various colors, including cream, gold, chocolate, black, apricot, or parti-colored. Labradoodles are affectionate, energetic, and good with children, making them popular as family pets and therapy dogs.',
    history:
      'The Labradoodle was first bred in Australia in the 1980s with the intention of creating a guide dog suitable for people with allergies to dog hair. The cross between the Labrador Retriever and the Poodle resulted in a dog with the intelligence of the Poodle and the friendly, trainable nature of the Labrador Retriever. Labradoodles quickly gained popularity for their hypoallergenic coat and versatile temperament, becoming sought-after companions and service dogs around the world.',
  },
  {
    breed: 'groenendael',
    description:
      'The Groenendael, also known as the Belgian Sheepdog, is a medium to large-sized breed known for its elegant appearance, intelligence, and versatility. Standing about 22 to 26 inches tall and weighing between 55 to 75 pounds, Groenendaels have a long, straight, and dense black coat. They are agile, alert, and highly trainable, excelling in obedience and agility sports. Groenendaels are loyal, protective, and devoted to their families, making them excellent working dogs and companions.',
    history:
      'Originating in Belgium, the Groenendael is one of four Belgian Shepherd breeds, named after the Belgian village of Groenendael where they were developed. They were originally bred for herding and guarding livestock in rural Belgium. Groenendaels gained recognition for their intelligence and versatility, serving as police dogs, search and rescue dogs, and family companions. They are known for their athleticism, keen sense of smell, and protective instincts.',
  },
  {
    breed: 'gaddi',
    description:
      'The Gaddi Kutta, also known as the Indian Panther Hound, is a large and powerful breed known for its loyalty, courage, and protective instincts. Standing about 26 to 30 inches tall and weighing between 70 to 90 pounds, Gaddi Kuttas have a muscular build and a dense double coat that is usually black and tan or brindle. They are agile, intelligent, and fiercely loyal to their families, making them excellent guard dogs and protectors of livestock.',
    history:
      'Originating from the northern Himalayan region of India, the Gaddi Kutta has been bred by the Gaddi tribe for centuries to protect their livestock from predators like wolves and leopards. They are named after the Gaddi tribe, who have relied on these dogs for their strength, endurance, and vigilance in guarding their flocks in the rugged mountainous terrain. Gaddi Kuttas are known for their resilience, adaptability to harsh climates, and deep loyalty to their owners.',
  },
  {
    breed: 'malamute',
    description:
      'The Alaskan Malamute is a large and powerful Arctic breed known for its strength, endurance, and friendly disposition. Standing about 23 to 25 inches tall for females and 25 to 28 inches for males, Malamutes weigh between 75 to 85 pounds. They have a dense, double coat that is thick and weather-resistant, usually in shades of gray, sable, black, or red. Malamutes are affectionate, loyal, and good with older children, making them excellent family pets and working dogs.',
    history:
      'Originating from the Arctic regions of Alaska, the Alaskan Malamute was developed by the indigenous Mahlemut tribe for hauling heavy loads over long distances. They were highly valued for their strength and endurance in harsh conditions. Alaskan Malamutes gained recognition during the Klondike Gold Rush in the late 19th century, where they were used as sled dogs. They are one of the oldest Arctic sled dog breeds and are known for their dignified presence and pack mentality.',
  },
  {
    breed: 'havanese',
    description:
      'The Havanese is a small and sturdy toy breed known for its playful demeanor, silky coat, and friendly personality. Standing about 8.5 to 11.5 inches tall and weighing between 7 to 13 pounds, Havanese have a long, flowing double coat that is soft and can be various colors, including white, cream, fawn, black, chocolate, or parti-colored. They are affectionate, intelligent, and good with children, making them excellent family pets and companions.',
    history:
      'Originating in Cuba, the Havanese is named after Havana, its capital city. They are one of the oldest dog breeds native to Cuba and were favored by Cuban aristocracy and wealthy families as companions. Havanese gained popularity as charming pets in Europe during the 18th century and later in America. They are known for their playful nature, adaptability to various living conditions, and loyalty to their families.',
  },
  {
    breed: 'kombai',
    description:
      'The Kombai, also known as the Indian Bore Hound, is a medium to large-sized breed known for its strength, agility, and loyalty. Standing about 21 to 25 inches tall and weighing between 44 to 55 pounds, Kombais have a short, smooth coat that is usually deep red or fawn with white markings on the chest. They are muscular, courageous, and highly territorial, making them excellent guard dogs and hunting companions.',
    history:
      'Originating from the Kombai region of Tamil Nadu, India, the Kombai breed was developed by the Kombai tribe for hunting large game, such as boar and deer, in the dense forests of the Western Ghats. They are one of the oldest and purest Indian dog breeds, known for their strength, stamina, and fierce loyalty to their owners. Kombais are valued for their protective instincts and are often used as guard dogs in rural Indian villages.',
  },
  {
    breed: 'affenpinscher',
    description:
      'The Affenpinscher is a small breed known for its wiry coat and monkey-like expression. Standing about 9 to 11.5 inches tall and weighing between 7 to 10 pounds, Affenpinschers have a dense, rough coat that can be black, gray, silver, or red. They are affectionate, playful, and good with children, making them excellent family pets. Affenpinschers require regular grooming to keep their coat in good condition. They are known for their curiosity and bold demeanor.',
    history:
      "Originating in Germany during the 17th century, Affenpinschers were bred to be ratters in kitchens and stables. Their name means 'monkey-like terrier' in German, reflecting their lively and mischievous nature.",
  },
  {
    breed: 'african',
    description:
      'The African Dog is a mixed breed known for its intelligent and independent nature. Standing about 20 to 30 inches tall and weighing between 35 to 75 pounds, African Dogs have a short, smooth coat that can come in various colors. They are intelligent, energetic, and loyal, making them excellent family pets. African Dogs require regular exercise and mental stimulation to stay happy and healthy. Their coat is low-maintenance, requiring minimal grooming. They are known for their courage and determination.',
    history:
      'The African Dog is a mixed breed originating from various indigenous African dog types. They are known for their adaptability and have historically been used for hunting, guarding, and companionship in various African cultures.',
  },
  {
    breed: 'airedale',
    description:
      'The Airedale Terrier is a medium to large breed known for its intelligence, courage, and versatility. Standing about 21 to 23 inches tall and weighing between 40 to 65 pounds, Airedales have a dense, wiry coat that is usually tan with a black saddle. They are confident, friendly, and good with children, making them excellent family pets. Airedales require regular grooming to keep their coat in good condition. They are known for their loyalty and protective instincts.',
    history:
      "Originally bred in the Aire Valley of Yorkshire, England, during the 19th century, Airedale Terriers were used for hunting small game and as police and military dogs during World War I. They are often called the 'King of Terriers' due to their size and versatility.",
  },
  {
    breed: 'akita',
    description:
      'The Akita is a large and powerful breed known for its loyalty, courage, and dignified demeanor. Standing about 24 to 28 inches tall and weighing between 70 to 130 pounds, Akitas have a dense double coat that can be various colors, including white, brindle, or pinto. They are calm, intelligent, and reserved with strangers, making them excellent guardians and family companions. Akitas require regular grooming to keep their coat in good condition.',
    history:
      "Originating from the mountainous regions of northern Japan, Akitas were originally bred as hunting and guarding dogs. They are revered in Japanese culture as symbols of good health, happiness, and longevity. Akitas gained international attention when Hachiko, a loyal Akita, waited for his owner at a train station for nearly ten years after his owner's death.",
  },
  {
    breed: 'appenzeller',
    description:
      'The Appenzeller Sennenhund is a medium-sized breed known for its agility, intelligence, and versatility. Standing about 18.5 to 23 inches tall and weighing between 48 to 70 pounds, Appenzellers have a short, dense coat that is usually tricolor (black, tan, and white). They are lively, obedient, and loyal, making them excellent working dogs and family pets. Appenzeller Sennenhunds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in the Swiss Alps, Appenzeller Sennenhunds were used as herding and guarding dogs. They are one of four Swiss Sennenhund breeds and are known for their distinctive tricolor coat and strong work ethic.',
  },
  {
    breed: 'australian',
    description:
      'The Australian Terrier is a small and sturdy breed known for its loyalty, courage, and intelligence. Standing about 9 to 11 inches tall and weighing between 14 to 16 pounds, Australian Terriers have a rough, wiry coat that is usually blue and tan. They are alert, spirited, and good with children, making them excellent family pets. Australian Terriers require regular grooming to keep their coat in good condition.',
    history:
      'Originating in Australia during the early 19th century, Australian Terriers were bred to control vermin and snakes around farms and homesteads. They are one of the smallest terrier breeds and are known for their tenacity and keen sense of smell.',
  },
  {
    breed: 'bakharwal',
    description:
      'The Bakharwal Dog is a large and powerful breed known for its loyalty, strength, and protective nature. Standing about 24 to 30 inches tall and weighing between 88 to 110 pounds, Bakharwals have a thick, dense coat that is usually fawn, brindle, or black with white markings. They are intelligent, fearless, and deeply attached to their family, making them excellent guardians and companions. Bakharwal Dogs require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originally from the Pir Panjal mountain range in the Indian state of Jammu and Kashmir, Bakharwal Dogs were bred by the nomadic Gujjar tribe as livestock guardians. They are known for their endurance and ability to thrive in harsh mountainous terrain.',
  },
  {
    breed: 'basenji',
    description:
      'The Basenji is a small and elegant breed known for its intelligence, independence, and unique yodel-like vocalization. Standing about 16 to 17 inches tall and weighing between 22 to 24 pounds, Basenjis have a short, smooth coat that is usually chestnut red, black, or tricolor. They are alert, energetic, and good with children, making them excellent family pets. Basenjis require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Central Africa, Basenjis are one of the oldest known dog breeds. They were bred by African tribes as hunting dogs, known for their agility, silence, and ability to flush game into nets. Basenjis were brought to Europe in the late 19th century and gained popularity for their unique traits.',
  },
  {
    breed: 'beagle',
    description:
      'The Beagle is a small to medium-sized breed known for its friendly demeanor, intelligence, and keen sense of smell. Standing about 13 to 15 inches tall and weighing between 20 to 30 pounds, Beagles have a short, dense coat that can be various colors, including tri-color, lemon, and red and white. They are sociable, curious, and good with children, making them excellent family pets. Beagles require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in England during the 14th century, Beagles were originally bred as scent hounds for tracking small game such as rabbits. They are known for their pack-oriented nature and excellent sense of smell, which makes them popular for detection work and search and rescue operations.',
  },
  {
    breed: 'bluetick',
    description:
      'The Bluetick Coonhound is a medium to large breed known for its striking coat pattern and excellent hunting abilities. Standing about 21 to 27 inches tall and weighing between 45 to 80 pounds, Bluetick Coonhounds have a short, dense coat that is blue and white ticked. They are intelligent, tenacious, and good with children, making them excellent family pets and hunting companions. Bluetick Coonhounds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      "Originating in the United States, specifically in the Southern states, Bluetick Coonhounds were bred for their ability to track and tree raccoons and other small game. They are known for their distinctive 'ticked' coat pattern and loud, melodious baying voice.",
  },
  {
    breed: 'borzoi',
    description:
      'The Borzoi, also known as the Russian Wolfhound, is a large and elegant breed known for its speed, grace, and independent nature. Standing about 26 to 28 inches tall and weighing between 60 to 105 pounds, Borzois have a long, silky coat that can be various colors, including white, golden, and black. They are gentle, intelligent, and reserved with strangers, making them loyal companions and excellent family pets. Borzois require regular exercise and grooming to keep their coat in good condition.',
    history:
      'Originating in Russia, Borzois were bred by Russian nobility for hunting wolves, hares, and other game in the open plains. They are known for their speed and agility, which allows them to chase down fast-moving prey. Borzois gained popularity in Europe during the late 19th century as elegant and regal companions.',
  },
  {
    breed: 'bouvier',
    description:
      'The Bouvier des Flandres is a large and rugged breed known for its loyalty, intelligence, and versatility. Standing about 23.5 to 27.5 inches tall and weighing between 70 to 110 pounds, Bouviers have a dense, weather-resistant coat that is usually black, brindle, or fawn. They are calm, fearless, and protective, making them excellent working dogs and family companions. Bouviers require regular grooming to keep their coat in good condition.',
    history:
      'Originating in Belgium, Bouviers des Flandres were originally bred for herding, guarding, and pulling carts. They gained popularity during World War I and II as military and police dogs. Bouviers are known for their intelligence and versatility in various working roles.',
  },
  {
    breed: 'boxer',
    description:
      'The Boxer is a medium to large breed known for its athleticism, loyalty, and playful nature. Standing about 21 to 25 inches tall and weighing between 50 to 70 pounds, Boxers have a short, smooth coat that is usually fawn or brindle with white markings. They are energetic, affectionate, and good with children, making them excellent family pets. Boxers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      "Originating in Germany during the late 19th century, Boxers were bred from English Bulldogs and Bullenbeissers (now extinct) for hunting large game such as wild boar and bear. They are named for their tendency to stand on their hind legs and 'box' with their front paws. Boxers are known for their courage and protective instincts.",
  },
  {
    breed: 'brabancon',
    description:
      'The Brussels Griffon, also known as the Griffon Bruxellois, is a small breed known for its unique appearance and affectionate nature. Standing about 7 to 10 inches tall and weighing between 8 to 10 pounds, Brussels Griffons have a rough, wiry coat that can be red, belge (black and reddish-brown), black and tan, or solid black. They are intelligent, lively, and good with children, making them excellent family pets. Brussels Griffons require regular grooming to keep their coat in good condition.',
    history:
      "Originating in Belgium, Brussels Griffons were bred to hunt and kill vermin in stables. They gained popularity among Brussels' cab drivers for their ability to catch rats and mice. Brussels Griffons are known for their expressive faces and distinctive beard.",
  },
  {
    breed: 'briard',
    description:
      'The Briard is a large and powerful breed known for its loyalty, intelligence, and distinctive double coat. Standing about 22 to 27 inches tall and weighing between 55 to 100 pounds, Briards have a long, coarse outer coat and a dense, fine undercoat that can be various colors, including black, fawn, and gray. They are gentle, obedient, and protective, making them excellent working dogs and family companions. Briards require regular grooming to keep their coat in good condition.',
    history:
      'Originating in France, Briards have a long history as herding and guarding dogs. They were used by French shepherds to protect and move flocks of sheep. Briards gained recognition for their intelligence and versatility during World War I as military and ambulance dogs.',
  },
  {
    breed: 'buhund',
    description:
      'The Norwegian Buhund is a medium-sized breed known for its intelligence, energy, and versatility. Standing about 16.5 to 18.5 inches tall and weighing between 26 to 40 pounds, Norwegian Buhunds have a dense, weather-resistant coat that is wheaten (various shades of wolf-sable) in color. They are friendly, agile, and good with children, making them excellent family pets. Norwegian Buhunds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Norway, Norwegian Buhunds were bred by Vikings for herding livestock, especially sheep and cattle. They are one of the oldest native Norwegian dog breeds and are known for their keen sense of smell and ability to work in harsh weather conditions.',
  },
  {
    breed: 'bulldog',
    description:
      'The Bulldog, also known as the English Bulldog, is a medium-sized breed known for its distinctive wrinkled face and friendly demeanor. Standing about 14 to 15 inches tall and weighing between 40 to 50 pounds, Bulldogs have a short, smooth coat that can be various colors, including brindle, fawn, and white with patches. They are calm, courageous, and good with children, making them excellent family pets. Bulldogs require regular grooming and attention to their facial folds.',
    history:
      'Originating in England, Bulldogs were originally bred for bull-baiting, a cruel sport where dogs would attack and immobilize bulls. They were later bred for their friendly and gentle temperament, becoming popular as companions and mascots. Bulldogs are known for their distinctive appearance and loving nature.',
  },
  {
    breed: 'bullterrier',
    description:
      'The Bull Terrier is a medium-sized breed known for its muscular build, distinctive egg-shaped head, and playful nature. Standing about 21 to 22 inches tall and weighing between 50 to 70 pounds, Bull Terriers have a short, flat coat that can be white, brindle, or tri-color. They are energetic, loyal, and good with children, making them excellent family pets. Bull Terriers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in England during the 19th century, Bull Terriers were bred from Bulldogs and various terrier breeds for dog fighting and vermin control. They were later refined for their unique appearance and friendly temperament. Bull Terriers are known for their courage and love of play.',
  },
  {
    breed: 'cattledog',
    description:
      'The Australian Cattle Dog, also known as the Blue Heeler or Queensland Heeler, is a medium-sized breed known for its intelligence, agility, and loyalty. Standing about 17 to 20 inches tall and weighing between 35 to 50 pounds, Australian Cattle Dogs have a short, dense coat that is blue or red speckled. They are alert, hardworking, and protective, making them excellent herders and family companions. Australian Cattle Dogs require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Australia during the 19th century, Australian Cattle Dogs were bred by settlers for herding cattle over long distances in harsh conditions. They are known for their endurance and ability to handle tough Australian terrain.',
  },
  {
    breed: 'cavapoo',
    description:
      'The Cavapoo, also known as the Cavoodle, is a small to medium-sized breed known for its friendly demeanor and low-shedding coat. Standing about 9 to 14 inches tall and weighing between 12 to 25 pounds, Cavapoos have a soft, curly or wavy coat that can be various colors, including apricot, cream, and black. They are affectionate, playful, and good with children, making them excellent family pets. Cavapoos require regular grooming to keep their coat in good condition.',
    history:
      'The Cavapoo is a crossbreed between the Cavalier King Charles Spaniel and the Poodle. They were developed in the United States and Australia during the late 20th century to create a companion dog with the friendly nature of the Cavalier and the low-shedding coat of the Poodle. Cavapoos are known for their loving temperament and adaptability.',
  },
  {
    breed: 'chihuahua',
    description:
      'The Chihuahua is a small breed known for its tiny size, alert expression, and big personality. Standing about 6 to 9 inches tall and weighing between 2 to 6 pounds, Chihuahuas have a short or long coat that can be various colors, including fawn, black, and white. They are loyal, energetic, and often attached to one person, making them excellent companions. Chihuahuas require minimal exercise and grooming due to their small size.',
    history:
      'Originating in Mexico, Chihuahuas are one of the oldest and smallest dog breeds in the world. They are named after the Mexican state of Chihuahua, where they were cherished by ancient civilizations like the Aztecs. Chihuahuas gained popularity in the United States during the early 20th century and are known for their feisty and bold temperament.',
  },
  {
    breed: 'chippiparai',
    description:
      'The Chippiparai is a medium to large-sized breed known for its elegant appearance, speed, and hunting abilities. Standing about 25 to 28 inches tall and weighing between 40 to 65 pounds, Chippiparais have a short, smooth coat that is usually solid colors like fawn, black, or brown. They are intelligent, loyal, and reserved with strangers, making them excellent guard dogs and family pets. Chippiparais require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Southern India, Chippiparais were bred by royalty and nobility for hunting wild boar, deer, and hare. They are one of the oldest and purest native dog breeds of India, known for their speed, agility, and loyalty to their owners.',
  },
  {
    breed: 'chow',
    description:
      'The Chow Chow is a medium to large-sized breed known for its distinctive lion-like mane, blue-black tongue, and aloof demeanor. Standing about 17 to 20 inches tall and weighing between 45 to 70 pounds, Chow Chows have a dense, straight coat that can be various colors, including red, black, blue, and cream. They are loyal, independent, and reserved with strangers, making them excellent guard dogs and companions. Chow Chows require regular grooming to keep their coat in good condition.',
    history:
      'Originating in China over 2,000 years ago, Chow Chows were bred for hunting, guarding, and pulling sleds. They were revered as symbols of nobility and protection. Chow Chows gained popularity in Europe and the United States during the 19th century for their unique appearance and dignified demeanor.',
  },
  {
    breed: 'clumber',
    description:
      'The Clumber Spaniel is a large and heavy-boned breed known for its gentle nature, hunting abilities, and distinctive appearance. Standing about 17 to 20 inches tall and weighing between 55 to 85 pounds, Clumber Spaniels have a dense, straight coat that is usually white with lemon or orange markings. They are calm, affectionate, and good with children, making them excellent family pets and hunting companions. Clumber Spaniels require regular grooming to keep their coat in good condition.',
    history:
      'Originating in England, Clumber Spaniels were bred by the Duke of Newcastle in the 18th century for hunting in dense cover and retrieving game birds. They are named after Clumber Park in Nottinghamshire, where they were developed. Clumber Spaniels are known for their gentle and loyal temperament.',
  },
  {
    breed: 'cockapoo',
    description:
      'The Cockapoo is a small to medium-sized breed known for its friendly demeanor, intelligence, and low-shedding coat. Standing about 10 to 15 inches tall and weighing between 12 to 24 pounds, Cockapoos have a soft, curly or wavy coat that can be various colors, including apricot, cream, and black. They are affectionate, playful, and good with children, making them excellent family pets. Cockapoos require regular grooming to keep their coat in good condition.',
    history:
      'The Cockapoo is a crossbreed between the Cocker Spaniel and the Poodle. They were first bred in the United States during the 1950s to create a companion dog with the friendly nature of the Cocker Spaniel and the low-shedding coat of the Poodle. Cockapoos are known for their loving temperament and adaptability.',
  },
  {
    breed: 'collie',
    description:
      'The Collie is a medium to large-sized breed known for its loyalty, intelligence, and striking appearance. Standing about 22 to 26 inches tall and weighing between 50 to 75 pounds, Collies have a long, dense coat that can be rough or smooth and is usually tricolor (sable and white, blue merle, or white). They are gentle, trainable, and good with children, making them excellent family pets and working dogs. Collies require regular grooming to keep their coat in good condition.',
    history:
      "Originating in Scotland and Northern England, Collies were originally bred as herding dogs for sheep and cattle. They gained international fame in the 20th century through books, movies, and television shows like 'Lassie.' Collies are known for their keen intelligence and strong herding instincts.",
  },
  {
    breed: 'coonhound',
    description:
      'The Coonhound is a group of breeds known for their hunting abilities, distinctive bay, and friendly nature. They include breeds like the Black and Tan Coonhound, Redbone Coonhound, and Treeing Walker Coonhound. Coonhounds are medium to large-sized dogs known for their athleticism, endurance, and loyalty. They have short coats that are easy to maintain and come in various colors. Coonhounds are intelligent, independent, and good with children, making them excellent hunting companions and family pets.',
    history:
      'Coonhounds originated in the United States and were developed for hunting raccoons and other small game. Each Coonhound breed has its own unique history and characteristics, but they all share a common ancestry and purpose as skilled hunters and loyal companions.',
  },
  {
    breed: 'corgi',
    description:
      'The Corgi, including the Pembroke Welsh Corgi and the Cardigan Welsh Corgi, is a small to medium-sized breed known for its intelligence, agility, and loyal nature. Standing about 10 to 12 inches tall and weighing between 25 to 30 pounds, Corgis have a short, dense coat that is usually red, sable, fawn, or tricolor (red, black, and white). They are friendly, outgoing, and good with children, making them excellent family pets. Corgis require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Corgis originated in Wales and have a long history as herding dogs for cattle and sheep. Pembroke Welsh Corgis were favored by British royalty, including Queen Elizabeth II. Both Pembroke and Cardigan Corgis are known for their short legs and long bodies, which give them a distinctive appearance and agile movement.',
  },
  {
    breed: 'cotondetulear',
    description:
      'The Coton de Tulear is a small and affectionate breed known for its cotton-like coat, charming personality, and loyal nature. Standing about 10 to 11 inches tall and weighing between 9 to 15 pounds, Cotons have a long, fluffy coat that is white or white with tan markings. They are intelligent, playful, and good with children, making them excellent family pets. Cotons require regular grooming to keep their coat in good condition.',
    history:
      'Originating in Madagascar, Coton de Tulears were favored companions of the Malagasy nobility and were believed to bring good luck. They are named after the city of Tulear (now Toliara) on the southwest coast of Madagascar. Cotons gained international recognition for their affectionate temperament and unique coat texture.',
  },
  {
    breed: 'dachshund',
    description:
      'The Dachshund, also known as the Wiener Dog or Sausage Dog, is a small breed known for its long body, short legs, and lively personality. Standing about 8 to 9 inches tall and weighing between 16 to 32 pounds, Dachshunds have a short, smooth coat that can be various colors and patterns, including red, black and tan, and dapple. They are courageous, curious, and good with children, making them excellent family pets. Dachshunds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Germany during the 15th century, Dachshunds were bred for hunting badgers and other burrow-dwelling animals. Their long, low body allowed them to enter burrows and tunnels. Dachshunds gained popularity as companions in Europe and the United States for their unique appearance and spirited nature.',
  },
  {
    breed: 'dalmatian',
    description:
      'The Dalmatian is a medium to large-sized breed known for its distinctive black or liver spotted coat and dignified demeanor. Standing about 19 to 24 inches tall and weighing between 45 to 70 pounds, Dalmatians have a short, dense coat that is white with black or liver spots. They are energetic, outgoing, and good with children, making them excellent family pets. Dalmatians require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Croatia, Dalmatians were bred as carriage dogs to accompany horse-drawn carriages and guard them against highwaymen and animals. They gained popularity in England during the 18th century as carriage dogs for aristocrats. Dalmatians are known for their endurance, athleticism, and distinctive coat pattern.',
  },
  {
    breed: 'dane',
    description:
      'The Great Dane is a giant breed known for its imposing size, gentle nature, and noble appearance. Standing about 28 to 34 inches tall and weighing between 110 to 175 pounds, Great Danes have a short, smooth coat that can be various colors, including fawn, brindle, blue, black, and harlequin (white with black patches). They are friendly, patient, and good with children, making them excellent family pets. Great Danes require regular exercise and mental stimulation despite their size.',
    history:
      'Originating in Germany, Great Danes (also known as German Mastiffs) were bred from ancient mastiff-type dogs for hunting wild boar and guarding estates. They gained popularity among European nobility and were later used as war dogs and hunting companions. Great Danes are known for their gentle demeanor and towering presence.',
  },
  {
    breed: 'danish',
    description:
      'The Danish-Swedish Farmdog is a small and lively breed known for its intelligence, agility, and friendly nature. Standing about 12 to 14 inches tall and weighing between 15 to 25 pounds, Danish-Swedish Farmdogs have a short, smooth coat that is usually white with patches of black or brown. They are alert, affectionate, and good with children, making them excellent family pets. Danish-Swedish Farmdogs require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Denmark and Sweden, Danish-Swedish Farmdogs were bred for hunting vermin and small game on farms. They are one of the oldest dog breeds in Scandinavia and are known for their versatility as working dogs and companions.',
  },
  {
    breed: 'deerhound',
    description:
      'The Scottish Deerhound is a giant breed known for its elegance, speed, and gentle nature. Standing about 28 to 32 inches tall and weighing between 75 to 110 pounds, Deerhounds have a wiry coat that is usually blue-gray, brindle, or fawn. They are dignified, loyal, and good with children, making them excellent family pets. Deerhounds require regular exercise and mental stimulation despite their large size.',
    history:
      'Originating in Scotland, Deerhounds were bred for hunting deer by Scottish nobility. They were highly valued for their ability to chase and bring down large game. Deerhounds gained popularity in the 19th century among British aristocrats and were recognized for their grace and athleticism.',
  },
  {
    breed: 'dhole',
    description:
      'The Dhole, also known as the Asiatic Wild Dog or Indian Wild Dog, is a wild canid species native to South and Southeast Asia. Dholes are medium-sized canids with a slender build, short coat, and bushy tail. They typically weigh between 15 to 25 kilograms and stand about 45 to 55 centimeters tall at the shoulder. Dholes are social animals that live and hunt in packs, primarily preying on deer and other small to medium-sized ungulates. They are known for their cooperative hunting strategies and vocal communication.',
    history:
      "Dholes have inhabited Asia for thousands of years and are one of the continent's top predators. They play a significant ecological role as apex predators in their habitats, influencing prey populations and maintaining ecosystem balance.",
  },
  {
    breed: 'dingo',
    description:
      "The Dingo is a wild canid species native to Australia. Dingoes are medium-sized canids with a lean build, short coat, erect ears, and bushy tail. They typically weigh between 13 to 20 kilograms and stand about 45 to 60 centimeters tall at the shoulder. Dingoes have a yellowish to reddish coat coloration with white markings on the chest, paws, and tail tip. They are highly adaptable and opportunistic hunters, preying on a wide range of animals from small mammals to larger prey like kangaroos. Dingoes play a significant ecological role as apex predators in Australia's ecosystems.",
    history:
      'Dingoes are believed to have arrived in Australia over 4,000 years ago, possibly with seafaring Southeast Asian populations. They have since adapted to various habitats across the continent, from tropical forests to arid deserts. Dingoes have a complex relationship with humans in Australia, often viewed as pests by livestock farmers while also holding cultural significance to Indigenous Australians.',
  },
  {
    breed: 'doberman',
    description:
      'The Doberman Pinscher, often simply referred to as Doberman, is a medium to large-sized breed known for its loyalty, intelligence, and sleek appearance. Standing about 24 to 28 inches tall and weighing between 60 to 100 pounds, Dobermans have a short, smooth coat that is usually black, blue, red, or fawn with rust markings. They are energetic, fearless, and good with children, making them excellent family pets and guard dogs. Dobermans require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Germany during the late 19th century, Doberman Pinschers were bred by Karl Friedrich Louis Dobermann, a tax collector and dog breeder. They were developed as versatile working dogs for protection, police work, and companionship. Dobermans gained international recognition for their loyalty, intelligence, and courage.',
  },
  {
    breed: 'dogo',
    description:
      'The Dogo Argentino, also known as the Argentine Mastiff, is a large and muscular breed known for its strength, loyalty, and protective nature. Standing about 23.5 to 27 inches tall and weighing between 80 to 100 pounds, Dogo Argentinos have a short, smooth coat that is usually white. They are courageous, intelligent, and good with children, making them excellent family pets and guard dogs. Dogo Argentinos require early socialization and training due to their protective instincts.',
    history:
      'Originating in Argentina during the 20th century, Dogo Argentinos were bred by Antonio Nores Martinez and his brother Augustin as big-game hunters and guardians. They are descended from several breeds, including the Cordoba Fighting Dog (now extinct), Great Dane, Bulldog, and Boxer. Dogo Argentinos are known for their strength, stamina, and loyalty to their families.',
  },
  {
    breed: 'dutchshepherd',
    description:
      'The Dutch Shepherd is a medium-sized breed known for its versatility, intelligence, and agility. Standing about 21.5 to 24.5 inches tall and weighing between 42 to 75 pounds, Dutch Shepherds have a short, dense coat that can be brindle, fawn, or gray with a black overlay. They are loyal, energetic, and trainable, making them excellent working dogs and family companions. Dutch Shepherds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in the Netherlands, Dutch Shepherds were bred as versatile farm dogs for herding livestock, guarding property, and pulling carts. They are known for their intelligence, agility, and strong work ethic. Dutch Shepherds gained popularity in various working roles and are valued for their versatility and trainability.',
  },
  {
    breed: 'elkhound',
    description:
      'The Norwegian Elkhound is a medium-sized breed known for its endurance, versatility, and wolf-like appearance. Standing about 19.5 to 20.5 inches tall and weighing between 48 to 55 pounds, Norwegian Elkhounds have a dense, weather-resistant coat that is gray with black tips. They are alert, energetic, and loyal, making them excellent hunting companions and family pets. Norwegian Elkhounds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Norway, Norwegian Elkhounds were bred by Vikings for hunting large game, including moose (known as elk in Europe) and bear. They are one of the oldest Scandinavian dog breeds and are known for their endurance, intelligence, and ability to work in harsh weather conditions.',
  },
  {
    breed: 'entlebucher',
    description:
      'The Entlebucher Mountain Dog, also known as the Entlebucher Sennenhund, is a medium-sized breed known for its agility, intelligence, and loyal nature. Standing about 16 to 21 inches tall and weighing between 45 to 65 pounds, Entlebuchers have a short, tri-color coat that is black with symmetrical white and tan markings. They are energetic, attentive, and good with children, making them excellent family pets and working dogs. Entlebuchers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Switzerland, Entlebucher Mountain Dogs were bred by Swiss herdsmen (Senn) in the Entlebuch Valley for herding cattle and guarding farms. They are the smallest and rarest of the four Swiss Sennenhund breeds and are known for their agility, intelligence, and strong work ethic.',
  },
  {
    breed: 'eskimo',
    description:
      'The American Eskimo Dog, also known as the Eskie, is a small to medium-sized breed known for its fluffy white coat, friendly demeanor, and intelligence. Standing about 9 to 19 inches tall and weighing between 6 to 35 pounds, American Eskimo Dogs have a dense, double coat that is usually white or biscuit cream. They are alert, playful, and good with children, making them excellent family pets. American Eskimo Dogs require regular grooming to keep their coat in good condition.',
    history:
      'Originating in Germany, American Eskimo Dogs were originally known as the German Spitz and were popular circus performers in the United States during the early 20th century. They were later renamed American Eskimo Dogs due to anti-German sentiment during World War I. American Eskimo Dogs are known for their agility, intelligence, and loving nature.',
  },
  {
    breed: 'finnish',
    description:
      'The Finnish Lapphund, also known as the Lapinkoira, is a medium-sized breed known for its friendly demeanor, intelligence, and versatility. Standing about 16 to 21 inches tall and weighing between 33 to 53 pounds, Finnish Lapphunds have a dense, double coat that is weather-resistant and comes in various colors, including black, brown, and white. They are alert, loyal, and good with children, making them excellent family pets and working dogs. Finnish Lapphunds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      "Originating in Finland, Finnish Lapphunds were bred by the indigenous Sami people for herding reindeer and guarding camps. They are one of Finland's oldest dog breeds and are known for their agility, intelligence, and strong bond with their families.",
  },
  {
    breed: 'frise',
    description:
      'The Bichon Frise is a small breed known for its playful demeanor, fluffy white coat, and cheerful personality. Standing about 9.5 to 11.5 inches tall and weighing between 12 to 18 pounds, Bichon Frises have a curly, hypoallergenic coat that requires regular grooming to prevent matting. They are affectionate, gentle, and good with children, making them excellent family pets. Bichon Frises enjoy companionship and thrive in environments where they receive attention and love.',
    history:
      'Originating in the Mediterranean region, Bichon Frises were favored companions of sailors and nobility during the Renaissance era. They gained popularity in France during the 16th century and were known for their playful antics and cheerful disposition. Bichon Frises are beloved for their hypoallergenic coat and loving nature.',
  },
  {
    breed: 'fryer',
    description:
      'The Braque Francais Pyrenean, also known as the French Pointing Dog - Gascogne Type, is a medium-sized breed known for its hunting abilities, versatility, and gentle nature. Standing about 20 to 24 inches tall and weighing between 48 to 55 pounds, Braque Francais Pyreneans have a short, dense coat that is usually white with orange or liver markings. They are energetic, loyal, and good with children, making them excellent hunting companions and family pets. Braque Francais Pyreneans require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in France, Braque Francais Pyreneans were bred for pointing and retrieving game birds in various terrains, including mountains and marshes. They are one of several Braque breeds developed in France and are known for their agility, intelligence, and strong hunting instincts.',
  },
  {
    breed: 'gastellum',
    description:
      'The Braque Saint-Germain, also known as the French Pointing Dog - Saint Germain Type, is a medium-sized breed known for its hunting abilities, intelligence, and friendly nature. Standing about 20 to 24 inches tall and weighing between 48 to 55 pounds, Braque Saint-Germains have a short, dense coat that is usually white with orange or liver markings. They are energetic, loyal, and good with children, making them excellent hunting companions and family pets. Braque Saint-Germains require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in France, Braque Saint-Germains were bred for pointing and retrieving game birds in various terrains, including mountains and marshes. They are one of several Braque breeds developed in France and are known for their agility, intelligence, and strong hunting instincts.',
  },
  {
    breed: 'germanshepherd',
    description:
      'The German Shepherd, also known as the Alsatian, is a large-sized breed known for its intelligence, loyalty, and versatility. Standing about 22 to 26 inches tall and weighing between 50 to 90 pounds, German Shepherds have a dense, double coat that can be short or long and comes in various colors, including black and tan, sable, and all black. They are confident, courageous, and good with children, making them excellent family pets, guard dogs, and working dogs. German Shepherds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Germany during the late 19th century, German Shepherds were bred by Captain Max von Stephanitz for herding and guarding sheep. They gained international fame for their intelligence, trainability, and versatility in roles such as police, military, search and rescue, and therapy work. German Shepherds are known for their loyalty and dedication to their families.',
  },
  {
    breed: 'golden',
    description:
      'The Golden Retriever is a large-sized breed known for its friendly demeanor, intelligence, and golden coat. Standing about 21.5 to 24 inches tall and weighing between 55 to 75 pounds, Golden Retrievers have a dense, water-repellent coat that is golden or cream in color. They are gentle, outgoing, and good with children, making them excellent family pets, therapy dogs, and hunting companions. Golden Retrievers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Scotland during the 19th century, Golden Retrievers were bred by Lord Tweedmouth at his estate near Inverness. They were developed as hunting dogs for retrieving waterfowl and gained popularity for their gentle mouth and trainability. Golden Retrievers are known for their friendly temperament and are one of the most popular dog breeds in the United States.',
  },
  {
    breed: 'greyhound',
    description:
      'The Greyhound is a tall and slender breed known for its speed, grace, and gentle nature. Standing about 27 to 30 inches tall and weighing between 60 to 70 pounds, Greyhounds have a short, smooth coat that can be various colors, including black, blue, fawn, and brindle. They are athletic, affectionate, and good with children, making them excellent family pets and racing dogs. Greyhounds require regular exercise and mental stimulation despite their reputation for being couch potatoes.',
    history:
      'Originating in ancient Egypt, Greyhounds were revered for their speed and hunting prowess. They were later bred by European nobility for coursing game such as deer, hare, and fox. Greyhounds gained popularity in the racing industry and are known for their sprinting ability and gentle temperament.',
  },
  {
    breed: 'harrier',
    description:
      'The Harrier is a medium-sized breed known for its hunting abilities, friendly nature, and pack-oriented behavior. Standing about 19 to 21 inches tall and weighing between 45 to 65 pounds, Harriers have a short, dense coat that is usually tricolor (black, white, and tan). They are energetic, outgoing, and good with children, making them excellent hunting companions and family pets. Harriers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in England, Harriers were bred for hunting hares and foxes in packs. They are one of the oldest English hound breeds and are known for their stamina, scenting ability, and friendly disposition. Harriers gained popularity for their hunting prowess and affectionate temperament.',
  },
  {
    breed: 'hound',
    description:
      'Hounds are a diverse group of breeds known for their hunting abilities, keen sense of smell, and athleticism. They include scent hounds, such as Beagles and Bloodhounds, and sight hounds, such as Greyhounds and Salukis. Hounds vary in size, coat type, and temperament but are generally energetic, independent, and good with children. They excel in various hunting roles and require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Hounds have existed for thousands of years and were originally bred for tracking and chasing game. They play a significant role in hunting traditions worldwide and are valued for their keen senses and athletic abilities. Hounds have diverse origins and characteristics, reflecting their specialized roles in hunting different types of game.',
  },
  {
    breed: 'husky',
    description:
      'The Siberian Husky is a medium-sized breed known for its endurance, intelligence, and striking appearance. Standing about 20 to 23.5 inches tall and weighing between 35 to 60 pounds, Siberian Huskies have a dense, double coat that is usually black, gray, or red with distinctive facial markings. They are energetic, friendly, and good with children, making them excellent family pets and sled dogs. Siberian Huskies require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Siberia, Siberian Huskies were bred by the Chukchi people for sled-pulling and transportation in harsh Arctic conditions. They are one of the oldest Arctic sled dog breeds and gained international fame during the Alaskan Gold Rush. Siberian Huskies are known for their endurance, independence, and friendly disposition.',
  },
  {
    breed: 'ibizan',
    description:
      'The Ibizan Hound, also known as the Podenco Ibicenco, is a medium-sized breed known for its elegance, agility, and independent nature. Standing about 22.5 to 27.5 inches tall and weighing between 45 to 65 pounds, Ibizan Hounds have a short, smooth coat that is usually white, red, or tan. They are athletic, intelligent, and good with children, making them excellent hunting companions and family pets. Ibizan Hounds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in the Mediterranean region, Ibizan Hounds were bred by the ancient Phoenicians for hunting rabbits and small game on the island of Ibiza. They are one of several Podenco breeds native to the Balearic Islands and are known for their agility, endurance, and keen senses.',
  },
  {
    breed: 'irish',
    description:
      'The Irish Setter, also known simply as the Setter, is a medium to large-sized breed known for its friendly demeanor, intelligence, and elegant appearance. Standing about 25 to 27 inches tall and weighing between 60 to 70 pounds, Irish Setters have a long, silky coat that is usually mahogany or chestnut in color. They are energetic, outgoing, and good with children, making them excellent family pets and hunting companions. Irish Setters require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Ireland, Irish Setters were bred as versatile hunting dogs for locating and retrieving game birds. They gained popularity in the 18th century for their striking appearance and friendly temperament. Irish Setters are known for their intelligence, athleticism, and affectionate nature.',
  },
  {
    breed: 'italiangreyhound',
    description:
      'The Italian Greyhound is a small breed known for its grace, affectionate nature, and sleek appearance. Standing about 13 to 15 inches tall and weighing between 7 to 14 pounds, Italian Greyhounds have a short, smooth coat that can be various colors, including blue, fawn, red, and black. They are sensitive, playful, and good with children, making them excellent family pets. Italian Greyhounds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in ancient Egypt and later refined in Italy, Italian Greyhounds were favored companions of nobility and artists during the Renaissance era. They gained popularity across Europe for their elegant appearance and affectionate temperament. Italian Greyhounds are known for their agility, speed, and devotion to their families.',
  },
  {
    breed: 'japanese',
    description:
      'The Shiba Inu is a small to medium-sized breed known for its spirited personality, fox-like appearance, and loyal nature. Standing about 13.5 to 16.5 inches tall and weighing between 17 to 23 pounds, Shiba Inus have a dense, double coat that is usually red, sesame, black and tan, or cream. They are alert, independent, and good with children, making them excellent family pets. Shiba Inus require early socialization and consistent training due to their strong-willed nature.',
    history:
      "Originating in Japan, Shiba Inus are one of the country's oldest and smallest native breeds. They were bred for hunting small game in mountainous regions and gained popularity as companion dogs in urban areas. Shiba Inus are known for their spirited personality, intelligence, and loyalty to their families.",
  },
  {
    breed: 'keeshond',
    description:
      "The Keeshond, also known as the Dutch Barge Dog, is a medium-sized breed known for its friendly demeanor, intelligence, and distinctive markings. Standing about 17 to 18 inches tall and weighing between 35 to 45 pounds, Keeshonds have a dense, double coat that is typically gray, black, and cream with a 'spectacles' marking around their eyes. They are alert, affectionate, and good with children, making them excellent family pets and watchdogs. Keeshonds require regular exercise and mental stimulation to stay happy and healthy.",
    history:
      'Originating in the Netherlands, Keeshonds were bred as companions and watchdogs on Dutch river barges and farms. They became popular symbols of Dutch patriotism during political unrest in the late 18th century. Keeshonds are known for their agility, intelligence, and loyalty to their families.',
  },
  {
    breed: 'kelpie',
    description:
      'The Australian Kelpie, commonly known as the Kelpie, is a medium-sized breed known for its intelligence, agility, and herding abilities. Standing about 17 to 20 inches tall and weighing between 25 to 45 pounds, Australian Kelpies have a short, weather-resistant coat that can be black, chocolate, red, or tan. They are energetic, loyal, and good with children, making them excellent working dogs and family pets. Australian Kelpies require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Australia, Australian Kelpies were bred by Scottish settlers for herding livestock, particularly sheep, in harsh and remote environments. They are descended from Collies and Dingoes and are known for their intelligence, stamina, and strong work ethic. Australian Kelpies gained international recognition for their herding abilities and versatility.',
  },
  {
    breed: 'komondor',
    description:
      'The Komondor, also known as the Hungarian Sheepdog, is a large and distinctive breed known for its unique corded coat and protective nature. Standing about 25.5 to 31.5 inches tall and weighing between 80 to 100 pounds, Komondors have a dense, corded coat that forms naturally as they mature. Their coat color can range from white to cream. They are calm, loyal, and protective, making them excellent guard dogs and family companions. Komondors require regular grooming and socialization from an early age.',
    history:
      'Originating in Hungary, Komondors were bred by nomadic Hungarian shepherds for protecting livestock, particularly sheep, from predators such as wolves and bears. They are one of the oldest and largest Hungarian dog breeds and are known for their strength, independence, and distinctive coat. Komondors gained international recognition for their guarding abilities and unique appearance.',
  },
  {
    breed: 'kuvasz',
    description:
      'The Kuvasz is a large and majestic breed known for its protective nature, loyalty, and white coat. Standing about 26 to 30 inches tall and weighing between 70 to 115 pounds, Kuvaszs have a dense, double coat that is usually white. They are dignified, intelligent, and devoted to their families, making them excellent guard dogs and companions. Kuvaszs require early socialization and consistent training due to their strong protective instincts.',
    history:
      'Originating in Hungary, Kuvaszs were bred by Hungarian nobility for guarding livestock and estates. They are one of the oldest Hungarian dog breeds and were highly valued for their loyalty and bravery. Kuvaszs gained international recognition for their protective instincts and noble appearance.',
  },
  {
    breed: 'labrador',
    description:
      'The Labrador Retriever, often simply referred to as the Labrador, is a large-sized breed known for its friendly demeanor, intelligence, and versatility. Standing about 21.5 to 24.5 inches tall and weighing between 55 to 80 pounds, Labradors have a short, dense coat that is usually black, yellow, or chocolate in color. They are outgoing, obedient, and good with children, making them excellent family pets, service dogs, and hunting companions. Labradors require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Newfoundland (not Labrador), Labradors were bred by fishermen for retrieving nets and fish from icy waters. They gained popularity in England during the 19th century as sporting and hunting dogs. Labradors are known for their intelligence, trainability, and gentle temperament.',
  },
  {
    breed: 'leonberg',
    description:
      'The Leonberger is a giant breed known for its gentle demeanor, strength, and lion-like appearance. Standing about 25.5 to 31.5 inches tall and weighing between 90 to 170 pounds, Leonbergers have a water-resistant, double coat that is usually lion-yellow, red, or sandy in color. They are affectionate, loyal, and good with children, making them excellent family pets and therapy dogs. Leonbergers require early socialization and consistent training due to their large size.',
    history:
      'Originating in Germany, Leonbergers were bred by Heinrich Essig to resemble the lion in the town crest of Leonberg. They were favored by European nobility as working dogs and companions. Leonbergers are known for their strength, intelligence, and gentle temperament.',
  },
  {
    breed: 'lhasa',
    description:
      'The Lhasa Apso is a small breed known for its long, flowing coat, alert nature, and devotion to its family. Standing about 10 to 11 inches tall and weighing between 12 to 18 pounds, Lhasa Apsos have a dense, double coat that comes in various colors, including gold, cream, and slate. They are confident, spirited, and good with children, making them excellent family pets and watchdogs. Lhasa Apsos require regular grooming to keep their coat in good condition.',
    history:
      'Originating in Tibet, Lhasa Apsos were bred by Tibetan monks as sentinel dogs in monasteries and homes. They were considered sacred and were given as gifts to visiting dignitaries. Lhasa Apsos gained popularity in the West during the early 20th century for their distinctive appearance and loyal nature.',
  },
  {
    breed: 'malinois',
    description:
      'The Belgian Malinois is a medium to large-sized breed known for its intelligence, agility, and work ethic. Standing about 22 to 26 inches tall and weighing between 40 to 80 pounds, Belgian Malinois have a short, straight coat that is usually fawn to mahogany in color with black markings. They are alert, driven, and good with children, making them excellent working dogs and family pets. Belgian Malinois require early socialization and consistent training due to their high energy levels.',
    history:
      'Originating in Belgium, Belgian Malinois were bred by shepherds for herding and guarding livestock. They gained international recognition for their intelligence and versatility in police work, military service, search and rescue, and detection work. Belgian Malinois are known for their loyalty and dedication to their families.',
  },
  {
    breed: 'maltese',
    description:
      'The Maltese is a small breed known for its long, flowing coat, elegant appearance, and affectionate nature. Standing about 7 to 9 inches tall and weighing between 4 to 7 pounds, Maltese have a silky, hypoallergenic coat that is usually white. They are lively, playful, and good with children, making them excellent family pets and companions. Maltese require regular grooming to keep their coat in good condition.',
    history:
      'Originating in the Mediterranean region, Maltese were favored companions of noblewomen and artists during the Renaissance era. They gained popularity across Europe for their elegant appearance and loving nature. Maltese are known for their intelligence, agility, and devotion to their families.',
  },
  {
    breed: 'mastiff',
    description:
      'The Mastiff is a giant breed known for its size, strength, and gentle demeanor. Standing about 27.5 to 32 inches tall and weighing between 120 to 230 pounds, Mastiffs have a short coat that can be various colors, including fawn, apricot, and brindle. They are calm, courageous, and good with children, making them excellent family pets and guard dogs. Mastiffs require early socialization and consistent training due to their large size.',
    history:
      'Originating in ancient Mesopotamia, Mastiffs were prized by civilizations such as the Assyrians, Babylonians, and Phoenicians for their guarding abilities. They later spread across Europe and were favored by British nobility for protecting estates and livestock. Mastiffs are known for their loyalty, intelligence, and gentle temperament.',
  },
  {
    breed: 'mexicanhairless',
    description:
      'The Xoloitzcuintli, also known as the Mexican Hairless Dog or Xolo, is a medium-sized breed known for its unique appearance, intelligence, and ancient lineage. Standing about 18 to 23 inches tall and weighing between 10 to 50 pounds, Xoloitzcuintlis can be hairless or coated varieties in various colors. They are loyal, alert, and good with children, making them excellent family pets and guardians. Xoloitzcuintlis require regular grooming and skin care to maintain their coat and health.',
    history:
      'Originating in Mexico, Xoloitzcuintlis are one of the oldest and rarest dog breeds in the world. They were revered by ancient Aztecs and Mayans as guardians, healers, and companions. Xoloitzcuintlis gained international recognition for their distinctive appearance and loyal nature.',
  },
  {
    breed: 'newfoundland',
    description:
      "The Newfoundland, often referred to as a 'Newfie', is a giant breed known for its size, strength, and sweet temperament. Standing about 26 to 28 inches tall and weighing between 100 to 150 pounds, Newfoundlands have a dense, water-resistant double coat that is usually black, brown, gray, or Landseer (white with black markings). They are gentle, patient, and good with children, making them excellent family pets, therapy dogs, and water rescue dogs. Newfoundlands require regular exercise and mental stimulation despite their laid-back demeanor.",
    history:
      'Originating in Newfoundland (Canada), Newfoundlands were bred by fishermen for water rescue and hauling nets in icy waters. They gained popularity in Europe during the 18th century for their strength and swimming abilities. Newfoundlands are known for their loyalty, intelligence, and gentle nature.',
  },
  {
    breed: 'norfolk',
    description:
      'The Norfolk Terrier is a small breed known for its affectionate nature, compact size, and wiry coat. Standing about 9 to 10 inches tall and weighing between 11 to 12 pounds, Norfolk Terriers have a dense, weather-resistant coat that can be various shades of red, wheaten, black and tan, or grizzle. They are fearless, loyal, and good with children, making them excellent family pets and companions. Norfolk Terriers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in England, Norfolk Terriers were bred for hunting vermin, such as rats and foxes, on farms and in stables. They are closely related to Norwich Terriers and were favored by students at Cambridge University in the late 19th century. Norfolk Terriers are known for their spirited personality, intelligence, and devotion to their families.',
  },
  {
    breed: 'norwegianelkhound',
    description:
      'The Norwegian Elkhound is a medium-sized breed known for its endurance, agility, and wolf-like appearance. Standing about 19.5 to 20.5 inches tall and weighing between 48 to 55 pounds, Norwegian Elkhounds have a thick, weather-resistant double coat that is usually gray with black tips. They are energetic, loyal, and good with children, making them excellent hunting companions and family pets. Norwegian Elkhounds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      "Originating in Norway, Norwegian Elkhounds were bred by Vikings for hunting moose, bear, and other large game in harsh Scandinavian climates. They are one of Norway's oldest dog breeds and were highly valued for their hunting prowess and versatility. Norwegian Elkhounds are known for their independence, intelligence, and strong sense of loyalty.",
  },
  {
    breed: 'norwichterrier',
    description:
      'The Norwich Terrier is a small breed known for its bold personality, compact size, and prick ears. Standing about 9 to 10 inches tall and weighing between 10 to 12 pounds, Norwich Terriers have a wiry coat that can be various shades of red, wheaten, black and tan, or grizzle. They are fearless, intelligent, and good with children, making them excellent family pets and companions. Norwich Terriers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in England, Norwich Terriers were bred for hunting vermin, such as rats and foxes, on farms and in stables. They are closely related to Norfolk Terriers and were favored by students at Cambridge University in the late 19th century. Norwich Terriers are known for their spirited personality, intelligence, and devotion to their families.',
  },
  {
    breed: 'papillon',
    description:
      'The Papillon, also known as the Continental Toy Spaniel, is a small breed known for its butterfly-like ears, elegant appearance, and lively personality. Standing about 8 to 11 inches tall and weighing between 5 to 10 pounds, Papillons have a long, flowing coat that can be various colors and markings. They are alert, friendly, and good with children, making them excellent family pets and companions. Papillons require regular grooming to keep their coat in good condition.',
    history:
      "Originating in Europe (likely France or Belgium), Papillons gained popularity as companions of European royalty and nobility during the Renaissance era. They are named for their butterfly-like ears ('papillon' means 'butterfly' in French). Papillons are known for their intelligence, agility, and affectionate nature.",
  },
  {
    breed: 'pekingese',
    description:
      'The Pekingese is a small breed known for its regal appearance, affectionate nature, and distinctive flat face. Standing about 6 to 9 inches tall and weighing between 7 to 14 pounds, Pekingese have a long, flowing coat that comes in various colors, including gold, red, black, and white. They are loyal, independent, and good with children, making them excellent family pets and companions. Pekingese require regular grooming to keep their coat in good condition.',
    history:
      'Originating in China, Pekingese were favored companions of Chinese imperial dynasties for over 2,000 years. They were highly valued and kept as palace pets, often regarded as symbols of good luck and fortune. Pekingese gained international popularity in the 19th century for their distinctive appearance and royal connections.',
  },
  {
    breed: 'pinscher',
    description:
      "The Miniature Pinscher, also known as the 'Min Pin', is a small breed known for its fearless personality, compact size, and sleek coat. Standing about 10 to 12.5 inches tall and weighing between 8 to 12 pounds, Miniature Pinschers have a short, smooth coat that can be various colors, including red, black and rust, or chocolate and rust. They are energetic, alert, and good with children, making them excellent family pets and watchdogs. Miniature Pinschers require regular exercise and mental stimulation to stay happy and healthy.",
    history:
      'Originating in Germany, Miniature Pinschers were bred for ratting and guarding homes and stables. Despite their resemblance to the larger Doberman Pinscher, they are a distinct breed with a history dating back several centuries. Miniature Pinschers are known for their agility, intelligence, and spirited temperament.',
  },
  {
    breed: 'pitbull',
    description:
      'The American Pit Bull Terrier, often simply referred to as the Pit Bull, is a medium-sized breed known for its strength, agility, and friendly nature. Standing about 17 to 21 inches tall and weighing between 30 to 60 pounds, Pit Bulls have a short, smooth coat that can be various colors, including brindle, fawn, black, and blue. They are confident, loyal, and good with children, making them excellent family pets, working dogs, and companions. Pit Bulls require early socialization and consistent training due to their strong build and energetic nature.',
    history:
      'Originating in the United Kingdom, Pit Bulls were bred from Bulldogs and Terriers for bull-baiting, a popular sport in the 18th and 19th centuries. They gained popularity in America for their versatility as farm dogs, hunters, and family companions. Pit Bulls are known for their strength, intelligence, and loyalty to their families.',
  },
  {
    breed: 'pointer',
    description:
      'The Pointer, also known as the English Pointer, is a medium to large-sized breed known for its athleticism, hunting abilities, and friendly demeanor. Standing about 23 to 28 inches tall and weighing between 44 to 75 pounds, Pointers have a short, smooth coat that can be various colors, including liver, lemon, black, and orange. They are energetic, intelligent, and good with children, making them excellent hunting companions and family pets. Pointers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in England, Pointers were bred for pointing and retrieving game birds, such as quail and pheasant, for hunters on foot. They gained popularity for their keen sense of smell, endurance, and agility in various terrains. Pointers are known for their friendly temperament and are valued as versatile hunting and companion dogs.',
  },
  {
    breed: 'pomeranian',
    description:
      'The Pomeranian is a small breed known for its fluffy coat, vibrant personality, and fox-like appearance. Standing about 6 to 7 inches tall and weighing between 3 to 7 pounds, Pomeranians have a double coat that can be various colors and patterns, including orange, black, white, and sable. They are lively, intelligent, and good with children, making them excellent family pets and companions. Pomeranians require regular grooming to keep their coat in good condition.',
    history:
      'Originating in the Pomerania region (now part of Poland and Germany), Pomeranians were favored by European royalty, including Queen Victoria of England. They gained popularity during the 19th century for their small size, charming demeanor, and luxurious coat. Pomeranians are known for their intelligence, agility, and outgoing personality.',
  },
  {
    breed: 'poodle',
    description:
      'The Poodle is a highly intelligent and trainable breed known for its curly coat and elegant appearance. There are three sizes of Poodles: Standard (over 15 inches tall), Miniature (10-15 inches tall), and Toy (under 10 inches tall). They come in a variety of solid colors, including white, black, apricot, and blue. Poodles are active, alert, and excel in obedience training, making them versatile companions for various roles, from family pets to working dogs.',
    history:
      'Originating in Germany, the Poodle was originally bred as a water retriever. The distinctive grooming style evolved from functional purposes to enhance their swimming ability while protecting vital organs and joints in cold water. Over time, Poodles became popular across Europe, particularly in France, where they gained recognition as a stylish companion of French aristocracy and artists.',
  },
  {
    breed: 'pug',
    description:
      'The Pug is a small breed known for its wrinkled face, charming personality, and compact size. Standing about 10 to 13 inches tall and weighing between 14 to 18 pounds, Pugs have a short, smooth coat that is usually fawn or black in color. They are affectionate, playful, and good with children, making them excellent family pets and companions. Pugs require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in ancient China, Pugs were favored companions of Chinese emperors and were highly valued as lap dogs and companions for nobility. They gained popularity in Europe during the 16th century when Dutch traders brought them back from China. Pugs are known for their charming personality, loyalty, and distinctive appearance.',
  },
  {
    breed: 'pyrenees',
    description:
      'The Great Pyrenees, also known as the Pyrenean Mountain Dog, is a giant breed known for its majestic appearance, calm demeanor, and protective nature. Standing about 25 to 32 inches tall and weighing between 85 to 160 pounds, Great Pyrenees have a thick, weather-resistant double coat that is usually white or white with markings of gray, tan, or reddish-brown. They are gentle, loyal, and good with children, making them excellent family pets and guardians. Great Pyrenees require early socialization and consistent training due to their large size and protective instincts.',
    history:
      'Originating in the Pyrenees Mountains between France and Spain, Great Pyrenees were bred by Basque shepherds for protecting livestock, particularly sheep, from predators such as wolves and bears. They are one of the oldest French dog breeds and were favored by French nobility as working dogs and companions. Great Pyrenees gained international recognition for their strength, intelligence, and gentle temperament.',
  },
  {
    breed: 'redbone',
    description:
      'The Redbone Coonhound is a medium to large-sized breed known for its hunting prowess, friendly demeanor, and striking red coat. Standing about 21 to 27 inches tall and weighing between 45 to 70 pounds, Redbone Coonhounds have a short, sleek coat that is uniformly red. They are intelligent, outgoing, and good with children, making them excellent hunting companions and family pets. Redbone Coonhounds require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in the United States, Redbone Coonhounds were bred by American settlers for hunting raccoons and other game in the southern wilderness. They are descended from bloodlines that include Foxhounds and various European hunting dogs. Redbone Coonhounds are known for their endurance, determination, and friendly disposition.',
  },
  {
    breed: 'retriever',
    description:
      'The Golden Retriever is a large-sized breed known for its friendly demeanor, intelligence, and versatility. Standing about 21.5 to 24 inches tall and weighing between 55 to 75 pounds, Golden Retrievers have a dense, water-repellent coat that is usually golden in color. They are outgoing, devoted, and good with children, making them excellent family pets, service dogs, and hunting companions. Golden Retrievers require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Scotland, Golden Retrievers were bred by Lord Tweedmouth at his estate in the Scottish Highlands. They were developed as hunting dogs with a gentle mouth for retrieving waterfowl on land and water. Golden Retrievers gained popularity in England and America during the 20th century for their friendly temperament and versatility.',
  },
  {
    breed: 'ridgeback',
    description:
      "The Rhodesian Ridgeback is a large-sized breed known for its distinctive 'ridge' of backward-growing hair along its back, athleticism, and loyalty. Standing about 24 to 27 inches tall and weighing between 70 to 85 pounds, Rhodesian Ridgebacks have a short, sleek coat that can be various shades of wheaten. They are intelligent, independent, and good with children, making them excellent hunting and guard dogs as well as family companions. Rhodesian Ridgebacks require early socialization and consistent training due to their strong-willed nature.",
    history:
      'Originating in southern Africa (Rhodesia, now Zimbabwe), Rhodesian Ridgebacks were bred by the indigenous Khoikhoi and European settlers for hunting large game, such as lions and leopards. They are named for the distinctive ridge of hair along their back. Rhodesian Ridgebacks gained international recognition for their courage, loyalty, and versatility.',
  },
  {
    breed: 'rottweiler',
    description:
      'The Rottweiler is a large-sized breed known for its strength, loyalty, and distinctive black and tan markings. Standing about 22 to 27 inches tall and weighing between 80 to 135 pounds, Rottweilers have a short, dense coat that is black with rust or mahogany markings. They are confident, courageous, and good with children, making them excellent family pets, guard dogs, and working dogs. Rottweilers require early socialization and consistent training due to their protective instincts.',
    history:
      'Originating in Germany, Rottweilers were bred by Roman armies for herding and guarding livestock, as well as pulling carts laden with supplies. They gained popularity in Rottweil, a town in southern Germany, as versatile working dogs. Rottweilers are known for their strength, intelligence, and loyalty to their families.',
  },
  {
    breed: 'schnauzer',
    description:
      'The Schnauzer is a medium-sized breed known for its distinctive beard, eyebrows, and spirited personality. There are three sizes of Schnauzers: Giant (over 23.5 inches tall), Standard (17.5-23.5 inches tall), and Miniature (12-14.5 inches tall). They have a wiry coat that can be salt and pepper, black, or black and silver. Schnauzers are intelligent, alert, and good with children, making them excellent family pets and watchdogs.',
    history:
      'Originating in Germany, Schnauzers were bred for guarding and ratting on farms. They were popular among farmers and tradesmen for their versatility and loyalty. Schnauzers gained recognition as skilled watchdogs and companions with their distinct appearance and spirited temperament.',
  },
  {
    breed: 'setter',
    description:
      'The Setter is a medium to large-sized breed known for its elegant appearance, hunting abilities, and friendly demeanor. There are several types of Setters, including the Irish Setter, English Setter, and Gordon Setter. They have a long, silky coat that can be various colors, including red, chestnut, black and tan, or blue and tan. Setters are intelligent, energetic, and good with children, making them excellent hunting companions and family pets.',
    history:
      'Originating in the British Isles (Ireland, England, and Scotland), Setters were bred for locating and pointing at game birds for hunters. They gained popularity for their agility, endurance, and friendly temperament in both field and home settings. Setters are known for their grace, intelligence, and loyalty to their families.',
  },
  {
    breed: 'sheepdog',
    description:
      'The Old English Sheepdog, often simply called the Sheepdog or Bobtail, is a large-sized breed known for its shaggy coat, playful nature, and gentle temperament. Standing about 21 inches tall for females and 22 inches for males, Old English Sheepdogs weigh between 60 to 100 pounds. They have a thick, waterproof double coat that is usually gray, blue, or blue merle with white markings. They are intelligent, affectionate, and good with children, making them excellent family pets and watchdogs.',
    history:
      'Originating in England, Old English Sheepdogs were originally bred for herding livestock, especially sheep, in rural areas. They became popular during the 19th century in England and America as companion dogs for families and shepherds. Old English Sheepdogs are known for their playful nature, intelligence, and devotion to their families.',
  },
  {
    breed: 'shiba',
    description:
      'The Shiba Inu is a small to medium-sized breed known for its spirited personality, fox-like appearance, and loyalty. Standing about 13.5 to 16.5 inches tall and weighing between 17 to 23 pounds, Shiba Inus have a double coat that is typically red, sesame, black and tan, or cream. They are alert, independent, and good with older children, making them loyal companions and watchdogs. Shiba Inus require early socialization and consistent training to manage their strong-willed nature.',
    history:
      "Originating in Japan, Shiba Inus were bred for hunting small game in mountainous regions. They are one of Japan's oldest dog breeds and were highly valued for their agility, keen senses, and loyalty. Shiba Inus gained international popularity for their spirited personality and distinctive appearance.",
  },
  {
    breed: 'shih tzu',
    description:
      'The Shih Tzu is a small breed known for its luxurious coat, friendly demeanor, and imperial appearance. Standing about 9 to 10.5 inches tall and weighing between 9 to 16 pounds, Shih Tzus have a long, flowing double coat that comes in various colors, including gold, black, white, and liver. They are affectionate, outgoing, and good with children, making them excellent family pets and companions. Shih Tzus require regular grooming to keep their coat in good condition.',
    history:
      'Originating in Tibet and developed in China, Shih Tzus were favored companions of Chinese emperors and nobility for over 1,000 years. They were highly valued for their companionship, charm, and distinctive appearance. Shih Tzus gained popularity in the West during the 20th century for their affectionate nature and elegant demeanor.',
  },
  {
    breed: 'spaniel',
    description:
      'The Spaniel is a diverse group of breeds known for their friendly nature, hunting abilities, and distinctive drooping ears. There are several types of Spaniels, including the Cocker Spaniel, Springer Spaniel, and Cavalier King Charles Spaniel. They vary in size and coat type but generally have a medium-length coat that is silky or wavy, coming in various colors and markings. Spaniels are affectionate, intelligent, and good with children, making them excellent family pets and hunting companions.',
    history:
      'Spaniels have origins in Spain and were developed across Europe for flushing and retrieving game birds. They gained popularity in England during the Renaissance and Victorian eras for their agility, affectionate nature, and versatility in hunting and home settings. Spaniels are known for their loyalty, charm, and devotion to their families.',
  },
  {
    breed: 'springer',
    description:
      'The English Springer Spaniel, often simply called the Springer Spaniel, is a medium-sized breed known for its agility, hunting abilities, and friendly demeanor. Standing about 19 to 20 inches tall and weighing between 40 to 50 pounds, Springer Spaniels have a dense, water-resistant coat that is usually black and white or liver and white. They are intelligent, energetic, and good with children, making them excellent hunting companions and family pets.',
    history:
      'Originating in England, Springer Spaniels were bred for flushing and retrieving game birds, such as pheasants and partridges, for hunters on foot. They gained popularity for their endurance, versatility, and friendly temperament in both field and home settings. Springer Spaniels are known for their intelligence, loyalty, and enthusiasm for outdoor activities.',
  },
  {
    breed: 'stbernard',
    description:
      'The Saint Bernard is a giant breed known for its massive size, gentle demeanor, and rescue abilities. Standing about 25.5 to 27.5 inches tall for females and 27.5 to 31.5 inches for males, Saint Bernards weigh between 120 to 180 pounds. They have a dense, water-resistant double coat that is usually red and white, mahogany and white, or brindle and white. They are patient, loyal, and good with children, making them excellent family pets and rescue dogs.',
    history:
      'Originating in the Swiss Alps, Saint Bernards were bred by monks at the Saint Bernard Hospice for rescuing travelers trapped in snow and avalanches. They are one of the oldest Swiss dog breeds and gained international recognition for their courage, strength, and gentle nature. Saint Bernards are known for their loyalty to their families and their impressive rescue instincts.',
  },
  {
    breed: 'terrier',
    description:
      'The Terrier is a diverse group of breeds known for their energetic nature, intelligence, and determination. There are several types of Terriers, including the Jack Russell Terrier, Bull Terrier, and Scottish Terrier. They vary in size and coat type but generally have a wiry or smooth coat that can be various colors and patterns. Terriers are spirited, loyal, and good with children, making them excellent family pets and watchdogs.',
    history:
      'Terriers have origins in the British Isles and were developed for hunting vermin, such as rats and foxes, in homes, farms, and stables. They gained popularity for their tenacity, agility, and intelligence in pest control and as loyal companions. Terriers are known for their spirited personality and devotion to their families.',
  },
  {
    breed: 'vizsla',
    description:
      'The Vizsla is a medium-sized breed known for its athleticism, hunting abilities, and affectionate nature. Standing about 21 to 24 inches tall and weighing between 45 to 65 pounds, Vizslas have a short, smooth coat that is golden rust in color. They are energetic, intelligent, and good with children, making them excellent hunting companions and family pets. Vizslas require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      "Originating in Hungary, Vizslas were bred for pointing and retrieving game birds for Hungarian nobility and warlords. They are one of Hungary's oldest dog breeds and were highly valued for their keen senses, agility, and loyalty. Vizslas gained international recognition for their versatile hunting abilities and friendly temperament.",
  },
  {
    breed: 'weimaraner',
    description:
      'The Weimaraner is a large-sized breed known for its sleek, silver-gray coat, hunting abilities, and loyalty. Standing about 23 to 27 inches tall and weighing between 55 to 90 pounds, Weimaraners have a short, smooth coat that is silver-gray in color. They are energetic, intelligent, and good with children, making them excellent hunting companions and family pets. Weimaraners require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in Germany, Weimaraners were bred by nobility for hunting large game, such as deer, boar, and bear. They gained popularity as versatile hunting dogs with their speed, endurance, and keen sense of smell. Weimaraners are known for their loyalty to their families and their distinctive silver-gray coat.',
  },
  {
    breed: 'whippet',
    description:
      'The Whippet is a medium-sized breed known for its sleek build, speed, and gentle nature. Standing about 18 to 22 inches tall and weighing between 25 to 40 pounds, Whippets have a short, smooth coat that can be various colors and patterns. They are intelligent, affectionate, and good with children, making them excellent companions and sprinting athletes. Whippets require regular exercise and mental stimulation to stay happy and healthy.',
    history:
      'Originating in England, Whippets were bred by working-class hunters and farmers for coursing small game, such as rabbits, at high speeds. They gained popularity for their agility, speed, and friendly temperament in both hunting and home settings. Whippets are known for their gentle nature and love of sprinting.',
  },
  {
    breed: 'wolfhound',
    description:
      'The Irish Wolfhound is a giant breed known for its towering height, gentle nature, and historical significance. Standing about 32 to 34 inches tall for females and 34 to 35 inches for males, Irish Wolfhounds weigh between 105 to 120 pounds. They have a rough, wiry coat that is usually gray, brindle, red, black, white, or fawn. They are calm, loyal, and good with children, making them excellent family pets and companions.',
    history:
      'Originating in Ireland, Irish Wolfhounds were bred by ancient Celtic tribes for hunting wolves, elk, and Irish elk. They are one of the tallest dog breeds and gained recognition as war hounds and symbols of nobility and strength. Irish Wolfhounds are known for their gentle demeanor and historical significance in Irish culture.',
  },
  {
    breed: 'yorkie',
    description:
      'The Yorkshire Terrier, often called the Yorkie, is a small breed known for its long, silky coat, confident demeanor, and portable size. Standing about 7 to 8 inches tall and weighing between 4 to 7 pounds, Yorkies have a fine, glossy coat that is blue and tan in color. They are affectionate, brave, and good with older children, making them excellent companions and lap dogs. Yorkies require regular grooming to maintain their coat in good condition.',
    history:
      'Originating in England, Yorkshire Terriers were bred by working-class weavers and miners in Yorkshire. They were highly valued for their ability to catch rats in textile mills and mines. Yorkies gained popularity as fashionable companions in Victorian England and became beloved pets around the world for their intelligence and charming personality.',
  },
]

function getBreedDescription(breedName) {
  const breed = dogBreeds.find(
    (b) => b.breed.toLowerCase() === breedName.toLowerCase()
  )
  if (breed) {
    const details = [breed.description, breed.history]
    return details
  } else {
    return `Breed "${breedName}" not found.`
  }
}
const breedToDescribe = dog // Replace with any breed to get its description

updateContent()
}

test();
// grabWiki(dog)
const refreshButton = document.querySelector('.refresh-img');
refreshButton.addEventListener('click', () => {
  const allPrevDogs = document.querySelectorAll('.dog-profile');
  for(let i = 0; i < allPrevDogs.length; i++) {
    allPrevDogs[i].remove();
  }
  test();
})

document.body.style.overflow = 'hidden';
