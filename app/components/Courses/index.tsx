"use client";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

// CAROUSEL DATA
interface DataType {
    heading: string;
    imgSrc: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Full stack modern' + ' ' + 'javascript', 
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 499,
        rating: 2.0,
    },
    {
        heading: 'Design system' + ' ' + 'with React programme',
        imgSrc: '/assets/courses/coursetwo.png',
        students: 130,
        classes: 12,
        price: 420,
        rating: 4.7,
    },
    {
        heading: 'Design banner' + ' ' + 'with Figma',
        imgSrc: '/assets/courses/coursethree.png',
        students: 120,
        classes: 12,
        price: 720,
        rating: 4.0,
    },
    {
        heading: 'We Launch Delia' + ' ' + 'Webflow this Week!',
        imgSrc: '/assets/courses/courseone.png',
        students: 150,
        classes: 12,
        price: 699,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia' + ' ' + 'Webflow this Week!',
        imgSrc: '/assets/courses/coursetwo.png',
        students: 150,
        classes: 12,
        price: 999,
        rating: 4.7,
    },
    {
        heading: 'We Launch Delia' + ' ' + 'Webflow this Week!',
        imgSrc: '/assets/courses/coursethree.png',
        students: 150,
        classes: 12,
        price: 1999,
        rating: 4.7,
    },
];

// CAROUSEL SETTINGS
const MultipleItems: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div id="courses">
            <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>
                <div className="sm:flex justify-between items-center">
                    <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Popular courses.</h3>
                    <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore courses</Link>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => {
                        // Calculate number of filled stars based on the rating value
                        const filledStars = Math.floor(items.rating);
                        const halfStar = items.rating % 1 !== 0;  // Check if there's a half star
                        const emptyStars = 5 - Math.ceil(items.rating);

                        return (
                            <div key={i} >
                                <div className='bg-white hover:bg-[#E5E4E2] hover:cursor-pointer m-3 px-3 pt-3 pb-12 my-20 shadow-md hover:shadow-xl rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="course image" width={200} height={200} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-2">
                                            <h3 className="text-white uppercase text-center text-xs font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <div className="text-center">
                                            <h4 className='text-xl font-bold pt-3 text-black'>{items.heading}</h4>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-sm font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    {/* Render filled stars */}
                                                    {[...Array(filledStars)].map((_, index) => (
                                                        <StarIcon key={`filled-${index}`} className="h-4 w-4 text-gold" />
                                                    ))}

                                                    {/* Render half star if needed */}
                                                    {halfStar && (
                                                        <StarIcon key="half" className="h-4 w-4 text-gold opacity-50" />
                                                    )}

                                                    {/* Render empty stars */}
                                                    {[...Array(emptyStars)].map((_, index) => (
                                                        <StarIcon key={`empty-${index}`} className="h-4 w-4 text-gray-300" />
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold"> ₹{items.price}</h3>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex justify-between">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default MultipleItems;
