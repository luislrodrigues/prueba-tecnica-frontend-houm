import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function RickCard({ name, status, gender, image }) {
    return (
        <Card
            sx={{
                maxWidth: 200,
                border: "0.5px solid #e9e9e9",
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="Rick Sanchez"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            color: "#ff5000",
                            fontSize:'13px'
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize:'15px',

                            color: "#424242",
                        }}
                    >
                        {status}
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            fontSize:'15px',

                            color: "#424242",
                        }}
                    >
                        {gender}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
