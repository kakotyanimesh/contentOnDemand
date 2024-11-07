export const ButtonCompo = ({bgColor, textContent }) => {
    return (
        <button style={{backgroundColor : bgColor}} className='py-[15px] px-[30px] font-Hoover font-bold rounded-full'>
            {textContent}
        </button>
    )
}