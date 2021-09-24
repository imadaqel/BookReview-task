import Navigation from '../Header/Navigation';
import Footer from '../Footer/Footer';
import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './BookDetails.css';
import { Helmet } from "react-helmet";

export default function BookDetails(props:any) {
    console.log(props)
    const id:number=props.match.params.id;
    interface IBook {
        author: string;
        description: string;
        id: number;
        image: string;
        publishedOn: string;
        reviewedBy: string;
        title: string;
      }
      const [BookDetails, setBookDetails] = useState<IBook>({author:'',description:'',id:0,image:'',publishedOn:'',reviewedBy:'',title:''});
            const getBookDetails=(id:number)=>{
        fetch(`../data/books/book${id}.json`, {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }})
        .then((response) =>response.json())
        .then((jsonBookDetails) => {
            console.log("jsonBookDetails",jsonBookDetails);
            setBookDetails(jsonBookDetails)
        }); }
        console.log("BookDetails",BookDetails);

      useEffect(() => {
       getBookDetails(id);
        }, [id]);
    return (
        <> 
        <Helmet>
        <title>Books Details</title>
        </Helmet>
        <Navigation/>
        <section className="book-wrapper"> 
         <section className="book-content">
                        <h1>{BookDetails.title}</h1>
                    <Card sx={{ maxWidth: 345 ,objectFit: "fill"}}>
                <CardMedia
                    component="img"
                    height="450"
                    image= {`${BookDetails.image}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {BookDetails.title}
                    </Typography>
                <h5>Author:{BookDetails.author}</h5>
                <h5>reviewedBy:{BookDetails.reviewedBy}</h5>
                <h5>publishedOn:{BookDetails.publishedOn}</h5>
                <h5>description:{BookDetails.description}</h5>
                </CardContent>
                </Card>
             </section>
             </section>
        <Footer/>
        </>
    )
}
