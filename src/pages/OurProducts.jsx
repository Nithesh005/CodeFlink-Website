import { Card, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material"
import bannerImage from '../assets/bannerImage1.png'
import step1 from '../assets/step1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import skisho from '../assets/skisho.jpeg'
import Aveira from '../assets/Aveira.jpeg'
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];
function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}
const products = [
    {
        title: "Skisko",
        description: "Social Media Application",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "Jothi Media",
        description: "Product",
        image: "https://via.placeholder.com/300"
    },
    // Add more products as needed
];

export const OurProducts = () => {
    return (
        <>
            <div className="ProductsPage" id="ProductsPage">
                <div className="ProductsPage__title">Our Products</div>
                <div className="ProductsPage__cards">
                    <div className="content-with-card">
                        <ProductCard
                            title="Skisko"
                            description="Social Media Application"
                            image={skisho}
                        />
                        <div className="additional-content p3r">
                            <h2>Discover More About Our Products</h2>
                            <p>Our range of products is designed to meet all your needs, providing both functionality and style. Whether you're looking for something modern or classic, we've got you covered. Browse through our collection and find the perfect item that suits your taste.</p>
                        </div>
                    </div>
                    <div className="content-with-card content-with-card1">
                        <div className="additional-content p3r">
                            <h2>Discover More About Our Products</h2>
                            <p>Our range of products is designed to meet all your needs, providing both functionality and style. Whether you're looking for something modern or classic, we've got you covered. Browse through our collection and find the perfect item that suits your taste.</p>
                        </div>
                        <ProductCard
                            title="Aveira"
                            description="Comericial Marketing SPA"
                            image={Aveira}
                        />
                    </div>
                    {/* {products.map((product, index) => (
                        <div className="content-with-card" key={index}>
                            <ProductCard
                                title={product.title}
                                description={product.description}
                                image={product.image}
                            />
                            <div className="additional-content">
                                <h2>Discover More About Our Products</h2>
                                <p>Our range of products is designed to meet all your needs, providing both functionality and style. Whether you're looking for something modern or classic, we've got you covered. Browse through our collection and find the perfect item that suits your taste.</p>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </>
    )
}


const ProductCard = ({ title, description, image }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-card__image" />
            <div className="product-card__content">
                <h2 className="product-card__title">{title}</h2>
                <p className="product-card__description">{description}</p>
            </div>
        </div>
    );
};


const ImageListCopm = () => {
    return (
        <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}