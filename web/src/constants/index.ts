import analytics from "../assets/icons/analytics.svg";
import report from "../assets/icons/report.svg";
import feedback from "../assets/icons/feedback.png";
import inbox from "../assets/icons/inbox.svg";
import stream from "../assets/icons/stream.svg";

export const sidebarLinks = [
    {
        imgURL: stream,
        route: "/",
        label: "Stream",
    },
    {
        imgURL: analytics,
        route: "/analytics/sentiment",
        label: "Analytics",
    },
    {
        imgURL: report,
        route: "/report/all-report",
        label: "Report",
    },
    {
        imgURL : inbox,
        route: "/inbox",
        label : "Inbox"
    },
    
]

export const analyticsBoardLinks = [
    {
        imgURL: feedback,
        route: "/analytics/sentiment",
        label: "Sentiment analysis",
    },
    {
        imgURL: feedback,
        route: "/analytics/emotion",
        label: "Emotion Analysis",
    },
    {
        imgURL: feedback,
        route: "/analytics/metadata",
        label: "Metadata analysis",
    },
    {
        imgURL: feedback,
        route: "/analytics/negativeposts",
        label: "Negative sentiment filter",
    }
]