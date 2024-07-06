import NavigationBar from "@/app/components/molecules/NavigationBar"
import style from '@/app/styles/templates/index.module.css'
const MoviePageTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={style.template_container}>
            <NavigationBar showActionButton={false} showSearchBar={false} showBackButton />
            {children}
        </div>
    )
};

export default MoviePageTemplate