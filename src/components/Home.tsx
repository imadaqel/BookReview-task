import React, {useState, useEffect, lazy, Suspense} from 'react';
import BrowseTheCategories from "./BrowseTheCategories";

import Navigation from './Header/Navigation';

const LazyNonfictionCat = lazy(() => import('./CategoryList/CategoryList'));
const LazyFictionCat = lazy(() => import('./CategoryList/CategoryList'));
const LazyChildrenCat = lazy(() => import('./CategoryList/CategoryList'));
const LazySelfImprovementCat = lazy(() => import('./CategoryList/CategoryList'));
const LazyFooter = lazy(() => import('./Footer'));

export default function Home() {
    const [Categories, setCategories] = useState([]);
    const [childrenCat, setChildrenCat] = useState([]);
    const [fictionCat, setFictionCat] = useState([]);
    const [nonfictionCat, setNonfictionCat] = useState([]);
    const [self_improvementCat, setSelf_improvement] = useState([]);
    const getCategories = () => {
        fetch("./data/categories.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((jsonCategories) => {
                console.log(jsonCategories.categories);
                setCategories(jsonCategories.categories.slice(0, 8))
            });
    }
    const getBooks = (argu: any, set: any) => {
        fetch(`./data/categories/${argu}.json`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((jsonBooks) => {
                console.log(jsonBooks.books);
                set(jsonBooks.books)
            });
    }
    useEffect(() => {
        getCategories();
        getBooks('children', setChildrenCat);
        getBooks('fiction', setFictionCat);
        getBooks('nonfiction', setNonfictionCat);
        getBooks('self_improvement', setSelf_improvement);
    }, []);

    return (
        <div className={"main-content"}>
            <Navigation/>
            <BrowseTheCategories Categories={Categories}/>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <LazyNonfictionCat items={nonfictionCat} title={'Nonfiction'} titleColor={'black'} bgColor={"#f6f6f6"} pColor={"#909090"}/>
                <LazyFictionCat items={fictionCat}  title={'Fiction'}  titleColor={'white'} bgColor={"#1a1a1a"} pColor={"green"}/>
                <LazyChildrenCat items={childrenCat}  title={'Children'} titleColor={'black'} bgColor={"#f6f6f6"} pColor={"#909090"}/>
                <LazySelfImprovementCat items={self_improvementCat} titleColor={'white'} title={'Self Improvement'} bgColor={"#3e3e3e"} pColor={"green"}/>
                <LazyFooter/>
            </Suspense>
        </div>
    )
}
