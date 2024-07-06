import NavigationBar from "@/app/components/molecules/NavigationBar"
import style from '@/app/styles/templates/index.module.css'
const MainTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={style.template_container}>
            <NavigationBar showActionButton showSearchBar showBackButton={false} />
            {children}
        </div>
    )
};

export default MainTemplate