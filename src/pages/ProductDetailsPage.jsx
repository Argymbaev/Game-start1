import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
	const { oneProduct, getOneProduct } = useProductContext();
	const { id } = useParams();

	useEffect(() => {
		getOneProduct(id);
	}, []);

	// if (!oneProduct) {
	// 	return <h1>Loading...</h1>;
	// }
console.log(oneProduct)
	return (
		<>
			{oneProduct ? (
				<Card sx={{ display: "flex" }}>
					<CardMedia
						component="img"
						alt="green iguana"
						sx={{ width: 300 }}
						// height="140"
						image={oneProduct.image}
					/>
					<Box>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{oneProduct.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{oneProduct.description}
							</Typography>
							<Typography variant="h6">${oneProduct.price}</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Box>
				</Card>
			) : (
				<h1>Loading...</h1>
			)}
			

			<iframe style={{position:'relative', right:"90px",marginTop: "50px"}} width="1309" height="577" src={oneProduct?.video} title="Магазин игр на React/Redux [1] - Страница со списком игр" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			
		</>
	);
}

export default ProductDetailsPage;
