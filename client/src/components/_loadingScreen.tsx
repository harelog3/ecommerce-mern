import { Backdrop, CircularProgress } from "@mui/material";

export default function LoadingScreen({ isShown }: { isShown: boolean }) {
    return (
        <Backdrop className="" open={isShown}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
