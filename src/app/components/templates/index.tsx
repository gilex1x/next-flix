import NavigationBar from "../molecules/NavigationBar";
import style from '@/app/styles/templates/index.module.css'
const MainTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={style.template_container}>
            <NavigationBar />
            {children}
        </div>
    )
};

export default MainTemplate