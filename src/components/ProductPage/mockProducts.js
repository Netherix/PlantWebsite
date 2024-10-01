// Importing images directly at the top of the file
import rubyVoodooRoseImage from '../../assets/Ruby Voodoo Rose.webp';
import test from '../../assets/Grosso Lavender.webp'

// Import more images as needed

const mockProducts = [
  {
    id: '1',
    title: 'Ruby Voodoo Rose',
    price: '$29.99',
    description: 'The Ruby Voodoo Rose is a breathtaking flower that captivates with its deep crimson petals and intoxicating fragrance. Known for its striking beauty and vibrant color, this rose adds a touch of elegance and sophistication to any space. Ideal for special occasions or as a statement piece in your garden, the Ruby Voodoo Rose features a velvety texture and rich, romantic hue that contrasts beautifully against its lush green foliage. It is also known for its resilience and adaptability, thriving in various climates and soil types, making it a favorite among gardeners and flower enthusiasts alike. This rose is not only a visual delight but also a symbol of passion and romance, perfect for expressing deep emotions or simply enhancing your home with its stunning presence.',
    images: [ // Use an array for images
      rubyVoodooRoseImage,
      test
      // You can add more images for this product if needed
    ],
  },
  {
    id: '2',
    title: 'Sunset Lily',
    price: '$19.99',
    description: 'A beautiful lily with vibrant sunset colors, perfect for brightening up any room.',
    images: [ // Use an array for images
      // You can add more images for this product if needed
    ],
  },
  // Add more products as needed
];

export default mockProducts;
