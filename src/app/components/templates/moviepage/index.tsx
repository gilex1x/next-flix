import NavigationBar from "@/app/components/molecules/NavigationBar"
import style from '@/app/styles/templates/index.module.css'
import LoadMask from "../../atoms/LoadMask";
const MoviePageTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={style.template_container}>
            <NavigationBar showActionButton={false} showSearchBar={false} showBackButton />
            {children}
            <LoadMask />
        </div>
    )
};

export default MoviePageTemplate