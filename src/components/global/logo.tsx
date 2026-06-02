
function Logo() {
    return (
        <div className="flex flex-row items-center gap-1">
            <img src="/fnc-logo.png" alt="FNC" className="w-12 h-12" />
            <div className="flex flex-row items-baseline font-cinzel font-bold gap-1 text-[24px] mt-3">
                <div className="leading-normal bg-gradient-to-r from-black via-[#312fbc] to-[#312fbc] bg-clip-text text-transparent">FNC</div>
                <div className="leading-normal bg-gradient-to-r from-black via-[#312fbc] to-[#312fbc] bg-clip-text text-transparent">Shoppe</div>
            </div>
        </div>
    )
}

export default Logo