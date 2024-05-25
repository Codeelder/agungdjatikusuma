import { DataType } from "@/constants";
import { cn } from "@/lib/utils";

type Props = {
    data: DataType
    flexRow?: string
};

export const LayananLayout = ({
    data,
    flexRow
}: Props) => {
    return (
        <div className={cn("flex flex-col space-y-14 md:space-y-0 md:gap-x-10", flexRow)}>
            <div className="w-full md:w-1/2 space-y-5">
                <h1 className="text-3xl md:text-5xl font-semibold">{data.title}</h1>
                <p>{data.children}</p>
            </div>
            <div className="relative w-full md:w-1/2">
                <img src={data.imgSrc} alt={data.title} />
                <img className={`absolute -top-16 md:-top-32 ${data.position} w-40 h-36 md:w-72 md:h-64`} src={data.svgSrc} alt="" />
            </div>
        </div>
    );
};
