const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = ['public/books', 'public/team'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Function to download image with retries
async function downloadImage(url, filepath, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        
        const request = https.get(url, response => {
          // Handle redirects
          if (response.statusCode === 301 || response.statusCode === 302) {
            file.close();
            fs.unlink(filepath, () => {});
            downloadImage(response.headers.location, filepath)
              .then(resolve)
              .catch(reject);
            return;
          }

          // Handle successful response
          if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
              file.close();
              resolve(filepath);
            });
          } else {
            file.close();
            fs.unlink(filepath, () => {});
            reject(new Error(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
          }
        });

        request.on('error', error => {
          file.close();
          fs.unlink(filepath, () => {});
          reject(error);
        });

        // Set timeout
        request.setTimeout(10000, () => {
          request.destroy();
          reject(new Error('Request timeout'));
        });
      });
      
      return filepath;
    } catch (error) {
      if (attempt === retries) throw error;
      console.log(`Attempt ${attempt} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
}

async function downloadAllImages() {
  console.log('Starting image downloads...');

  // High-quality book images from Unsplash
  const bookImages = [
    'https://images.unsplash.com/photo-1589998059171-988d887df646',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    'https://images.unsplash.com/photo-1474932430478-367dbb6832c1',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73',
    'https://images.unsplash.com/photo-1592496431122-2349e0fbc666',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70'
  ];

  const teamImages = [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  ];

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
      filename: 'hero-library.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
      filename: 'about-hero.jpg'
    }
  ];

  try {
    // Download book images
    console.log('Downloading book images...');
    for (let i = 0; i < bookImages.length; i++) {
      const url = `${bookImages[i]}?auto=format&fit=crop&w=800&h=1200&q=80`;
      const filepath = path.join('public/books', `book-${i + 1}.jpg`);
      try {
        await downloadImage(url, filepath);
        console.log(`Downloaded book-${i + 1}.jpg`);
      } catch (error) {
        console.error(`Error downloading book-${i + 1}.jpg:`, error.message);
      }
    }

    // Download team images
    console.log('\nDownloading team images...');
    const teamMembers = ['sarah', 'michael', 'emily', 'david'];
    for (let i = 0; i < teamImages.length; i++) {
      const url = `${teamImages[i]}?auto=format&fit=crop&w=400&h=400&q=80`;
      const filepath = path.join('public/team', `${teamMembers[i]}.jpg`);
      await downloadImage(url, filepath);
      console.log(`Downloaded ${teamMembers[i]}.jpg`);
    }

    // Download hero images
    console.log('\nDownloading hero images...');
    for (const hero of heroImages) {
      try {
        const url = `${hero.url}?auto=format&fit=crop&w=1920&h=1080&q=80`;
        const filepath = path.join('public', hero.filename);
        await downloadImage(url, filepath);
        console.log(`Downloaded ${hero.filename}`);
      } catch (error) {
        console.error(`Error downloading ${hero.filename}:`, error.message);
      }
    }

    console.log('\nAll images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
    process.exit(1);
  }
}

downloadAllImages(); 