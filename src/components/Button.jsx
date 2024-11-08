export const ButtonCompo = ({bgColor, textContent }) => {
    return (
        <button style={{backgroundColor : bgColor}} className='sm:py-[15px] py-2 px-3 sm:px-[30px] font-Hoover font-bold rounded-full'>
            {textContent}
        </button>
    )
}