import { Box, Pagination } from "@mui/material";

export default function Paginate({ info, updatePage }) {
    if (info.pages > 1) {
        return (
            <Box
                component="div"
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <Pagination
                    count={info.pages}
                    color="primary"
                    onChange={updatePage}
                />
            </Box>
        );
    }
}
