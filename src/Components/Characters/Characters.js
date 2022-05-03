import { Grid, Typography } from "@mui/material";
import RickCard from "../RickCard";

export default function Characters({ characters }) {
    return (
        <Grid container spacing={2} >
            {characters.length > 0 ? (
                characters.map((character) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2}
                            key={character.id}
                            sx={{display:'flex',justifyContent:'center' ,my:2}}
                        >
                            <RickCard
                                name={character.name}
                                status={character.status}
                                gender={character.gender}
                                image={character.image}
                            />
                        </Grid>
                    );
                })
            ) : (
                <Grid item xs={12} sx={{ textAlign: "center", my: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#424242",
                        }}
                    >
                        The search has not returned any results!
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
}
