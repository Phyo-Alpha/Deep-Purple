import { Button, IconButton, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from "@mui/icons-material/Search";
import SentimentIndividualPostTable from "./SentimentIndividualPostTable";

export default function SentimentIndividualPost() {
    return (
        <section className="flex flex-col gap-5 pt-10 px-5">
            <div className="flex flex-row justify-between items-center">
                <p className="font-bold text-3xl  ">Last 7 days</p>
                <NavLink to={"/analytics/sentiment/"}>
                    <Button variant="contained" style={{ backgroundColor: "#877EFF" }}>
                        <ArrowBackIcon /> Overall Sentiment
                    </Button>
                </NavLink>

            </div>
            <section className="pb-2 border-b-2">
                <form>
                    <TextField
                        id="search-bar"
                        color="info"
                        label="Search post"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                    />
                    <IconButton aria-label="search">
                        <SearchIcon style={{ fill: "white" }} />
                    </IconButton>
                </form>
            </section>
            <div>
                <SentimentIndividualPostTable />
            </div>
        </section>
    )
}
