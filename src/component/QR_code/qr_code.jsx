import React from 'react';
import QRCode from 'react-qr-code';
// import QRCode from 'qrcode'
import { useState  } from 'react'
import { Link } from 'react-router-dom';


export default function Qr_code() {
  // const my_code = document.querySelector();
  const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

  
  

  return (
    <div className="qrcode">
      <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorTransparent MuiAppBar-positionStatic jss187 css-qixh7c">
        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2">
          <Link to="/"
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeStart MuiIconButton-sizeMedium css-7vbamj"
            tabindex="0"
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowBackIcon"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
            <span class="MuiTouchRipple-root css-w0pj6f"></span>
          </Link>
          <h6 class="MuiTypography-root MuiTypography-h6 jss188 css-1anx036">
            Mã QR code
          </h6>
        </div>
      </header>
      <h3>My QR Code</h3>
     <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vipid.app/user/hantiennhat" alt="" title="" />
    </div>
  );
}
