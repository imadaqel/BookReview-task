import React from 'react'
// import './BrowseTheCategories.css';
import {CategoriesWrapper,SectionContent,CategoriesHeader,SectionContentSpan,CategoriesMain,CategoriesCard,
    CategoriesCardImg,CategoriesCardContent,CategoriesMainTitle,CategoriesCardParg} from './BrowseTheCategoriesStyle'

export default function BrowseTheCategories(props: any) {
    const Categories: IItem[] = props.Categories;
    console.log(props.Categories)
    interface IItem {
        id: number;
        image: string;
        title: string;
        description: string;
    }
    return (
            <CategoriesWrapper>
                <SectionContent>
                    <CategoriesHeader>Browse<SectionContentSpan> Our Most Popular Categories</SectionContentSpan>
                    </CategoriesHeader>
                    <CategoriesMain>
                    {Categories && Categories.length > 0 && Categories.map((item: IItem) =>
                        <CategoriesCard key={item.id}>
                            <CategoriesCardImg
                            // src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYsMzFDMTE1LjM5LDMxLDAsMTQ1LjM5LDAsMjg2djEyMGMwLDI0LjgxNCwyMC4xODYsNDUsNDUsNDVoMTVWMzAxSDQ1Yy01LjI4NCwwLTEwLjI4NSwxLjA4Mi0xNSwyLjc2M1YyODYNCgkJCUMzMCwxNjEuOTI4LDEzMS45MjgsNjEsMjU2LDYxczIyNiwxMDAuOTI4LDIyNiwyMjV2MTcuNzYzYy00LjcxNS0xLjY4MS05LjcxNi0yLjc2My0xNS0yLjc2M2gtMTV2MTUwaDE1DQoJCQljMjQuODE0LDAsNDUtMjAuMTg2LDQ1LTQ1VjI4NkM1MTIsMTQ1LjM5LDM5Ni42MSwzMSwyNTYsMzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xMzUsMjcxaC0xNWMtMTYuNTY5LDAtMzAsMTMuNDMxLTMwLDMwdjE1MGMwLDE2LjU2OSwxMy40MzEsMzAsMzAsMzBoMTVjOC4yODQsMCwxNS02LjcxNiwxNS0xNVYyODYNCgkJCUMxNTAsMjc3LjcxNiwxNDMuMjg0LDI3MSwxMzUsMjcxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzkyLDI3MWgtMTVjLTguMjg0LDAtMTUsNi43MTYtMTUsMTV2MTgwYzAsOC4yODQsNi43MTYsMTUsMTUsMTVoMTVjMTYuNTY5LDAsMzAtMTMuNDMxLDMwLTMwVjMwMQ0KCQkJQzQyMiwyODQuNDMxLDQwOC41NjksMjcxLDM5MiwyNzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                            src={item.image} alt="can't load Categories Card Img "
                            >            
                            </CategoriesCardImg>
                                <CategoriesCardContent>
                    <CategoriesMainTitle>{item.title}</CategoriesMainTitle>
                    <CategoriesCardParg>{item.description}</CategoriesCardParg>
                                </CategoriesCardContent>
                        </CategoriesCard>
                    )}
                </CategoriesMain>
            </SectionContent>
        </CategoriesWrapper>
    )
}
