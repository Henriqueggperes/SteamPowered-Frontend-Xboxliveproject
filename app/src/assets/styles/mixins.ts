import { css } from 'styled-components';
import { colors } from './colors';
import { constants } from './constants';
import logo_steam from './../img/logo_steam.svg'

const titleStyle = () =>css`
font-family: ${constants.fontFamily};
size: ${constants.headingFontSize};
`
const currencyStile = () =>css`
font-family: ${constants.fontFamily};
font-weight: ${constants.fontWheight};
size: ${constants.currencyFontSize};
`
const profileStyleImg = ()=>css`
height: ${constants.profileImgHeight};
width: ${constants.profileImgWidth};
`
const profileNameStyle = () =>css`
font-family: ${constants.fontFamily};
size: ${constants.profileNameFontSize};
`
const adminSettingsFontStyle = () =>css`
font-family: ${constants.fontFamily};
size: ${constants.adminSettingsFontSize};
`
const crownImgStyle =() =>css`
height: ${constants.crownImgHeight};
width: ${constants.crownImgWidth};
top:${constants.crownImgTopSpace};
left: ${constants.crownImgLeftSpace};
`
export const mixins = {
    titleStyle,
    currencyStile,
    profileStyleImg,
    profileNameStyle,
    crownImgStyle,
    adminSettingsFontStyle,
}