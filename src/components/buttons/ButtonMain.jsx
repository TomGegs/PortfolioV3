const ButtonMain = ({ label, url }) => {
    return (
        <div>
            <button
                rel="noopener noreferrer"
                type="button"
                onClick={() => window.open(url, "_blank")}
                className="my-2 flex transform cursor-pointer rounded-lg border border-primary bg-primary px-[16px] py-3 text-center font-encode text-[0.8rem] font-light text-white transition-transform hover:border-altSecond hover:bg-altSecond focus:outline-none active:scale-[98%] lg:px-8 lg:py-4 lg:text-lg">
                {label}
            </button>
        </div>
    );
};

export default ButtonMain;
