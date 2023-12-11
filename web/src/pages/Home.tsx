import { useEffect, useState } from "react";
import SocialListeningContent from "../components/SocialListeningContent"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"
import { socialMediaStream } from "../types"
import { useParams } from "react-router-dom";
import { getStreamFromDB } from "../api/appwrite/api";

export default function Home() {

    const [stream, setStream] = useState<socialMediaStream>({
        socialMedia: "",
        socialmedia_username: "",
        streamName: "",
    });

    const { dashboardname } = useParams<{ dashboardname: string }>();

    useEffect(() => {
        if (dashboardname === undefined) {
            return;
        }
        console.log(dashboardname);
        const streamName = dashboardname + " - " + "streamfeeds";

        const fetchStream = async () => {
            const stream = await getStreamFromDB(streamName);

            if (stream === undefined || stream.total === 0) {
                console.log("Stream not found");

                const socialMediaStream: socialMediaStream = {
                    socialMedia: "Twitter",
                    socialmedia_username: "",
                    streamName: streamName,
                };
                setStream(socialMediaStream);

                return;
            } else {
                console.log(stream);
                const socialMediaStream: socialMediaStream = {
                    socialMedia: stream.documents[0].socialMedia,
                    socialmedia_username: stream.documents[0].socialmedia_username,
                    streamName: stream.documents[0].streamName,
                }
                setStream(socialMediaStream);
            }
        }
        fetchStream();
    }, [dashboardname]);


    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar />
            <div className="flex-grow flex-col">
                <SocialListeningContent stream={stream} />
            </div>


        </div>
    )
}
