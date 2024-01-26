import { MyReports } from "../../types"

interface InboxFeedbackProps {
    reply: MyReports
}

export default function InboxFeedback({ reply }: InboxFeedbackProps) {
    return (
        <div className="flex flex-col gap-3 bg-purple-1 w-full p-5 rounded-lg">
            <div className="flex flex-row justify-between items-start max-w-[400px]">
                <p>From user: @{reply.report_by_name}</p>
                <p>Date: {reply.report_date}</p>
            </div>
            <p>Content : </p>
            <p>{reply.report_text}</p>
        </div>
    )
}