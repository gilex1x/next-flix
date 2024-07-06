import NavigationBar from "@/app/components/molecules/NavigationBar"
import style from '@/app/styles/templates/index.module.css'
import LoadMask from "../../atoms/LoadMask";
const MainTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={style.template_container}>
            <NavigationBar showActionButton showSearchBar showBackButton={false} />
            {children}
            <LoadMask />
        </div>
    )
};

export default MainTemplate