import { createGlobalStyle } from 'styled-components';
import pageBackground from '../images/Background/page-background.png';
import pageBackgroundLarge from '../images/Background/page-background@2x.png';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
    box-sizing: border-box;
    }
    html {
    -moz-tab-size: 4;
    tab-size: 4;
    }
    html {
    -webkit-text-size-adjust: 100%;
    }
    body {
    min-height: 900px;
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(21 / 14);
    letter-spacing: -0.01em;

    background-image: linear-gradient(339.02deg, #0d3251 0%, #19476c 103.05%),
    url(${pageBackground});
    @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: linear-gradient(339.02deg, #0d3251 0%, #19476c 103.05%),
        url(${pageBackgroundLarge});
        }
    
    background-size: 40%, 60% 100%;
    background-repeat: no-repeat;
    background-position: top 0 left 0, top 0 right 0;
    }
    .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: #24CCA7;
    }
    .Toastify__toast-theme--colored.Toastify__toast--warning {
    background-color: #fed057;
    }
    .Toastify__toast-theme--colored.Toastify__toast--error {
    background-color: #ff6596;
    }
    ul{
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    }
    h1, h2, h3, h4, h5, p{
    margin-top: 0;
    margin-bottom: 0;
    }
    table {
    text-indent: 0;
    border-color: inherit;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    }
    button{
    cursor: pointer;
    border: none;
    }
`;

export const toastStyled = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};
