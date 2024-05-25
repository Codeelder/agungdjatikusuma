import { LayananLayout } from "@/components/molecules/layananLayout";
import { DATAS } from "@/constants";

export const LayananSection = () => {
    return (
        <div className="container space-y-10 overflow-x-hidden">
                <LayananLayout data={DATAS[0]} flexRow="md:flex-row"/>
                <LayananLayout data={DATAS[1]} flexRow="md:flex-row-reverse"/>
                <LayananLayout data={DATAS[2]} flexRow="md:flex-row"/>
                <LayananLayout data={DATAS[3]} flexRow="md:flex-row-reverse"/>
        </div>
    );
};
