const posts = [
  {
    img: 'https://1.bp.blogspot.com/-Q4Uu-IKOwAE/X03buieqhYI/AAAAAAAAEC0/MscE-sK32BklN7BvIhAutgb7CYEh6yJVwCLcBGAsYHQ/s2048/IMG_2978.jpg',
    description: 'Ліс',
    comments: [
      {
        author: 'Natali Romanova',
        text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
        date: '09 червня, 2020 | 09:20',
      },
      {
        author: 'Roman Natalievich',
        text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
        date: '09 червня, 2020 | 09:20',
      },
      {
        author: 'Natali Romanova',
        text: 'Thank you! That was very helpful!',
        date: '09 червня, 2020 | 09:20',
      },
    ],
    likes: 50,
    locationName: 'Ukraine',
    geoLocation: { latitude: 49.2714836, longitude: 23.8227551 },
  },
   {
    img: 'https://cdn.instinct-voyageur.fr/wp-content/uploads/2022/03/ukrain.jpg',
    description: 'Захід сонця',
    comments: [
      {
        author: 'John Doe',
        text: 'Beautiful sunset! I wish I could be there to see it in person.',
        date: '12 June, 2020 | 18:45',
      },
      {
        author: 'Jane Smith',
        text: 'Amazing colors! What camera settings did you use for this shot?',
        date: '13 June, 2020 | 09:12',
      },
    ],
    likes: 65,
   locationName: 'Ukraine',
    geoLocation: { latitude: 49.2714836, longitude: 23.8227551 },
  },
   {
    img: 'https://www.mycheapitalianhome.com/wp-content/uploads/2023/10/photo-1512034796900-7dc9baad088c-scaled.jpeg',
    description: 'Cтарий будиночок у Венеції',
    comments: [
      {
        author: 'Alex Johnson',
        text: 'This is breathtaking! The colors are absolutely stunning.',
        date: '22 June, 2020 | 20:30',
      },
    ],
    likes: 72,
    locationName: 'Італія',
  geoLocation: { latitude: 41.9028, longitude: 12.4964 },
  },
];

export default posts;