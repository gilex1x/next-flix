import style from '@/app/styles/atoms/actionButton.module.css'
interface ActionButtonProps {
    buttonText: string;
    callback: React.MouseEventHandler<HTMLButtonElement>;
    isDisabled: boolean;
}
const ActionButton = ({ buttonText, callback, isDisabled }: ActionButtonProps) => {
    return (
        <button
            className={style.action_btn}
            disabled={isDisabled}
            onClick={callback}
            type='button'>
            {buttonText}
        </button>
    )
}

export default ActionButton