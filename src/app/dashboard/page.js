import { CardStatus } from "@/components/CardStatus/CardStatus";
import SideBar from "@/components/SideBar/SideBar";

export default function DashBoardPage() {
    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <SideBar />
            <CardStatus />
        </div>
    )
}