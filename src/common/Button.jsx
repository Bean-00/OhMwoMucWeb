import {useNavigate} from "react-router-dom";
import kakao from "/src/assets/logo/kakaoC.svg";
import google from "/src/assets/logo/googleG.svg";
import naver from "/src/assets/logo/naverN.svg";
import email from "/src/assets/logo/email.svg";

const Button = ({
                    name,
                    nameColor = "#EE5460",
                    color = "#EE5460",
                    border = false,
                    borderColor = "#EE5460",
                    logo,
                    width,
                    onBtnClick = null
                }) => {

    const logos = {
        kakao: kakao,
        google: google,
        naver: naver,
        email: email
    };

    return (
        <button
            type="button"
            className="text-white p-3 rounded-xl flex items-center justify-center"
            style={{
                background: color, boxSizing: "border-box",
                ...(border && {border: `1px solid ${borderColor}`, color: nameColor}),
                ...(width && {width: width})
            }}
            onClick={() => {
                onBtnClick && onBtnClick()
            }}
        >
            {logo && logos[logo] &&
                <img src={logos[logo]} alt={`${logo}-img`} className="mr-2" style={{height: "20px", width: "auto"}}/>}
            {name}
        </button>
    );
};

export default Button;
