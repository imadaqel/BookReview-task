import React from 'react'
import './CategoryList.css'
import Carousel from 'react-elastic-carousel';
import {Link} from 'react-router-dom';

export default function CategoryList(props:any) {

    interface IbreakPoints {
        width: number;
        itemsToShow: number;
    }
    interface IItem {
        id: number;
        image: string;
        title: string;
        author: string;
        reviewedBy: string;
    }
    const title:string = props.title;
    const bgColor:string = props.bgColor;
    const titleColor:string = props.titleColor;
    const pColor:string = props.pColor;

    const items = props.items;
    const breakPoints: IbreakPoints[] = [
        {width: 200, itemsToShow: 1},
        {width: 430, itemsToShow: 3},
        {width: 800, itemsToShow: 5}
    ]
    return (
        <section className={"section"} style={{backgroundColor: bgColor}}>
            <section className="section-content">
                <h1 style={{color: titleColor}}>{title}</h1>
                <Carousel breakPoints={breakPoints} isRTL={false} pagination={false}>
                    {items && items.length > 0 && items.map((item: IItem) =>
                        <div className="card" key={item.id}>
                            <Link to={`/book/${item.id}`}>
                                <img src={item.image} alt={`can't load ${item.title}`}/>
                                <h4 style={{color: titleColor}} >{item.title}</h4>
                                <p style={{color: pColor}}>BY {item.author}</p>
                                <p style={{color: pColor}}>Reviewed By {item.reviewedBy}</p>
                            </Link>
                        </div>
                    )}
                </Carousel>
            </section>
        </section>
    )
}
