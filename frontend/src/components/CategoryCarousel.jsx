import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query))
        navigate("/browse")
    }

    return (
        <section className="bg-white">
            <div className="max-w-5xl mx-auto px-6 pb-12">

                <Carousel className="w-full">
                    <CarouselContent className="-ml-2">
                        {category.map((cat, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4"
                            >
                                <Button
                                    onClick={() => searchJobHandler(cat)}
                                    variant="outline"
                                    className="w-full rounded-full text-sm font-medium hover:border-[#6A38C2] hover:text-[#6A38C2]"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="-left-4" />
                    <CarouselNext className="-right-4" />
                </Carousel>

            </div>
        </section>
    )
}

export default CategoryCarousel
